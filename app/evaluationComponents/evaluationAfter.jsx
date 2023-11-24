import 'expo-router/entry';
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';
import styles from '../components/StyleSheet';
import { evaluationData } from './evaluationData';
import {Button} from "@rneui/themed";

const EvaluationAfter = () => {
  const router = useRouter();

  const goToEvaluation = async () => {
    evaluationData.originScreen = 'evaluationComponents/evaluationAfter';
    evaluationData.exercise = 0;
    evaluationData.beforeAfterTraining = 1;
    evaluationData.printValues();
    router.push({ pathname: 'evaluationComponents/EvaluationScreen' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Evaluierungsübung NACHHER</Text>
      <View style={styles.bottom}>
          <Button
              title="Evaluierung Ihrer Beweglichkeit"
              onPress={goToEvaluation}
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
          />
          <Button
              title="Überspringen"
              onPress={() => {router.push({ pathname:'../evaluationComponents/resultEvaluation'})}}
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
          />
      </View>
    </View>
  );
};

export default EvaluationAfter;
