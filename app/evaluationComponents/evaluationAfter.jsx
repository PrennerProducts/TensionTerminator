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
    evaluationData.beforeAfterTraining = 1;
    router.replace({pathname: 'evaluationComponents/evaluationYR'});
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
            <Text style={styles.buttonText}>Weiter</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

export default EvaluationAfter;
