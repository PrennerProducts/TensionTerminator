import 'expo-router/entry';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import styles from './StyleSheet';
import PainSlider from './painSlider';
import { painData } from './painData';
import { evaluationData } from '../evaluationComponents/evaluationData';
/*
const intensityAfter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Wie beurteilen Sie die Intensität Ihrer Schmerzen nach dem Training? ({painData.painToString})</Text>
      <Text style={styles.paragraph}>Bitte vergeben Sie Punkte auf einer Skala von 0 bis 10:{'\n'}0 bedeutet beispielsweise keine Schmerzen und 10 bedeutet sehr starke Schmerzen.{'\n'}Bitte verwenden Sie den Schieberegler unten und bewegen Sie den Regler von links nach rechts (oder in die entgegengesetzte Richtung) zur Vergabe der Punkte.</Text>
        <View style={styles.bottom}>
        <PainSlider
        beforeAfter = {1}
        />
        <Link href={'../evaluationComponents/evaluationAfter'} asChild>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Weiter</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};
*/
const intensityAfter = () => {
  const router = useRouter();
    const skipEvaluationYesNo = async () => {
      return Alert.alert(
        "Nach Abschluss Ihres Trainings...",
        "Wollen Sie eine Evaluierung Ihrer Beweglichkeit vornehmen?",
        [
          {
            text: "Ja",
            onPress: () => {
              evaluationData.exercise = 0;
              evaluationData.originScreen = 'evaluationComponents/evaluationAfter';
              evaluationData.isTraining = 1;
              evaluationData.beforeAfterTraining = 1;
              router.replace({ pathname: 'evaluationComponents/EvaluationScreen' });
            },
          },
          {
            text: "Nein",
            onPress: () => {
              router.replace({ pathname: 'evaluationComponents/resultEvaluation' });
            },
          },
        ]
      );
    };

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Wie beurteilen Sie die derzeitige Intensität Ihrer Schmerzen? ({painData.painToString})</Text>
        <View style={{flex: 0, width: '80%', top: '5%', bottom: '5%'}}>
          
          <PainSlider
          beforeAfter = {1}
          />
        <Text style={styles.paragraph}>Bitte vergeben Sie Punkte auf einer Skala von 0 bis 10.{'\n'}
        {/*0 bedeutet beispielsweise keine Schmerzen und 10 bedeutet sehr starke Schmerzen.{'\n'}Bitte verwenden Sie den Schieberegler unten und bewegen Sie den Regler von links nach rechts (oder in die entgegengesetzte Richtung) zur Vergabe der Punkte.*/}
        </Text>
        </View>
          <View style={styles.bottom}>
          <TouchableOpacity onPress={skipEvaluationYesNo} style={styles.button}>
            <Text style={styles.buttonText}>Weiter</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

export default intensityAfter;
