import 'expo-router/entry';
import { View, Text } from 'react-native';
import React from 'react';
import styles from './StyleSheet';
import PainSlider from './painSlider';
import { painData } from './painData';
import {Button} from "@rneui/themed";
import {useRouter} from "expo-router";

const intensityBefore = () => {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Wie beurteilen Sie die derzeitige Intensität Ihrer Schmerzen? ({painData.painToString})</Text>
      <View style={{flex: 0, width: '80%', top: '5%', bottom: '5%'}}>
        
        <PainSlider
        beforeAfter = {0}
        />
      <Text style={styles.paragraph}>Bitte vergeben Sie Punkte auf einer Skala von 0 bis 10.{'\n'}
      {/*0 bedeutet beispielsweise keine Schmerzen und 10 bedeutet sehr starke Schmerzen.{'\n'}Bitte verwenden Sie den Schieberegler unten und bewegen Sie den Regler von links nach rechts (oder in die entgegengesetzte Richtung) zur Vergabe der Punkte.*/}
      </Text>
      </View>
        <View style={styles.bottom}>
            <Button
                title="Weiter"
                onPress={() => {router.push({ pathname:'../evaluationComponents/evaluationBefore'})}}
                buttonStyle={styles.button}
                titleStyle={styles.buttonText}
            />
      </View>
    </View>
  );
};

export default intensityBefore;
