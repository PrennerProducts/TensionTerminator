import 'expo-router/entry';
import { View, Text, TextInput, Pressable, Button } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import styles from './StyleSheet';
import { painData } from './painData';


const intensityAfter = () => {
  const handleInputChange = (text) => {
    const numericValue = parseInt(text, 10);
    if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 10) {
      painData.painIntensityAfter = text;
      console.log(painData.painIntensityAfter);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wie stark tut es weh? NACHHER</Text>
      <View style={styles.bottom}>
      <TextInput 
        style={styles.input}
        keyboardType="numeric"
        onChangeText={handleInputChange}
        placeholder="0-10"
      />
        <Link href={'../evaluationComponents/evaluationAfter'} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Weiter</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

export default intensityAfter;
