import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import FaceRecognitionScreen from './FaceRecognitionScreen';

export default function App() {
  const [evaluationStarted, setEvaluationStarted] = useState(false);

  const startEvaluation = () => {
    setEvaluationStarted(true);
  };

  const exitEvaluation = () => {
    setEvaluationStarted(false);
  };

  if (evaluationStarted) {
    return (
        <FaceRecognitionScreen onExit={exitEvaluation} />
    );
  } else {
    return (
        <View style={styles.startScreen}>
          <TouchableOpacity onPress={startEvaluation} style={styles.evaluationButton}>
            <Text style={styles.buttonText}>Evaluation</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  startScreen: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  evaluationButton: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
