import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
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

  const [roll, setRoll] = useState(0);
  const [isRollStable, setIsRollStable] = useState(true);

  const [maxR, setMaxR] = useState(0);
  const [maxL, setMaxL] = useState(0);
  
  const [lineCoordinates, setLineCoordinates] = useState(null);
  const cameraRef = useRef(null);
  const [evaluationStarted, setEvaluationStarted] = useState(false);
  const [evaluationActive, setEvaluationActive] = useState(false);
  const mutex = useRef(false);
  const [cacheBuster, setCacheBuster] = useState(Date.now());
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

  const takePicture = async (imageName) => {
    if (mutex.current) {return;}
    mutex.current = true;
    if (cameraRef.current) {
      const options = { quality: 0.2, base64: true };
      const photo = await cameraRef.current.takePictureAsync(options);
      await FileSystem.moveAsync({from: photo.uri, to: `${FileSystem.documentDirectory}${imageName}`,});
      console.log('Picture taken: ' + imageName);
      mutex.current = false;
    }
  };

  // Effekt für Yaw-Änderungen
  useEffect(() => {
    if (!evaluationActive) return;
    if (exercise === 0){
      if (!isYawStable) {return;}
      if (yaw > 15 && yaw < 180) {
        setCounterR(1);
        updateInstructionBasedOnCounters();
        console.log(`Current YawR: ${yaw}, Max YawR: ${maxR}`);
        setScreenText('-> ' + yaw + '°');
        setMaxR((prev) => {
          if (yaw > prev) {takePicture('MaxYR.jpg');}
          return Math.max(prev, yaw);
        });
      } else if (yaw < 345 && yaw > 180) {
        setCounterL(1);
        updateInstructionBasedOnCounters();
        let yawL = 360 - yaw;
        console.log(`Current YawL: ${yawL}, Max YawL: ${maxL}`);
        setScreenText('<- ' + yawL + '°');
        setMaxL((prev) => {
          if (yawL > prev) {takePicture('MaxYL.jpg');}
          return Math.max(prev, yawL);
        });
      } else {
        updateInstructionBasedOnCounters();
        setScreenText('');
      }
    }
  }, [yaw]);

  // Effekt für Roll-Änderungen
  useEffect(() => {
    if (exercise === 1){
      if (!isRollStable) {
        updateInstructionBasedOnCounters();
        return;
      }
      if (roll >= 7 && roll < 80) {
        setCounterR(1);
        updateInstructionBasedOnCounters();
        console.log(`Current RollR: ${roll}, Max RollR: ${maxR}`);
        setScreenText('-> ' + roll + '°');
        setMaxR((prev) => {
          if (roll > prev) {
            takePicture('MaxRR.jpg');
          }
          return Math.max(prev, roll);
        });
      } else if (roll <= 353 && roll > 280) {
        setCounterL(1);
        updateInstructionBasedOnCounters();
        let rollL = 360 - roll;
        console.log(`Current RollL: ${rollL}, Max RollL: ${maxL}`);
        setScreenText('<- ' + rollL + '°');
        setMaxL((prev) => {
          if (rollL > prev) {
            takePicture('MaxRL.jpg');
          }
          return Math.max(prev, rollL);
        });
      } else {
        updateInstructionBasedOnCounters();
        console.log(roll, 'Roll out of range.');
        setScreenText('');
      }
    }
  }, [roll]);

  const updateInstructionBasedOnCounters = () => {
    if (!evaluationActive) return;
    if (counterR === 0 && counterL === 0) {
      if (exercise === 0) setInstruction('Kopf nach rechts oder links drehen <-->');
      else setInstruction('Kopf nach rechts oder links neigen <-->');
    } 
    else if (counterR === 1 && counterL === 0) {
      setInstruction('');
      // if (exercise === 0) setInstruction('Bitte Kopf nach links drehen <--');
      // else setInstruction('Bitte Kopf nach links neigen <--');
    } 
    else if (counterR === 0 && counterL === 1) {
      setInstruction('');
      // if (exercise === 0) setInstruction('Bitte Kopf nach rechts drehen -->');
      // else setInstruction('Bitte Kopf nach rechts neigen <--');
    } 
    else if (counterR === 1 && counterL === 1) {
      if (exercise === 0 && !isYawNeutral()) return;
      else if (exercise === 1 && !isRollNeutral()) return;
      setInstruction('Super! Evaluierung ' + (exercise+1) + 'abgeschlossen :D');
      setTimeout(() => {
        exitEvaluation();
      }, 2000);
    }
  };

  const isYawNeutral = () => {return yaw < 5 || yaw > 355;};
  const isRollNeutral = () => {return roll <= 5 || roll >= 365;};

  const handleFacesDetected = ({ faces }) => {
    if (faces.length === 0) {
      setScreenText('No Face Detected');
      return;
    } else if (faces.length > 1) {
      console.log('Faces Detected: ' + faces.length);
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
      await resetValues();
      router.push({pathname: 'evaluationComponents/resultEvaluation', params: {exercise: exercise, maxL: maxL, maxR: maxR }});
  };

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
      setCacheBuster(Date.now());
      setLineCoordinates(null);
      const landmarkData = {
          leftEye: 0, rightEye: 0, noseBase: 0, bottomMouth: 0, leftMouth: 0, rightMouth: 0, leftEar: 0, rightEar: 0,
        };
        setLandmarkData(landmarkData);
      console.log("Values resetted!");
  };

  useEffect(() => {
    if (!evaluationActive) {
      setTimeout(() => {
        setEvaluationActive(true);
        setEvaluationStarted(true);
      }, 1000);
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
            mode: FaceDetector.FaceDetectorMode.fast,
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
          {/* <Image
            source={{
              uri: `${FileSystem.documentDirectory}MaxR.jpg?${cacheBuster}`,
            }}
            style={{ width: 100, height: 100 }}
          />
          <Text>Max Right: {maxR.toFixed(2)}°</Text>
          <Image
            source={{
              uri: `${FileSystem.documentDirectory}MaxL.jpg?${cacheBuster}`,
            }}
            style={{ width: 100, height: 100 }}
          />
          <Text>Max Left: {maxL.toFixed(2)}°</Text>
          <TouchableOpacity onPress={restartEvaluation}>
            <Text style={styles.startButton}>
              Evaluation erneut durchführen
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={startNextEvaluation}>
            <Text style={styles.startButton}>
              Weiter zur nächsten Evualationsübung
            </Text>
          </TouchableOpacity> */}
        </View>
      )}
      {evaluationStarted && (
        <TouchableOpacity onPress={exitEvaluation} style={styles.exitButton}>
          <Text style={styles.exitButtonText}>Exit</Text>
        </TouchableOpacity>
      )}
      {evaluationStarted && (
        <View style={styles.textContainer}>
          <Text style={styles.faceDesc}>{ScreenText}</Text>
          <Text style={styles.maxValues}>
            Links: {maxL.toFixed(2)}°, Rechts: {maxR.toFixed(2)}°
          </Text>
        </View>
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
  exitButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  exitButtonText: {
    fontSize: 16,
    color: 'white',
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
