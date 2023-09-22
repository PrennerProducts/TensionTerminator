import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [faceData, setFaceData] = useState([]);
  const [yaw, setYaw] = useState(0);
  const [roll, setRoll] = useState(0);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  function calculateFaceBox(face) {
    // Calculate face box position and dimensions.
    const { bounds } = face;
    const left = bounds.origin.x;
    const top = bounds.origin.y;
    const width = bounds.size.width;
    const height = bounds.size.height;

    return {
      left,
      top,
      width,
      height,
    };
  }

  const handleFacesDetected = ({ faces }) => {
    // Process face data and update yaw and roll angles here
    if (faces.length > 0) {
      const face = faces[0]; // Assuming there's only one detected face
      const faceBox = calculateFaceBox(face);

      // Update yaw and roll angles.
      setYaw(face.yawAngle.toFixed(2));
      setRoll(face.rollAngle.toFixed(2));
    }

    setFaceData(faces);
  };

  return (
    <Camera
      type={Camera.Constants.Type.front}
      style={styles.camera}
      onFacesDetected={handleFacesDetected}
      faceDetectorSettings={{
        mode: FaceDetector.FaceDetectorMode.accurate,
        detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
        runClassifications: FaceDetector.FaceDetectorClassifications.none,
        minDetectionInterval: 100,
        tracking: true,
      }}
    >
      {faceData.map((face, index) => {
        const faceBox = calculateFaceBox(face);

        return (
          <React.Fragment key={index}>
            {/* Draw a transparent face box */}
            <View
              style={{
                position: 'absolute',
                left: faceBox.left,
                top: faceBox.top,
                width: faceBox.width,
                height: faceBox.height,
                borderColor: 'green',
                borderWidth: 2,
                borderRadius: 10,
                opacity: 0.7,
              }}
            ></View>
            {/* Display yaw and roll angles */}
            <Text style={styles.faceDesc}>
              Yaw: {yaw}°, Roll: {roll}°
            </Text>
          </React.Fragment>
        );
      })}
    </Camera>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  faceDesc: {
    fontSize: 20,
    color: 'white',
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
});