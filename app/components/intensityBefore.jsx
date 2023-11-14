import 'expo-router/entry';
import { View, Text, Pressable} from 'react-native';
import Slider from '@react-native-community/slider';
import React from 'react';
import { Link } from 'expo-router';
import styles from './StyleSheet';
import { painData } from './painData';
import { Image } from 'react-native-svg';

const intensityBefore = () => {
  const handleSliderChange = (sliderValue) => {
    painData.painIntensityBefore = sliderValue;
      console.log(painData.painIntensityBefore);
  };
  return (
    <View style={styles.container}>
            <View >
        <Image Source={require('../../assets/images/roll.png')} styles={{width:'100%', height:'100%'}}/>
        </View>
      <Text style={styles.title}>Wie stark tut es weh? VORHER</Text>

        <View style={styles.bottom}>
      <Slider
        minimumValue={0}
        maximumValue={10}
        height = {10}
        minimumTrackTintColor={'red'}
        maximumTrackTintColor='grey'
        trackImage={require('../../assets/images/PainMeter.png')}
        step={1}
        value={5}
        onValueChange={handleSliderChange}
      />
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
