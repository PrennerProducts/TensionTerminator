import React, { useState, useEffect } from 'react';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import { View, Text, StyleSheet } from 'react-native';


export default function FaceRecognitionScreen({ onExit }) {
    const [faceData, setFaceData] = useState([]);
    const [yaw, setYaw] = useState(0);
    const [roll, setRoll] = useState(0);
    const [Neigung, setNeigung] = useState(0);
    const [maxYaw, setMaxYaw] = useState(0);
    const [maxRoll, setMaxRoll] = useState(0);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            if (status === 'granted') {
                const faces = await FaceDetector.detectFacesAsync(/* Pass the camera frame here */);
                if (faces.length > 0) {
                    // Gesicht(er) wurde(n) erkannt
                    const face = faces[0]; // Nehmen Sie an, dass Sie das erste erkannte Gesicht verwenden
                    const faceBox = calculateFaceBox(face);

                    // Verarbeiten Sie die erkannten Gesichtsdaten
                    setFaceData(faceBox);

                    // Weitere Logik zur Gesichtserkennung hier
                }
            }
        })();
    }, []);

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

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'black', // Hintergrundfarbe kann angepasst werden
        },
        camera: {
            flex: 1,
        },
        // Weitere Style-Definitionen hier
    });


    // Hier können Sie die Gesichtserkennungsansicht rendern
    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={Camera.Constants.Type.front}>
                {/* Rendern Sie hier Overlay-Elemente für die Gesichtserkennung, z.B. ein Rahmen um das Gesicht */}
            </Camera>
        </View>
    );
}
