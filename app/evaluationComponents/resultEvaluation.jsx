import { View, Text, Image, StyleSheet, TouchableOpacity, ToastAndroid, Alert } from 'react-native';
import React from 'react';
import { useRouter} from 'expo-router';
import styles from '../components/StyleSheet';
import * as FileSystem from 'expo-file-system';
import { evaluationData } from './evaluationData';
import { useState} from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const ResultEvaluation = () => {
  const router = useRouter();

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  evaluationData.printValues();
  
  const originScreen = evaluationData.originScreen;
  const maxYLBefore = evaluationData.maxYLBefore;
  const maxYRBefore = evaluationData.maxYRBefore;
  const maxRLBefore = evaluationData.maxRLBefore;
  const maxRRBefore = evaluationData.maxRRBefore;
  const maxYLAfter = evaluationData.maxYLAfter;
  const maxYRAfter = evaluationData.maxYRAfter;
  const maxRLAfter = evaluationData.maxRLAfter;
  const maxRRAfter = evaluationData.maxRRAfter;
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
    <View style={stylesRE.container}>
      <View style={stylesRE.top}>
      <Text style={stylesRE.header}>Beurteilung Ihrer Beweglichkeit - Aktueller Status {formattedDate}</Text>
      <ScrollView style={{ padding: 5 }}>
      <Text style={stylesRE.header}>Vor dem Training</Text>
      <Text style={styles.paragraph}>Rotation:{'\n'}Links {maxYLBefore}°, Rechts: {maxYRBefore}°, Summe: {maxYRBefore+maxYLBefore}°</Text>
      <Text style={styles.paragraph}>Seitenneigung:{'\n'}Links: {maxRLBefore}°, Rechts: {maxRRBefore}°, Summe: {maxRRBefore+maxRLBefore}°</Text>
      <Text style={styles.paragraph}>Schmerzintensität: ...</Text>
      <Text style={stylesRE.header}>Nach dem Training</Text>
      <Text style={styles.paragraph}>Rotation:{'\n'}Links {maxYLAfter}°, Rechts: {maxYRAfter}°, Summe: {maxYRAfter+maxYLAfter}°</Text>
      <Text style={styles.paragraph}>Seitenneigung:{'\n'}Links: {maxRLAfter}°, Rechts: {maxRRAfter}°, Summe: {maxRRAfter+maxRLAfter}°</Text>
      <Text style={styles.paragraph}>Schmerzintensität: ...</Text>
      </ScrollView>
      </View>
      <View style={stylesRE.bottom}>
        {!transmitted && (
          <TouchableOpacity onPress={transmitData} style={stylesRE.button}>
            <Text style={stylesRE.buttonText}>Daten übertragen?</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={goToGratulation} style={stylesRE.button}>
          <Text style={stylesRE.buttonText}>Speichern und Fortfahren</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={exitEvaluation} style={stylesRE.button}>
          <Text style={stylesRE.buttonText}>Beenden ohne Speichern</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};


const stylesRE = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: '#ffffff',
  },
  top: {
    flex: 2,
    justifyContent: 'flex-start',
    top: "2%",
    backgroundColor: '#ffffff',
  },
  bottom: {
      flex: 1,
      justifyContent: 'flex-end',
      bottom: "5%",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: "#10069F",
  },
  button: {
      display: "flex",
      height: 42,
      width: 300,
      backgroundColor: "#0650b0",
      borderRadius: 20,
      marginTop: "3%",
      justifyContent: "center",
  },
  buttonText: {
      fontSize: 25,
      fontWeight: "bold",
      textAlign: "center",
      color: '#ffffff',
  },
});
export default ResultEvaluation;

