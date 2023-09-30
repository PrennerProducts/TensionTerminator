import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [faceData, setFaceData] = useState([]);
  const [yaw, setYaw] = useState(0);
  const [roll, setRoll] = useState(0);
  const [Neigung, setNeigung] = useState(0);
  const [ScreenText, setScreenText] = useState("");
  const [maxYawR, setMaxYawR] = useState(0);
  const [maxYawL, setMaxYawL] = useState(0);
  const [maxRoll, setMaxRoll] = useState(0);
  const [evaluationStarted, setEvaluationStarted] = useState(false);
  const [lineCoordinates, setLineCoordinates] = useState(null); // Store line coordinates

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleFacesDetected = ({ faces }) => {
    if (faces.length === 0) return;
    else if (faces.length > 0) {
      const face = faces[0];
      let n = 0;
      setYaw(face.yawAngle.toFixed(2));
      setRoll(face.rollAngle.toFixed(2));

      setMaxRoll((prev) => Math.max(prev, Math.abs(face.rollAngle)));
      n = face.yawAngle.toFixed(2);
      if (n > 80) {
        n = (n - 360) * -1;
        n = n.toFixed(2);
      }
      setNeigung(n);
      let rotoDegree = 0;
      rotoDegree = face.yawAngle.toFixed(0);
      if (rotoDegree > 15 && rotoDegree < 180) {
        setScreenText("-> " + rotoDegree + "°");
        if (rotoDegree > maxYawR) setMaxYawR(rotoDegree);
      }
      else if (rotoDegree < 345 && rotoDegree > 180) {
        setScreenText("<- " + (360-rotoDegree) + "°");
        if ((360-rotoDegree) > maxYawL) setMaxYawL(360-rotoDegree);
      }
      else setScreenText("");
      //console.log(ScreenText);

      // Calculate line coordinates between left eye and right eye
      if (face.LEFT_EYE && face.RIGHT_EYE) {
        const leftEye = face.RIGHT_EYE;
        const rightEye = face.LEFT_EYE;
        const lineCoordinates = {
          startX: leftEye.x,
          startY: leftEye.y,
          endX: rightEye.x,
          endY: rightEye.y,
        };
        setLineCoordinates(lineCoordinates);
      }
    } else {
      setLineCoordinates(null); // Reset line coordinates
    }
  };

  const startEvaluation = () => {
    setEvaluationStarted(true);
  };

  const exitEvaluation = () => {
    setEvaluationStarted(false);
    setMaxYawR(0); // Reset max yaw to 0
    setMaxYawL(0); // Reset max yaw to 0
    setMaxRoll(0); // Reset max roll to 0
    setFaceData([]); // Clear face data
    setLineCoordinates(null); // Reset line coordinates
  };

  return (
    <View style={styles.container}>
      {evaluationStarted ? (
        <Camera
          type={Camera.Constants.Type.front}
          style={styles.camera}
          onFacesDetected={handleFacesDetected}
          faceDetectorSettings={{
            mode: FaceDetector.FaceDetectorMode.fast,
            detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
            runClassifications: FaceDetector.FaceDetectorClassifications.none,
            minDetectionInterval: 0,
            tracking: true,
          }}
        >
          {/* Draw the line when lineCoordinates is available */}
          {lineCoordinates && (
            <View
              style={{
                position: 'absolute',
                left: lineCoordinates.startX,
                top: lineCoordinates.startY,
                width: Math.sqrt(
                  Math.pow(lineCoordinates.endX - lineCoordinates.startX, 2) +
                    Math.pow(lineCoordinates.endY - lineCoordinates.startY, 2)
                ),
                height: 2,
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
          )}
        </Camera>
      ) : (
        <View style={styles.startScreen}>
          <TouchableOpacity onPress={startEvaluation}>
            <Text style={styles.startButton}>Start evaluation</Text>
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
          <Text style={styles.faceDesc}>
            {ScreenText}
          </Text>
          <Text style={styles.maxValues}>
            Max Right: {maxYawR.toFixed(2)}°, Max Left: {maxYawL.toFixed(2)}°
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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
  },
  camera: {
    flex: 1,
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
    color: 'white',
  },
});
