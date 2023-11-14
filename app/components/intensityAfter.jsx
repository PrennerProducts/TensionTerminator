import 'expo-router/entry';
import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import React from 'react';
import { Link } from 'expo-router';
import styles from './StyleSheet';
import { painData } from './painData';
import { useState } from 'react';


const intensityAfter = () => {
  const [painValue, setPainValue] = useState(painData.painIntensityBefore);
  const sliderColorPainValue = (painValue > 7)
  ? '#F9150C'
  : (painValue >= 4 && painValue <= 7)
    ? '#D49E5B'
    : '#C0E583';
  const textColorPainValue = (painValue > 7)
  ? stylesI.textRed
  : (painValue >= 4 && painValue <= 7)
    ? stylesI.textBlue
    : stylesI.textGreen;
  const handleSliderChange = (sliderValue) => {
    setPainValue(sliderValue);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Wie beurteilen Sie die Veränderung der Intensität Ihrer Schmerzen?</Text>
      
        <View style={styles.bottom}>
        <Text style={stylesI.painValue}><Text style={textColorPainValue}>{painValue}</Text></Text>
        <View >
        <Slider
        minimumValue={0}
        maximumValue={10}
        height = {5}
        minimumTrackTintColor={sliderColorPainValue}
        maximumTrackTintColor={sliderColorPainValue}
        thumbTintColor={sliderColorPainValue}
        step={1}
        value={painValue}
        onValueChange={handleSliderChange}
      />
            <Image
            source={require('../../assets/images/PainMeterS.png')}
            style={{
              position: 'relative',
              width: '100%',
              resizeMode: 'contain',
              top: '0%',
            }}
          />
        </View>

        <Link href={'../evaluationComponents/evaluationAfter'} asChild>
          <TouchableOpacity style={styles.button} onPress={() => {painData.painIntensityAfter = painValue;}}>
            <Text style={styles.buttonText}>Weiter</Text>
          </TouchableOpacity>
        </Link>
      </View>
      
    </View>
  );
};

const stylesI = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: '#ffffff',
  },
  top: {
    flex: 5,
    justifyContent: 'flex-start',
    top: "2%",
    backgroundColor: '#ffffff',
  },
  bottom: {
      flex: 1,
      justifyContent: 'flex-end',
      bottom: "5%",
  },
  painValue: {
    fontSize: 200,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: "#10069F",
  },
  textRed:{
    color: '#F9150C',
  },
  textBlue:{
    color: '#D49E5B',
  },
  textGreen:{
    color: '#C0E583',
  }
});

export default intensityAfter;
