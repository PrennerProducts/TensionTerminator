import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  Alert
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import * as FileSystem from 'expo-file-system';
import { Link, useRouter } from 'expo-router';
import { evaluationData } from './evaluationData';

const evaluationYR = () => {
  const router = useRouter();
  
  const [hasPermission, setHasPermission] = useState(null);
  const [landmarkData, setLandmarkData] = useState([]);
  const [ScreenText, setScreenText] = useState('');

  const exercise = evaluationData.exercise; // 0: Yaw, 1: Roll

  const [yaw, setYaw] = useState(0);
  const [isYawStable, setIsYawStable] = useState(true);

  const minYaw = 15;
  const minRoll = 7;
  const maxCounter = 2;

  const [roll, setRoll] = useState(0);
  const [isRollStable, setIsRollStable] = useState(true);

  const [maxR, setMaxR] = useState(0);
  const [maxL, setMaxL] = useState(0);
  
  const [lineCoordinates, setLineCoordinates] = useState(null);
  const cameraRef = useRef(null);
  const [evaluationStarted, setEvaluationStarted] = useState(false);
  const [evaluationActive, setEvaluationActive] = useState(false);
  const [evaluationSuccess, setEvaluationSuccess] = useState(false);
  const mutex = useRef(false);

  const [instruction, setInstruction] = useState('');
  const [counterR, setCounterR] = useState(0);
  const [counterL, setCounterL] = useState(0);

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
    const capturePromise = new Promise(async (resolve, reject) => {
      if (mutex.current) {return;}
      mutex.current = true;
      console.log('mutex ' + mutex.current);
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
        console.log('Image captured and stored: ' + evaluationData.imageName);
        mutex.current = false;
        console.log('mutex ' + mutex.current);
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
      if (!isYawStable) {return;}
      if (yaw > minYaw && yaw < 180) {
        setCounterR(1);
        console.log(`Current YawR: ${yaw}, Max YawR: ${maxR}`);
        setScreenText('-> ' + yaw + '°');
        setMaxR((prev) => {
          if (yaw > prev) {
            console.log('New MaxYR reached');
            evaluationData.imageName = 'MaxYR.jpg';
            takePicture(); 
          }
          return Math.max(prev, yaw);
        });
      } else if (yaw < (360-minYaw) && yaw > 180) {
        setCounterL(1);
        let yawL = 360 - yaw;
        console.log(`Current YawL: ${yawL}, Max YawL: ${maxL}`);
        setScreenText('<- ' + yawL + '°');
        setMaxL((prev) => {
          if (yawL > prev) {
            console.log('New MaxYL reached');
            evaluationData.imageName = 'MaxYL.jpg';
            takePicture(); 
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
      if (!isRollStable) {return;}
      if (roll > minRoll && roll < 80) {
        setCounterR(counterR + 1);
        console.log(`Current RollR: ${roll}, Max RollR: ${maxR}`);
        setScreenText('-> ' + roll + '°');
        setMaxR((prev) => {
          if (roll > prev) {
            console.log('New MaxRR reached');
            evaluationData.imageName = 'MaxRR.jpg';
            takePicture(); 
          }
          return Math.max(prev, roll);
        });
      } else if (roll < (360-minRoll) && roll > 280) {
        setCounterL(counterL + 1);
        let rollL = 360 - roll;
        console.log(`Current RollL: ${rollL}, Max RollL: ${maxL}`);
        setScreenText('<- ' + rollL + '°');
        setMaxL((prev) => {
          if (rollL > prev) {
            console.log('New MaxRL reached');
            evaluationData.imageName = 'MaxRL.jpg';
            takePicture(); 
          }
          return Math.max(prev, rollL);
        });
      } else {
        updateLogicBasedOnCounters();
        setScreenText('');
      }
    }
  }, [roll]);

  // 
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

  // Face Detector Logik
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
        face.LEFT_EYE && face.RIGHT_EYE &&
        face.NOSE_BASE && 
        face.BOTTOM_MOUTH &&
        face.LEFT_MOUTH && face.RIGHT_MOUTH &&
        face.LEFT_EAR && face.RIGHT_EAR
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
        const landmarkData = {
          leftEye: face.LEFT_EYE, rightEye: face.RIGHT_EYE,
          noseBase: face.NOSE_BASE,
          bottomMouth: face.BOTTOM_MOUTH,
          leftMouth: face.LEFT_MOUTH, rightMouth: face.RIGHT_MOUTH,
          leftEar: face.LEFT_EAR, rightEar: face.RIGHT_EAR,
        };
        setLandmarkData(landmarkData);
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
    router.replace({pathname: 'evaluationComponents/evaluationControl'});
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
            router.replace({pathname: originScreen});
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
      setMaxValuesLText('');
      setMaxValuesRText('');
      setLineCoordinates(null);
      const landmarkData = {
          leftEye: 0, rightEye: 0, noseBase: 0, bottomMouth: 0, leftMouth: 0, rightMouth: 0, leftEar: 0, rightEar: 0,
        };
        setLandmarkData(landmarkData);
      console.log("Values resetted!");
  };

  // Kurze Verzoergerung am Anfang, damit Kamera Zeit hat Gesicht zu erkennen (+100 ms)
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
          style={styles.camera}
          onFacesDetected={handleFacesDetected}
          faceDetectorSettings={{
            mode: FaceDetector.FaceDetectorMode.accurate,
            detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
            runClassifications: FaceDetector.FaceDetectorClassifications.none,
            minDetectionInterval: 100,
            tracking: true,
          }}
        >
          <Text style={styles.instructionText}>{instruction}</Text>
          {lineCoordinates && (
            <>
              {/* White Line */}
              <View
                style={{
                  position: 'absolute',
                  left: lineCoordinates.eyeCenterX,
                  top: lineCoordinates.eyeCenterY - 500,
                  width: 1,
                  height: 1000,
                  backgroundColor: 'white',
                }}
              ></View>
              {/* Red Line */}
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
              {/* Green Line */}
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
              {/* Dots*/}
              {Object.keys(landmarkData).map((landmarkName, index) => (
                <View
                  key={index}
                  style={{
                    position: 'absolute',
                    left: landmarkData[landmarkName].x,
                    top: landmarkData[landmarkName].y,
                    width: 4,
                    height: 4,
                    backgroundColor: 'blue',
                    borderRadius: 2,
                  }}
                ></View>
              ))}
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
      {evaluationStarted && (
        <TouchableOpacity onPress={resetValues} style={styles.resetButton}>
          <Text style={styles.exitButtonText}>Zurücksetzen</Text>
        </TouchableOpacity>
      )}
      {evaluationStarted && (
        <View style={styles.textContainer}>
          <Text style={styles.faceDesc}>{ScreenText}</Text>
          <Text style={styles.maxValues}>
            Max L: {maxL}; Max R: {maxR}
          </Text>
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
    backgroundColor: 'blue',
    margin: 20,
  },
  camera: {
    flex: 1,
  },
  resetButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'blue',
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
  maxValues: {
    fontSize: 20,
    color: 'yellow',
  },
  instructionText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    position: 'absolute',
    top: 100,
    left: 20,
  }
});

export default evaluationYR;