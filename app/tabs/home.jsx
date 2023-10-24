import React from 'react';
import { Link, useRouter } from 'expo-router';
import styles from '../components/StyleSheet';
import { View, Text, Pressable, Button } from 'react-native';

const homePage = () => {
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>home</Text>
        <Link href="/" style={{ textAlign: 'right', fontSize: 24, margin: 20 }}>
          Go to StartSeite
        </Link>
      </View>
    </View>
  );
};

export default homePage;
