import 'expo-router/entry';
import { View, Text, Pressable, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';
import styles from '../components/StyleSheet';
import { evaluationData } from './evaluationData';

const EvaluationAfter = () => {
  const router = useRouter();

  const goToEvaluation = async () => {
    evaluationData.originScreen = 'evaluationComponents/evaluationAfter';
    evaluationData.exercise = 0;
    evaluationData.beforeAfterTraining = 1;
    evaluationData.printValues();
    router.replace({ pathname: 'evaluationComponents/EvaluationScreen' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Evaluierungsübung NACHHER</Text>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={goToEvaluation} style={styles.button}>
          <Text style={styles.buttonText}>Evaluierung Ihrer Beweglichkeit</Text>
        </TouchableOpacity>
        <Link href={'../components/intensityAfter'} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Überspringen</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

export default EvaluationAfter;
