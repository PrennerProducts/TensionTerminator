import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';
import styles from './StyleSheet';

const intensityBefore = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wie stark tut es weh? VORHER</Text>
      <View style={styles.bottom}>
        <Link href={'../evaluationComponents/evaluationBefore'} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Weiter</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

export default intensityBefore;
