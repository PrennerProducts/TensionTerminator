import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';
import styles from '../components/StyleSheet';

const TrainingStart = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Training</Text>
      <View style={styles.bottom}>
        <Link href={'/training'} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Training starten</Text>
          </Pressable>
        </Link>

        <Link href={'/explanationVideo'} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Erklärvideo anschauen</Text>
          </Pressable>
        </Link>

        <Link href={'/explanationText'} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Erklärung lesen</Text>
          </Pressable>
        </Link>
      </View>
      <Link href="/" style={{ textAlign: 'right', fontSize: 24, margin: 20 }}>
        Go to Startseite
      </Link>
    </View>
  );
};

export default TrainingStart;
