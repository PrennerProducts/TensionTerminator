import 'expo-router/entry';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import styles from './StyleSheet';
import PainSlider from './painSlider';
import { painData } from './painData';
import { evaluationData } from '../evaluationComponents/evaluationData';
import {Button} from "@rneui/themed";

const intensityBefore = () => {
  const router = useRouter();
  const skipEvaluationYesNo = async () => {
    return Alert.alert(
      "Bevor das Training beginnt...",
      "Wollen Sie eine Evaluierung Ihrer Beweglichkeit vornehmen?",
      [
        {
          text: "Ja",
          onPress: () => {
            evaluationData.resetValues();
            evaluationData.originScreen = 'components/intensityBefore';
            evaluationData.isTraining = 1;
            evaluationData.beforeAfterTraining = 0;
            router.replace({ pathname: 'evaluationComponents/evaluationScreen' });
          },
        },
        {
          text: "Nein",
          onPress: () => {
            router.replace({ pathname: 'trainingStart' });
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Wie beurteilen Sie die derzeitige Intensität Ihrer Schmerzen? ({painData.painToString})</Text>
      <View style={{flex: 1, width: '80%', top: '5%', bottom: '5%'}}>
        
        <PainSlider
        beforeAfter = {0}
        />
      <Text style={styles.paragraph}>Bitte vergeben Sie Punkte auf einer Skala von 0 bis 10.{'\n'}
      {/*0 bedeutet beispielsweise keine Schmerzen und 10 bedeutet sehr starke Schmerzen.{'\n'}Bitte verwenden Sie den Schieberegler unten und bewegen Sie den Regler von links nach rechts (oder in die entgegengesetzte Richtung) zur Vergabe der Punkte.*/}
      </Text>
      </View>
        <View style={styles.bottom}>
            <Button
                onPress={skipEvaluationYesNo}
                buttonStyle={styles.button}
                titleStyle={styles.buttonText}
                title="Weiter"
            />
      </View>
    </View>
  );
};

export default intensityBefore;
