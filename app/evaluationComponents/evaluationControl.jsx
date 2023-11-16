import { View, Text, Pressable, Image, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link, useRouter, useLocalSearchParams } from 'expo-router';
import styles from '../components/StyleSheet';
import * as FileSystem from 'expo-file-system';
import {StyleSheet} from "react-native";
import { evaluationData } from './evaluationData';

const evaluationControl = () => {
  const router = useRouter();
  const cacheBuster = Date.now();
  const exercise = evaluationData.exercise;
  const maxYL = evaluationData.maxYL;
  const maxYR = evaluationData.maxYR;
  const maxRL = evaluationData.maxRL;
  const maxRR = evaluationData.maxRR;
  const shouldTakePictures = evaluationData.shouldTakePictures;

  const restartEvaluation = async () => {
    router.push({pathname: 'evaluationComponents/evaluationYR'});
  };

  const nextEvaluation = async () => {
    evaluationData.exercise = 1;
    router.push({pathname: 'evaluationComponents/evaluationYR'});
  };

  const exitEvaluation = async () => {
    if (evaluationData.isTraining && evaluationData.beforeAfterTraining === 0){
      evaluationData.maxYLBefore = maxYL;
      evaluationData.maxYRBefore = maxYR;
      evaluationData.maxRLBefore = maxRL;
      evaluationData.maxRRBefore = maxRR;
      router.push({pathname: '/trainingStart'});
    }
    else if (evaluationData.isTraining && evaluationData.beforeAfterTraining === 1){
      console.log("Updating values after training");
      evaluationData.maxYLAfter = maxYL;
      evaluationData.maxYRAfter = maxYR;
      evaluationData.maxRLAfter = maxRL;
      evaluationData.maxRRAfter = maxRR;
      router.push({pathname: 'evaluationComponents/resultEvaluation'});
    }
    evaluationData.maxYLBefore = maxYL;
    evaluationData.maxYRBefore = maxYR;
    evaluationData.maxRLBefore = maxRL;
    evaluationData.maxRRBefore = maxRR;
    router.push({pathname: 'evaluationComponents/resultEvaluation'});
  };

  if (exercise === 0){
      return (
        <View style={styles.container}>
          <Text style={styles.header}>Bewegung {(exercise+1)}: Drehung</Text>
          {shouldTakePictures ? (
            <View>
              <Image
                  source={{
                    uri: `${FileSystem.documentDirectory}MaxYL.jpg?${cacheBuster}`,
                  }}
                  style={stylesEC.imageL}
                  />
                  <Text style={stylesEC.imageTextL}>Max L {maxYL}°</Text>
              <Image
                  source={{
                    uri: `${FileSystem.documentDirectory}MaxYR.jpg?${cacheBuster}`,
                  }}
                  style={stylesEC.imageR}
                  />
              <Text style={stylesEC.imageTextR}>Max R {maxYR}°</Text>
            </View>              
            ):(
              <Text></Text>
            )            
          }

          <View style={styles.bottom}>
          <Text style={styles.text}>Maximal erreichte Winkel:{'\n'}Links: {maxYL}°; Rechts: {maxYR}°{'\n'}Summe: {maxYR+maxYL}°</Text>
            <TouchableOpacity onPress={restartEvaluation} style={styles.button}>
              <Text style={styles.buttonText}>Bewegung 1 wiederholen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={nextEvaluation} style={styles.button}>
              <Text style={styles.buttonText}>Weiter zu Bewegung 2</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    else if (exercise === 1){
      return (
        <View style={styles.container}>
          <Text style={styles.header}>Bewegung {(exercise+1)}: Seitneigung</Text>
          {shouldTakePictures ? (
            <View>

          <Image
                source={{
                  uri: `${FileSystem.documentDirectory}MaxRL.jpg?${cacheBuster}`,
                }}
                style={stylesEC.imageL}
                />
                <Text style={stylesEC.imageTextL}>Max L {maxRL}°</Text>
          <Image
                source={{
                  uri: `${FileSystem.documentDirectory}MaxRR.jpg?${cacheBuster}`,
                }}
                style={stylesEC.imageR}
                />
                <Text style={stylesEC.imageTextR}>Max R {maxRR}°</Text>
                </View>):(
                <Text style={stylesEC.imageTextR}>Max R {maxRR}°</Text>
                )}
          <View style={styles.bottom}>
          <Text style={styles.text}>Maximal erreichte Winkel:{'\n'}Links: {maxRL}°; Rechts: {maxRR}°{'\n'}Summe: {maxRR+maxRL}°</Text>
            <TouchableOpacity onPress={restartEvaluation} style={styles.button}>
              <Text style={styles.buttonText}>Bewegung 2 wiederholen</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={exitEvaluation} style={styles.button}>
              <Text style={styles.buttonText}>Fortfahren</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
};


const stylesEC = StyleSheet.create({
  container:{
    backgroundColor: 'black'
  },
  imageR: {
    position: 'absolute',
    top: '20%',
    left: '5%',
    width: 150,
    height: 150,
    transform: [{ scaleX: -1 }],
  },
  imageL: {
    position: 'absolute',
    top: '20%',
    right: '5%',
    width: 150,
    height: 150,
    transform: [{ scaleX: -1 }],
  },
  imageTextR: {
    position: 'absolute',
    top: '20%',
    left: '8%',
    color: 'orange',
    fontSize: 16,
  },
  imageTextL: {
    position: 'absolute',
    top: '20%',
    right: '8%',
    color: 'green',
    fontSize: 16,
  },
});

export default evaluationControl;

