import 'expo-router/entry';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import React from 'react';
import { useState } from 'react';
import { painData } from './painData';

const PainSlider = ({beforeAfter}) => {
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
  const smilePainValue = (painValue > 7)
  ? require('../../assets/images/Smile10.png')
  : (painValue >= 4 && painValue <= 7)
    ? require('../../assets/images/Smile5.png')
    : require('../../assets/images/Smile0.png')
  const handleSliderChange = (sliderValue) => {
    setPainValue(sliderValue);
    if (beforeAfter === 0) {painData.painIntensityBefore=painValue;}
    else {painData.painIntensityAfter=painValue;}
    
  };
  return (
    <View >
        <Text style={stylesI.painValue}><Text style={textColorPainValue}>{painValue}</Text></Text>
        <Slider
            minimumValue={0}
            maximumValue={10}
            height = {150}
            vertical = {true}
            minimumTrackTintColor={sliderColorPainValue}
            maximumTrackTintColor={sliderColorPainValue}
            //thumbTintColor={sliderColorPainValue}
            trackImage={require('../../assets/images/MeterG.png')}
            //minimumTrackImage={require('../../assets/images/MeterG.png')}
            thumbImage={smilePainValue}
            step={1}
            value={painValue}
            onValueChange={handleSliderChange}
        />
    </View>
  );
};

const stylesI = StyleSheet.create({
  painValue: {
    fontSize: 100,
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

export default PainSlider;
