import { View, Text, Pressable, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, useRouter, useLocalSearchParams } from 'expo-router';
import styles from '../components/StyleSheet';
import * as FileSystem from 'expo-file-system';
import {StyleSheet} from "react-native";
import { evaluationData } from './evaluationData';

const ResultEvaluation = () => {
  const router = useRouter();
  //const { exercise, maxL, maxR } = useLocalSearchParams();
  const cacheBuster = Date.now();
  const exercise = evaluationData.exercise;
  const maxYL = evaluationData.maxYL;
  const maxYR = evaluationData.maxYR;
  const maxRL = evaluationData.maxRL;
  const maxRR = evaluationData.maxRR;

  const restartEvaluation = async () => {
    router.replace({pathname: 'evaluationComponents/evaluationYR'});
  };

  const nextEvaluation = async () => {
    evaluationData.exercise = 1;
    router.replace({pathname: 'evaluationComponents/evaluationYR'});
  };

  const exitEvaluation = async () => {
    console.log("Go back");
  };

  if (exercise === 0){
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Bewegung {(exercise+1)}</Text>
          <Image
                source={{
                  uri: `${FileSystem.documentDirectory}MaxYL.jpg?${cacheBuster}`,
                }}
                style={stylesER.imageL}
                />
                <Text style={stylesER.imageTextL}>Max L {maxYL}°</Text>
          <Image
                source={{
                  uri: `${FileSystem.documentDirectory}MaxYR.jpg?${cacheBuster}`,
                }}
                style={stylesER.imageR}
                />
                <Text style={stylesER.imageTextR}>Max R {maxYR}°</Text>
          <View style={styles.bottom}>
            <TouchableOpacity onPress={restartEvaluation} style={styles.button}>
              <Text style={styles.buttonText}>Wiederholen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={nextEvaluation} style={styles.button}>
              <Text style={styles.buttonText}>Weiter</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    else if (exercise === 1){
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Bewegung {(exercise+1)}</Text>
          <Image
                source={{
                  uri: `${FileSystem.documentDirectory}MaxRL.jpg?${cacheBuster}`,
                }}
                style={stylesER.imageL}
                />
                <Text style={stylesER.imageTextL}>Max L {maxRL}°</Text>
          <Image
                source={{
                  uri: `${FileSystem.documentDirectory}MaxRR.jpg?${cacheBuster}`,
                }}
                style={stylesER.imageR}
                />
                <Text style={stylesER.imageTextR}>Max R {maxRR}°</Text>
          <View style={styles.bottom}>
            <TouchableOpacity onPress={restartEvaluation} style={styles.button}>
              <Text style={styles.buttonText}>Wiederholen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={exitEvaluation} style={styles.button}>
              <Text style={styles.buttonText}>Weiter</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
};


const stylesER = StyleSheet.create({
  container:{
    backgroundColor: 'black'
  },
  imageL: {
    position: 'absolute',
    top: 100,
    left: 20,
    width: 150,
    height: 150,
  },
  imageR: {
    position: 'absolute',
    top: 100,
    right: 20,
    width: 150,
    height: 150,
  },
  imageTextL: {
    position: 'absolute',
    top: 100,
    left: 30,
    color: 'white',
    fontSize: 16,
  },
  imageTextR: {
    position: 'absolute',
    top: 100,
    right: 30,
    color: 'white',
    fontSize: 16,
  },
});

export default ResultEvaluation;


