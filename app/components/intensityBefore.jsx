import 'expo-router/entry';
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import styles from './StyleSheet';
import PainSlider from './painSlider';
import { painData } from './painData';

const intensityBefore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Wie beurteilen Sie die derzeitige Intensität Ihrer Schmerzen? ({painData.painToString})</Text>
      <Text style={styles.paragraph}>Bitte vergeben Sie Punkte auf einer Skala von 0 bis 10:{'\n'}0 bedeutet beispielsweise keine Schmerzen und 10 bedeutet sehr starke Schmerzen.{'\n'}Bitte verwenden Sie den Schieberegler unten und bewegen Sie den Regler von links nach rechts (oder in die entgegengesetzte Richtung) zur Vergabe der Punkte.</Text>
        <View style={styles.bottom}>
        <PainSlider
        beforeAfter = {0}
        />
        <Link href={'../evaluationComponents/evaluationBefore'} asChild>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Weiter</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default intensityBefore;
