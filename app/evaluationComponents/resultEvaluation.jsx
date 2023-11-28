import { View, Text, StyleSheet, TouchableOpacity, Pressable, ToastAndroid, Alert } from 'react-native';
import React from 'react';
import { useRouter} from 'expo-router';
import styles from '../components/StyleSheet';
import { evaluationData } from './evaluationData';
import { painData } from '../components/painData';
import { useEffect} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import DrawingY from './drawingY';


const ResultEvaluation = () => {
  evaluationData.printValues();
  const imageSourceR = require('../../assets/images/HeadT.png');
  const imageSourceY = require('../../assets/images/HeadF.png');
  const router = useRouter();
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`; 

  const maxYLBefore = evaluationData.maxYLBefore;
  const maxYRBefore = evaluationData.maxYRBefore;
  const maxRLBefore = evaluationData.maxRLBefore;
  const maxRRBefore = evaluationData.maxRRBefore;
  const maxYLAfter = evaluationData.maxYLAfter;
  const maxYRAfter = evaluationData.maxYRAfter;
  const maxRLAfter = evaluationData.maxRLAfter;
  const maxRRAfter = evaluationData.maxRRAfter;
  const painIntensityBefore = painData.painIntensityBefore;
  const painIntensityAfter = painData.painIntensityAfter;
  const deltaYL = maxYLAfter-maxYLBefore;
  const deltaYR = maxYRAfter-maxYRBefore;
  const deltaYS = deltaYL+deltaYR;
  const deltaRL = maxRLAfter-maxRLBefore;
  const deltaRR = maxRRAfter-maxRRBefore;
  const deltaRS = deltaRL+deltaRR;
  const deltaPain = painIntensityAfter-painIntensityBefore;

  const textColorDeltaYL = (deltaYL <= 0)
  ? stylesRE.textRed
  : stylesRE.textGreen;
  const textColorDeltaYR = (deltaYR <= 0)
  ? stylesRE.textRed
  : stylesRE.textGreen;
  const textColorDeltaYS = (deltaYS <= 0)
  ? stylesRE.textRed
  : stylesRE.textGreen;
  const textColorDeltaRL = (deltaRL <= 0)
  ? stylesRE.textRed
  : stylesRE.textGreen;
  const textColorDeltaRR = (deltaRR <= 0)
  ? stylesRE.textRed
  : stylesRE.textGreen;
  const textColorDeltaRS = (deltaRS <= 0)
  ? stylesRE.textRed
  : stylesRE.textGreen;
  const textColorDeltaPain = (deltaPain >= 0)
  ? stylesRE.textRed
  : stylesRE.textGreen;

  const evaluationsSkipped = ( maxYLBefore === 0 &&
                              maxYRBefore === 0 &&
                              maxRLBefore === 0 &&
                              maxRRBefore === 0 &&
                              maxYRBefore === 0 &&
                              maxYLBefore === 0 &&
                              maxRLBefore === 0 &&
                              maxRRBefore === 0 )
    ? true
    : false;

  useEffect(() => {
    saveData();
    transmitData();
  }, []);

  const saveData = async () => {
    console.log('Data saved');
  };

  const transmitData = async () => {
    //// BEISPIEL
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
            router.push({pathname: originScreen});
          },
        },
        {
          text: "Nein",
        },
      ]
    );
  };

  if (evaluationData.isTraining === 1 && !evaluationsSkipped) return (
    <View style={styles.container}>
      <View style={styles.top}>
      <Text style={stylesRE.rowBold}>Aktueller Status {formattedDate}</Text>
      <Text style={stylesRE.header}>Beurteilung Ihrer Beweglichkeit</Text>
      <ScrollView style={{ padding: 0, top: -10 }}>
      <Text style={stylesRE.header}>Bewegung 1: Rotation</Text>
      <DrawingY 
        maxLBefore={maxYLBefore}
        maxRBefore={maxYRBefore}
        maxLAfter={maxYLAfter}
        maxRAfter={maxYRAfter}
        TitleString = {'Vorher'}
        TitleStringB = {'Nachher'}
        shouldAnimate = {true}
        interval = {2000}
        imageSource={imageSourceR}
        degreeAdd = {90}
        imageHeight = {300}
        xAdd = {0}
        yAdd = {-40}
        titleXAdd = {0}
        titleYAdd = {0}
        resize = {1}
        lineLengthFactor = {2.5}
      />
      <Text style={stylesRE.rowBold}>Vor dem Training</Text>
      <Text style={stylesRE.row}>
        Links: {maxYLBefore}°, 
        Rechts: {maxYRBefore}°, 
        Summe: {maxYRBefore+maxYLBefore}°</Text>
      <Text style={stylesRE.rowBold}>Nach dem Training</Text>
      <Text style={stylesRE.row}>
        Links: {maxYLAfter}°, 
        Rechts: {maxYRAfter}°, 
        Summe: {maxYRAfter+maxYLAfter}°</Text>
      <Text style={stylesRE.rowBold}>Um wie viel haben Sie sich verbessert?</Text>
      <Text style={stylesRE.row}>
        Links: <Text style={textColorDeltaYL}>{deltaYL}°</Text>, 
        Rechts: <Text style={textColorDeltaYR}>{deltaYR}°</Text>, 
        Summe: <Text style={textColorDeltaYS}>{deltaYL+deltaYR}°</Text>{'\n'}
        In Prozent: <Text style={textColorDeltaYS}>{(100*(deltaYL+deltaYR)/(maxYLBefore+maxYRBefore)).toFixed(2)}%</Text>{'\n'}
      </Text>
      <Text style={stylesRE.header}>Bewegung 2: Seitneigung</Text>
      <DrawingY 
        maxLBefore={maxRLBefore}
        maxRBefore={maxRRBefore}
        maxLAfter={maxRLAfter}
        maxRAfter={maxRRAfter}
        TitleString = {'Vorher'}
        TitleStringB = {'Nachher'}
        shouldAnimate = {true}
        interval = {2000}
        imageSource={imageSourceY}
        degreeAdd = {-90}
        imageHeight = {300}
        xAdd = {0}
        yAdd = {40}
        titleXAdd = {0}
        titleYAdd = {0}
        resize = {1}
        lineLengthFactor = {2.3}
      />
      <Text style={stylesRE.rowBold}>Vor dem Training</Text>
      <Text style={stylesRE.row}>
        Links: {maxRLBefore}°, 
        Rechts: {maxRRBefore}°, 
        Summe: {maxRRBefore+maxRLBefore}°
      </Text>
      <Text style={stylesRE.rowBold}>Nach dem Training</Text>
      <Text style={stylesRE.row}>
        Links: {maxRLAfter}°, 
        Rechts: {maxRRAfter}°, 
        Summe: {maxRRAfter+maxRLAfter}°
      </Text>
      <Text style={stylesRE.rowBold}>Um wie view haben Sie sich verbessert?</Text>
      <Text style={stylesRE.row}>
        Links: <Text style={textColorDeltaRL}>{deltaRL}°</Text>, 
        Rechts: <Text style={textColorDeltaRR}>{deltaRR}°</Text>, 
        Summe: <Text style={textColorDeltaRS}>{deltaRL+deltaRR}°</Text>{'\n'}
        In Prozent: <Text style={textColorDeltaRS}>{(100*(deltaRL+deltaRR)/(maxRLBefore+maxRRBefore)).toFixed(2)}%</Text>{'\n'}
      </Text>
      <Text style={stylesRE.header}>Schmerzintensität{'\n'}({painData.painToString})</Text>
      <Text style={stylesRE.row}>Vor dem Training: {painIntensityBefore}</Text>
      <Text style={stylesRE.row}>Nach dem Training: {painIntensityAfter}</Text>
      <Text style={stylesRE.rowBold}>Die Intensität Ihrer Schmerzen  hat sich um <Text style={textColorDeltaPain}>{deltaPain} </Text> Punkte (<Text style={textColorDeltaPain}>{(100*(deltaPain)/(painIntensityBefore)).toFixed(2)}%</Text>) verändert!{'\n\n\n'}
      
      </Text>
      </ScrollView>
      </View>
    </View>
  );
  else if (evaluationData.isTraining === 0 && !evaluationsSkipped) return (
    <View style={styles.container}>
      <View style={styles.top}>
      <Text style={stylesRE.rowBold}>Aktueller Status {formattedDate}</Text>
      <Text style={stylesRE.header}>Beurteilung Ihrer Beweglichkeit</Text>
      <ScrollView style={{ padding: 0, top: -10 }}>
      <Text style={stylesRE.header}>Bewegung 1: Rotation</Text>
      <DrawingY 
        maxLBefore={maxYLBefore}
        maxRBefore={maxYRBefore}
        TitleString = {''}
        shouldAnimate = {false}
        imageSource={imageSourceR}
        degreeAdd = {90}
        imageHeight = {300}
        xAdd = {0}
        yAdd = {-40}
        titleXAdd = {0}
        titleYAdd = {0}
        resize = {1}
        lineLengthFactor = {2.5}
      />
      <Text style={stylesRE.rowBold}>Ihre Werte</Text>
      <Text style={stylesRE.row}>
        Links: {maxYLBefore}°, 
        Rechts: {maxYRBefore}°, 
        Summe: {maxYRBefore+maxYLBefore}°</Text>
      <Text style={stylesRE.header}>Bewegung 2: Seitneigung</Text>
      <DrawingY 
        maxLBefore={maxRLBefore}
        maxRBefore={maxRRBefore}
        TitleString = {''}
        shouldAnimate = {false}
        imageSource={imageSourceY}
        degreeAdd = {-270}
        imageHeight = {300}
        xAdd = {0}
        yAdd = {40}
        titleXAdd = {0}
        titleYAdd = {0}
        resize = {1}
        lineLengthFactor = {-2.3}
      />
      <Text style={stylesRE.rowBold}>Ihre Werte</Text>
      <Text style={stylesRE.row}>
        Links: {maxRLBefore}°, 
        Rechts: {maxRRBefore}°, 
        Summe: {maxRRBefore+maxRLBefore}°{'\n'}{'\n'}
      </Text>
      </ScrollView>
      </View>
    </View>
  );
  else if (evaluationsSkipped) return (
    <View style={styles.container}>
      <View style={styles.top}>
      <Text style={stylesRE.rowBold}>Aktueller Status {formattedDate}</Text>
      
      <Text style={stylesRE.header}>Schmerzintensität{'\n'}({painData.painToString})</Text>
      <Text style={stylesRE.row}>Vor dem Training: {painIntensityBefore}</Text>
      <Text style={stylesRE.row}>Nach dem Training: {painIntensityAfter}</Text>
      <Text style={stylesRE.rowBold}>Die Intensität Ihrer Schmerzen  hat sich um <Text style={textColorDeltaPain}>{deltaPain} </Text> Punkte (<Text style={textColorDeltaPain}>{(100*(deltaPain)/(painIntensityBefore)).toFixed(2)}%</Text>) verändert!{'\n\n\n'}</Text>
      </View>
    </View>
  );
};


const stylesRE = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: '5%',
    color: "#10069F",
  },
  row: {
    fontSize: 16,
    textAlign: "center",
    margin: '2%',
  },
  rowBold: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    margin: '1%',
  },
  textRed:{
    color: "red",
  },
  textGreen:{
    color: "green",
  }
});
export default ResultEvaluation;

