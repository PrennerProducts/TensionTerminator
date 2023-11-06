import { View, Text, Image, TouchableOpacity, ToastAndroid, Alert } from 'react-native';
import React from 'react';
import { useRouter} from 'expo-router';
import styles from '../components/StyleSheet';
import * as FileSystem from 'expo-file-system';
import { evaluationData } from './evaluationData';
import { useState} from 'react';

const ResultEvaluation = () => {
  const router = useRouter();

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  const originScreen = evaluationData.originScreen;
  const maxYL = evaluationData.maxYL;
  const maxYR = evaluationData.maxYR;
  const maxRL = evaluationData.maxRL;
  const maxRR = evaluationData.maxRR;
  const [transmitted, SetTransmitted] = useState(false);

  const saveData = async () => {
    //save evaluation data to json...
    console.log('Data saved');
  };

  const transmitData = async () => {
    //// send evaluation data to server...
    // const jsonData = ...
    // const parsedData = JSON.parse(jsonData);
    // const serializedData = JSON.stringify(parsedData);
    // const serverUrl = 'https://example.com/xyz';
    // fetch(serverUrl, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: serializedData,
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Data sent and response received:', data);
    //   })
    //   .catch(error => {
    //     console.error('Error sending data:', error);
    //   });
    console.log('Data trasmitted');
    ToastAndroid.show('Daten wurden übertragen. Danke!', ToastAndroid.SHORT);
    SetTransmitted(true);
  };

  const goToGratulation = async () => {
    saveData();
    evaluationData.resetValues();
    router.replace({pathname: 'components/gratulation'});
  };

  const exitEvaluation = async () => {
    return Alert.alert(
      "Sind Sie sicher?",
      "Ihre Ergebnisse werden verworfen...",
      [
        {
          text: "Ja",
          onPress: () => {
            evaluationData.resetValues();
            router.replace({pathname: originScreen});
          },
        },
        {
          text: "Nein",
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Beurteilung Ihrer Beweglichkeit - Aktueller Status {formattedDate}</Text>
      <Text style={styles.paragraph}>Rotation:{'\n'}Links {maxYL}°, Rechts: {maxYR}°, Summe: {maxYR+maxYL}°</Text>
      <Text style={styles.paragraph}>Seitenneigung:{'\n'}Links: {maxRL}°, Rechts: {maxRR}°, Summe: {maxRR+maxRL}°</Text>
      <View style={styles.bottom}>
        {!transmitted && (
          <TouchableOpacity onPress={transmitData} style={styles.button}>
            <Text style={styles.buttonText}>Daten übertragen?</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={goToGratulation} style={styles.button}>
          <Text style={styles.buttonText}>Speichern und Fortfahren</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={exitEvaluation} style={styles.button}>
          <Text style={styles.buttonText}>Beenden ohne Speichern</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResultEvaluation;


