import 'expo-router/entry';
import { View, Text, Pressable, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';
import styles from '../components/StyleSheet';
import { evaluationData } from './evaluationData';

const EvaluationBefore = () => {
  const router = useRouter();

  const goToEvaluation = async () => {
    evaluationData.resetValues();
    evaluationData.originScreen = 'evaluationComponents/evaluationBefore';
    evaluationData.isTraining = 1;
    evaluationData.beforeAfterTraining = 0;
    router.replace({pathname: 'evaluationComponents/evaluationYR'});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Evaluierungsübung VORHER</Text>
      <View style={styles.bottom}>
          <TouchableOpacity onPress={goToEvaluation} style={styles.button}>
            <Text style={styles.buttonText}>Evaluierung Ihrer Beweglichkeit</Text>
          </TouchableOpacity>
        <Link href={'/trainingStart'} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Überspringen</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

export default EvaluationBefore;