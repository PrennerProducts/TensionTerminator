import { StyleSheet, Text, View, TouchableOpacity, Alert, Dimensions} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import * as FileSystem from 'expo-file-system';
import { useRouter } from 'expo-router';
import { evaluationData } from './evaluationData';

// Komponente zur Winkelerkennung. Konsolenlogs und Landmark-Ausgabe wurden auskommentiert...

const evaluationYR = () => {
  const router = useRouter();
  const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
  const [hasPermission, setHasPermission] = useState(null);
  const [ScreenText, setScreenText] = useState('');
  const exercise = evaluationData.exercise; // 0: Bewegung 1; 1: Bewegung 2
  const [yaw, setYaw] = useState(0); // yaw = Rotation
  const [roll, setRoll] = useState(0); // roll = Neigung

  // Parameter zur Feinjustierung
  const minYaw = 15; // Ab wieviel Grad soll Rotation erkannt werden... 
  const minRoll = 7; // Ab wieviel Grad soll Neigung erkannt werden... 
  const maxCounter = 1; // Zaehler fuer Auto Exit
  const detectionInterval = 30; // Abtastrate in Milli-Sekunden
  const minDegreeForPic = 2.5; // Wieviel Grad Winkel zwischen 2 Fotos
  const minTimeForPic = 200; // Wieviel Millisekunden zwischen 2 Fotos

  const shouldTakePictures = evaluationData.shouldTakePictures; // Zum Deaktivieren der Foto-Logik
  const [savedTimestamp, setSavedTimestamp] = useState(new Date());

  const [maxR, setMaxR] = useState(0);
  const [maxL, setMaxL] = useState(0);
  
  const [lineCoordinates, setLineCoordinates] = useState(null);
  const cameraRef = useRef(null);
  const [evaluationStarted, setEvaluationStarted] = useState(false);
  const [evaluationActive, setEvaluationActive] = useState(false);
  const [evaluationSuccess, setEvaluationSuccess] = useState(false);
  const mutex = useRef(false);

  const [instruction, setInstruction] = useState('Anleitungstext');
  const [counterR, setCounterR] = useState(0);
  const [counterL, setCounterL] = useState(0);
  // const [landmarkData, setLandmarkData] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // Foto Logik
  const takePicture = async () => {
    if (shouldTakePictures === false) return;
    const capturePromise = new Promise(async (resolve, reject) => {
      if (mutex.current) {return;}
      mutex.current = true;
      //console.log('mutex ' + mutex.current);
      try {
        const options = { quality: 0.2, base64: false, skipProcessing: true };
        const photo = await cameraRef.current.takePictureAsync(options);
        resolve(photo);
      } catch (error) {
        console.error('Error taking picture:', error);
        reject(error);
      }
    });
    const timeout = 0;
    setTimeout(async () => {
      try {
        const capturedImage = await capturePromise;
        await FileSystem.moveAsync({
          from: capturedImage.uri,
          to: `${FileSystem.documentDirectory}${evaluationData.imageName}`,
        });
        //console.log('Image captured and stored: ' + evaluationData.imageName);
        mutex.current = false;
        //console.log('mutex ' + mutex.current);
      } catch (error) {
        console.error('Error capturing and storing image:', error);
      }
    }, timeout);
  };

  // Effekt für Yaw-Änderungen
  useEffect(() => {
    if (!evaluationActive) return;
    if (exercise === 0){
      updateLogicBasedOnCounters();
      if (yaw > minYaw && yaw < 180) {
        setCounterR(1);
        //console.log(`Current YawR: ${yaw}, Max YawR: ${maxR}`);
        setScreenText('-> ' + yaw + '°');
        setMaxR((prev) => {
          if (yaw > prev) {
            //console.log('New MaxYR reached');
            evaluationData.imageName = 'MaxYR.jpg';
            const diff = yaw-prev;
            //console.log(diff);
            const timestamp = new Date();
            const timeDifference = timestamp - savedTimestamp;
            //console.log(diff, timestamp.toISOString(), savedTimestamp, timeDifference);
            if (diff > minDegreeForPic && timeDifference > minTimeForPic) {
              //console.log('Picture taken', diff, timestamp.toISOString());
              takePicture();
              setSavedTimestamp(timestamp); 
            }
          }
          return Math.max(prev, yaw);
        });
      } else if (yaw < (360-minYaw) && yaw > 180) {
        setCounterL(1);
        let yawL = 360 - yaw;
        //console.log(`Current YawL: ${yawL}, Max YawL: ${maxL}`);
        setScreenText('<- ' + yawL + '°');
        setMaxL((prev) => {
          if (yawL > prev) {
            //console.log('New MaxYL reached');
            evaluationData.imageName = 'MaxYL.jpg';
            const diff = yawL-prev;
            const timestamp = new Date();
            const timeDifference = timestamp - savedTimestamp;
            if (diff > minDegreeForPic && timeDifference > minTimeForPic) {
              takePicture();
              setSavedTimestamp(timestamp); 
            }
          }
          return Math.max(prev, yawL);
        });
      } else {
        updateLogicBasedOnCounters();
        setScreenText('');
      }
    }
  }, [yaw]);

  // Effekt für Roll-Änderungen
  useEffect(() => {
    if (!evaluationActive) return;
    if (exercise === 1){
      updateLogicBasedOnCounters();
      if (roll > minRoll && roll < 80) {
        setCounterR(counterR + 1);
        //console.log(`Current RollR: ${roll}, Max RollR: ${maxR}`);
        setScreenText('-> ' + roll + '°');
        setMaxR((prev) => {
          if (roll > prev) {
            //console.log('New MaxRR reached');
            evaluationData.imageName = 'MaxRR.jpg';
            const diff = roll-prev;
            const timestamp = new Date();
            const timeDifference = timestamp - savedTimestamp;
            if (diff > minDegreeForPic && timeDifference > minTimeForPic) {
              takePicture();
              setSavedTimestamp(timestamp); 
            } 
          }
          return Math.max(prev, roll);
        });
      } else if (roll < (360-minRoll) && roll > 280) {
        setCounterL(counterL + 1);
        let rollL = 360 - roll;
        //console.log(`Current RollL: ${rollL}, Max RollL: ${maxL}`);
        setScreenText('<- ' + rollL + '°');
        setMaxL((prev) => {
          if (rollL > prev) {
            //console.log('New MaxRL reached');
            evaluationData.imageName = 'MaxRL.jpg';
            const diff = rollL-prev;
            const timestamp = new Date();
            const timeDifference = timestamp - savedTimestamp;
            if (diff > minDegreeForPic && timeDifference > minTimeForPic) {
              takePicture();
              setSavedTimestamp(timestamp); 
            }
          }
          return Math.max(prev, rollL);
        });
      } else {
        updateLogicBasedOnCounters();
        setScreenText('');
      }
    }
  }, [roll]);

  // Counter Logik
  const updateLogicBasedOnCounters = () => {
    if (!evaluationActive) return;
    if (counterR === 0 && counterL === 0) {
      if (exercise === 0) setInstruction('Kopf nach rechts oder links drehen <-->');
      else setInstruction('Kopf nach rechts oder links neigen <-->');
    }
    else if ((counterR >= 1 && counterL === 0)||(counterL >= 1 && counterR === 0)) setInstruction(''); 
    else if (counterR >= 1 && counterL >= 1) {
      if (exercise === 0 && !isYawNeutral()) return;
      else if (exercise === 1 && !isRollNeutral()) return;
      setInstruction('Super! Bewegung ' + (exercise+1) + ' abgeschlossen.');
      setEvaluationSuccess(true);
      if (counterR >= maxCounter && counterL >= maxCounter) {
        setTimeout(() => {
          if (evaluationStarted) exitEvaluation();
        }, 1000);
      }
    } 
  };

  const isYawNeutral = () => {return yaw < 5 || yaw > 355;};
  const isRollNeutral = () => {return roll <= 5 || roll >= 365;};

  // Gesichtsdetektion Logik
  const handleFacesDetected = ({ faces }) => {
    if (faces.length === 0) {
      setScreenText('Keine Erkennung');
      return;
    } else if (faces.length > 1) {
      console.log('Personen im Bild: ' + faces.length);
      return;
    } else if (faces.length > 0) {
      const face = faces[0];
      if (exercise === 0) setYaw(face.yawAngle.toFixed(0));
      else if (exercise === 1) setRoll(face.rollAngle.toFixed(0));
      if (
        face.LEFT_EYE && face.RIGHT_EYE && face.BOTTOM_MOUTH 
        //&&
        //face.NOSE_BASE && 
        //face.LEFT_MOUTH && face.RIGHT_MOUTH &&
        //face.LEFT_EAR && face.RIGHT_EAR
      ) {
        const leftEye = face.RIGHT_EYE; 
        const rightEye = face.LEFT_EYE;
        const bottomMouth = face.BOTTOM_MOUTH;
        const lineCoordinates = {
          startX: leftEye.x, startY: leftEye.y,
          endX: rightEye.x, endY: rightEye.y,
          eyeCenterX: (leftEye.x + rightEye.x) / 2,
          eyeCenterY: (leftEye.y + rightEye.y) / 2,
          bottomX: bottomMouth.x, bottomY: bottomMouth.y,
        };
        setLineCoordinates(lineCoordinates);
        // const landmarkData = {
        //   leftEye: face.LEFT_EYE, rightEye: face.RIGHT_EYE,
        //   noseBase: face.NOSE_BASE,
        //   bottomMouth: face.BOTTOM_MOUTH,
        //   leftMouth: face.LEFT_MOUTH, rightMouth: face.RIGHT_MOUTH,
        //   leftEar: face.LEFT_EAR, rightEar: face.RIGHT_EAR,
        // };
        // setLandmarkData(landmarkData);
      }
    }
  };
  
  // Funktion Auto Exit
  const exitEvaluation = async () => {
    console.log('auto exit Evaluation ' + exercise);
    setEvaluationStarted(false);
    setEvaluationActive(false);
    setLineCoordinates(null);
    if (exercise === 0){
      evaluationData.maxYL = maxL;
      evaluationData.maxYR = maxR;
    }
    else if (exercise === 1){
      evaluationData.maxRL = maxL;
      evaluationData.maxRR = maxR;
    }
    else{
    console.log("Invalid exercise: " + exercise);
    }
    router.push({pathname: 'evaluationComponents/evaluationControl'});
  };

  const cancelEvaluation = async () => {
    return Alert.alert(
      "Sind Sie sicher?",
      "Ihre Ergebnisse werden verworfen...",
      [
        {
          text: "Ja",
          onPress: () => {
            const originScreen = evaluationData.originScreen;
            evaluationData.resetValues();
            router.push({pathname: originScreen});
          },
        },
        {
          text: "Nein",
        },
      ]
    );
  };

  // Funktion Reset Button
  const resetValues = async () => {
      console.log("Resetting values...");
      setCounterR(0);
      setCounterL(0);
      setYaw(0);
      setRoll(0);
      setMaxR(0);
      setMaxL(0);
      setScreenText('');
      setInstruction('');
      setLineCoordinates(null);
      // const landmarkData = {
      //     leftEye: 0, rightEye: 0, noseBase: 0, bottomMouth: 0, leftMouth: 0, rightMouth: 0, leftEar: 0, rightEar: 0,
      //   };
      //   setLandmarkData(landmarkData);
      console.log("Values resetted!");
  };

  // Kurzes Warten am Anfang, damit Kamera Zeit hat, Gesicht zu erkennen (+100 ms)
  useEffect(() => {
    if (!evaluationActive) {
      setTimeout(() => {
        setEvaluationStarted(true);
        setTimeout(() => {
          setEvaluationActive(true);
        }, 200);
      }, 100);
    }
  }, [evaluationActive]);

  return (
    <View style={styles.container}>
      {evaluationStarted ? (
        <Camera
          ref={(ref) => {
            cameraRef.current = ref;
          }}
          type={Camera.Constants.Type.front}
          autoFocus={false}
          style={styles.camera}
          onFacesDetected={handleFacesDetected}
          faceDetectorSettings={{
            mode: FaceDetector.FaceDetectorMode.accurate,
            detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
            runClassifications: FaceDetector.FaceDetectorClassifications.none,
            minDetectionInterval: {detectionInterval},
            tracking: true,
          }}
        >
          <Text style={styles.instructionText}>{instruction}</Text>
          {lineCoordinates && (
            <>
              {/* Fadenkreuz: */}
              {/* Linie durch Augenmitte vertikal */}
              <View
                style={{
                  position: 'absolute',
                  left: lineCoordinates.eyeCenterX,
                  top: lineCoordinates.eyeCenterY - 50,
                  width: 2,
                  height: 100,
                  backgroundColor: '#10069f',
                }}></View>

              {/* Linie durch Augenmitte horizontal */}
              <View
                style={{
                  position: 'absolute',
                  left: lineCoordinates.eyeCenterX - 50,
                  top: lineCoordinates.eyeCenterY,
                  width: 100,
                  height: 2,
                  backgroundColor: '#10069f',
                }}></View>

              {/* Linien vertikal und horizontal zur Bildmitte */}
              <View
                style={{
                  position: 'absolute',
                  left: (screenWidth - 1000) / 2,
                  top: (screenHeight - 1) / 2,
                  width: 1000,
                  height: 1,
                  backgroundColor: 'white',
                }}
              ></View>
              <View
                style={{
                  position: 'absolute',
                  left: (screenWidth - 1) / 2,
                  top: (screenHeight - 1000) / 2,
                  width: 1,
                  height: 1000,
                  backgroundColor: 'white',
                }}
                ></View>

              {/* Linie zwischen Augen 
              <View
                style={{
                  position: 'absolute',
                  left: lineCoordinates.startX,
                  top: lineCoordinates.startY,
                  width: Math.sqrt(Math.pow(lineCoordinates.endX - lineCoordinates.startX, 2) +Math.pow(lineCoordinates.endY - lineCoordinates.startY, 2)),
                  height: 3,
                  backgroundColor: 'red',
                  transform: [
                    {rotate: `${Math.atan2(lineCoordinates.endY - lineCoordinates.startY,lineCoordinates.endX - lineCoordinates.startX)}rad`,},],
                  transformOrigin: '0% 0%',
                }}
              ></View>
              */}
              {/* Linie Augenmitte zu Nase 
              <View
                style={{
                  position: 'absolute',
                  left: lineCoordinates.eyeCenterX,
                  top: lineCoordinates.eyeCenterY,
                  width: 3,
                  height: Math.sqrt(Math.pow(lineCoordinates.bottomX - lineCoordinates.eyeCenterX,2) + Math.pow(lineCoordinates.bottomY - lineCoordinates.eyeCenterY,2)),
                  backgroundColor: 'green',
                  transform: [{rotate: `${Math.atan2(lineCoordinates.eyeCenterX - lineCoordinates.bottomX,lineCoordinates.bottomY - lineCoordinates.eyeCenterY)}rad`,},],
                  transformOrigin: '0% 0%',
                }}
              ></View>
              */}

              {/* Dots
              {Object.keys(landmarkData).map((landmarkName, index) => (
                <View
                  key={index}
                  style={{
                    position: 'absolute',
                    left: landmarkData[landmarkName].x,
                    top: landmarkData[landmarkName].y,
                    width: 4,
                    height: 4,
                    backgroundColor: '#10069f',
                    borderRadius: 2,
                  }}
                ></View>
              ))}
              */}

            </>
          )}
        </Camera>
      ) : (
        <View style={styles.startScreen}>
          {/**/}
        </View>
      )}
      {evaluationStarted && (
        <TouchableOpacity onPress={cancelEvaluation} style={styles.exitButton}>
          <Text style={styles.exitButtonText}>Abbrechen</Text>
        </TouchableOpacity>
      )}
      {/* Button zum Zurücksetzen der Werte
      {evaluationStarted && (
        <TouchableOpacity onPress={resetValues} style={styles.resetButton}>
          <Text style={styles.exitButtonText}>Zurücksetzen</Text>
        </TouchableOpacity>
      )}
      */}
      {evaluationStarted && (
        <View style={styles.maxValuesContainer}>
            <Text style={styles.maxValuesL}>Max L: {maxL}° </Text>
            <Text style={styles.faceDesc}>{ScreenText}</Text>
            <Text style={styles.maxValuesR}>Max R: {maxR}° </Text>
        </View>
      )}
      {evaluationSuccess && (
        <TouchableOpacity onPress={exitEvaluation} style={styles.continueButton}>
          <Text style={styles.continueButtonText}>Weiter</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  startScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButton: {
    fontSize: 20,
    color: 'white',
    padding: 10,
    backgroundColor: '#10069f',
    margin: 20,
  },
  camera: {
    flex: 1,
  },
  resetButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#10069f',
    padding: 10,
    borderRadius: 5,
  },
  exitButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  exitButtonText: {
    fontSize: 16,
    color: 'white',
  },
  continueButton: {
    position: 'absolute',
    bottom: 50,
    right: 20,
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 5,
  },
  continueButtonText: {
    fontSize: 16,
    color: 'black',
  },
  textContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
  faceDesc: {
    fontSize: 20,
    color: 'white',
  },
  maxValuesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  maxValuesL: {
    fontSize: 24,
    textAlign: 'left',
    color: 'green',
  },
  maxValuesR: {
    fontSize: 24,
    textAlign: 'right',
    color: 'orange',
  },
  instructionText: {
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    top: '20%',
    color: '#10069f',
  }
});

export default evaluationYR;