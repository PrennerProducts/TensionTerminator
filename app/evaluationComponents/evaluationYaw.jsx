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

const evaluationYaw = () => {
  const router = useRouter();

  const [hasPermission, setHasPermission] = useState(null);
  const [landmarkData, setLandmarkData] = useState([]);
  const [yaw, setYaw] = useState(0);
  const [ScreenText, setScreenText] = useState('');
  const [maxYawR, setMaxYawR] = useState(0);
  const [maxYawL, setMaxYawL] = useState(0);
  const [lineCoordinates, setLineCoordinates] = useState(null); // Store line coordinates
  const cameraRef = useRef(null);
  const [evaluationStarted, setEvaluationStarted] = useState(true);
  const mutex = useRef(false);
  const [isYawStable, setIsYawStable] = useState(true);
  const [cacheBuster, setCacheBuster] = useState(Date.now());
  const [capturedPhotoUri, setCapturedPhotoUri] = useState(null);
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
    if (mutex.current) {
      console.log('Mutex is locked');
      return;
    }
    mutex.current = true;
    console.log('Attempting to take picture for: ' + imageName);
    if (cameraRef.current) {
      const options = { quality: 1, base64: true };
      const photo = await cameraRef.current.takePictureAsync(options);

      await FileSystem.moveAsync({
        from: photo.uri,
        to: `${FileSystem.documentDirectory}${imageName}`,
      });

      console.log('Picture taken: ' + imageName);
      mutex.current = false;
      console.log('Mutex is unlocked');
    }
  };

  // Run this effect whenever 'yaw' changes. Capture a picture when maxYawR or maxYawL gets a new value
  // Effekt für 'yaw'-Änderungen
  useEffect(() => {
    if (!isYawStable) {
      console.log('Warte auf das Erreichen der Endposition...');
      return;
    }

    if (yaw > 15 && yaw < 180) {
      setCounterR(1);
      setInstruction('Bitte Kopf nach rechts drehen -->');
      console.log(`Current YawR: ${yaw}, Max YawR: ${maxYawR}`);
      setScreenText('-> ' + yaw + '°');
      setMaxYawR((prev) => {
        if (yaw > prev) {
          console.log('Taking picture for MaxYawR');
          takePicture('MaxYawR.jpg');
        }
        return Math.max(prev, yaw);
      });
    } else if (yaw < 345 && yaw > 180) {
      setCounterL(1);
      setInstruction('Bitte Kopf nach links drehen <--');
      let yawL = 360 - yaw;
      console.log(`Current YawL: ${yawL}, Max YawL: ${maxYawL}`);
      setScreenText('<- ' + yawL + '°');
      setMaxYawL((prev) => {
        if (yawL > prev) {
          console.log('Taking picture for MaxYawL');
          takePicture('MaxYawL.jpg');
        }
        return Math.max(prev, yawL);
      });
    } else {
      updateInstructionBasedOnCounters();
      console.log('Yaw out of range.');
      setScreenText('');
    }
  }, [yaw]);

  // Der useEffect für counterR und counterL
  useEffect(() => {
    updateInstructionBasedOnCounters();
  }, [counterR, counterL]);

  const updateInstructionBasedOnCounters = () => {
    if (counterR === 0 && counterL === 0) {
      setInstruction('Kopf nach rechts oder links drehen <-->');
    } else if (counterR === 1 && counterL === 0) {
      setInstruction('Bitte Kopf nach links drehen <--');
    } else if (counterR === 0 && counterL === 1) {
      setInstruction('Bitte Kopf nach rechts drehen -->');
    } else if (counterR === 1 && counterL === 1) {
      if (isYawNeutral()) {
        setInstruction('Super! Evaluierung 1 abgeschlossen :D');
        setTimeout(() => {
          console.log('auto exit Evaluation1 Yaw');
          exitEvaluation();
        }, 2000);
      }
    }
  };

  const isYawNeutral = () => {
    // Definieren Sie Ihre Logik hier, um festzustellen, ob der Yaw-Winkel "neutral" ist.
    return yaw < 5 || yaw > 355; // Beispiel
  };

  const handleFacesDetected = ({ faces }) => {
    if (faces.length === 0) {
      setScreenText('No Face Detected');
      return;
    } else if (faces.length > 1) {
      console.log('Faces Detected: ' + faces.length);
      return;
    } else if (faces.length > 0) {
      const face = faces[0];

      setYaw(face.yawAngle.toFixed(0));

      if (
        face.LEFT_EYE &&
        face.RIGHT_EYE &&
        face.NOSE_BASE &&
        face.BOTTOM_MOUTH &&
        face.LEFT_MOUTH &&
        face.RIGHT_MOUTH &&
        face.LEFT_EAR &&
        face.RIGHT_EAR
      ) {
        const leftEye = face.RIGHT_EYE;
        const rightEye = face.LEFT_EYE;
        const bottomMouth = face.BOTTOM_MOUTH;
        const lineCoordinates = {
          startX: leftEye.x,
          startY: leftEye.y,
          endX: rightEye.x,
          endY: rightEye.y,
          eyeCenterX: (leftEye.x + rightEye.x) / 2,
          eyeCenterY: (leftEye.y + rightEye.y) / 2,
          bottomX: bottomMouth.x,
          bottomY: bottomMouth.y,
        };
        setLineCoordinates(lineCoordinates);

        const landmarkData = {
          leftEye: face.LEFT_EYE,
          rightEye: face.RIGHT_EYE,
          noseBase: face.NOSE_BASE,
          bottomMouth: face.BOTTOM_MOUTH,
          leftMouth: face.LEFT_MOUTH,
          rightMouth: face.RIGHT_MOUTH,
          leftEar: face.LEFT_EAR,
          rightEar: face.RIGHT_EAR,
        };
        setLandmarkData(landmarkData);
      }
    }
  };

  const startEvaluation = async () => {
    setCacheBuster(Date.now());
    clearYawValues();
    setEvaluationStarted(true);
  };

  const startRollEvaluation = () => {
    //  HIER DANN WEITER ZU ROLL derweeil HOME
    router.replace('evaluationRoll');
  };

  const exitEvaluation = async () => {
    setEvaluationStarted(false);
    setLineCoordinates(null);
    setCounterR(0);
    setCounterL(0);

    if (cameraRef.current) {
      const options = { quality: 1, base64: false };
      const photo = await cameraRef.current.takePictureAsync(options);
      setCapturedPhotoUri(photo.uri);
    }
  };

  const clearYawValues = () => {
    setMaxYawR(0);
    setMaxYawL(0);
  };

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
          {/* CameraText Overlay */}
          <Text style={styles.instructionText}>{instruction}</Text>

          {/* Draw the lines when lineCoordinates is available */}
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
                  width: Math.sqrt(
                    Math.pow(lineCoordinates.endX - lineCoordinates.startX, 2) +
                      Math.pow(lineCoordinates.endY - lineCoordinates.startY, 2)
                  ),
                  height: 3,
                  backgroundColor: 'red',
                  transform: [
                    {
                      rotate: `${Math.atan2(
                        lineCoordinates.endY - lineCoordinates.startY,
                        lineCoordinates.endX - lineCoordinates.startX
                      )}rad`,
                    },
                  ],
                  transformOrigin: '0% 0%',
                }}
              ></View>

              {/* Green Line */}
              <View
                style={{
                  position: 'absolute',
                  left: lineCoordinates.eyeCenterX,
                  top: lineCoordinates.eyeCenterY,
                  width: 3, // Set the width of the line
                  height: Math.sqrt(
                    Math.pow(
                      lineCoordinates.bottomX - lineCoordinates.eyeCenterX,
                      2
                    ) +
                      Math.pow(
                        lineCoordinates.bottomY - lineCoordinates.eyeCenterY,
                        2
                      )
                  ),
                  backgroundColor: 'green',
                  transform: [
                    {
                      rotate: `${Math.atan2(
                        lineCoordinates.eyeCenterX - lineCoordinates.bottomX,
                        lineCoordinates.bottomY - lineCoordinates.eyeCenterY
                      )}rad`,
                    },
                  ],
                  transformOrigin: '0% 0%',
                }}
              ></View>

              {/* Dots for Landmarks */}
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
          <Image
            source={{
              uri: `${FileSystem.documentDirectory}MaxYawR.jpg?${cacheBuster}`,
            }}
            style={{ width: 100, height: 100 }}
          />
          <Text>Max Yaw Right: {maxYawR.toFixed(2)}°</Text>
          <Image
            source={{
              uri: `${FileSystem.documentDirectory}MaxYawL.jpg?${cacheBuster}`,
            }}
            style={{ width: 100, height: 100 }}
          />
          <Text>Max Yaw Left: {maxYawL.toFixed(2)}°</Text>
          <TouchableOpacity onPress={startEvaluation}>
            <Text style={styles.startButton}>
              Evaluation erneut durchführen
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={startRollEvaluation}>
            <Text style={styles.startButton}>
              Weiter zur nächsten Evualationsübung
            </Text>
          </TouchableOpacity>
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
            Max Right: {maxYawR.toFixed(2)}°, Max Left: {maxYawL.toFixed(2)}°
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
  },
});

export default evaluationYaw;
