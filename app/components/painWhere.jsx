import 'expo-router/entry';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';
import styles from './StyleSheet';
import { painData } from './painData';
import { evaluationData } from '../evaluationComponents/evaluationData';

const painWhere = () => {
  const router = useRouter();
  const silhouetteImage = require('../../assets/images/Mensch.png');
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.title}></Text>
      </View>
      <Image
        source={silhouetteImage}
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
          marginLeft: 11,
        }}
      />

      <View
        style={{
          top: windowHeight * 0.25,
          position: 'absolute',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        {/* Schulter-Nacken */}
        <Link href={'components/painHow'} asChild>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(0, 0, 168, 0)',
              alignItems: 'center',
              justifyContent: 'center',
              height: windowHeight * 0.19,
            }}
            onPress={() => {
              painData.painRegion = 1;
              console.log('Schulter-Nacken ausgewählt.');
              evaluationData.resetValues();
              evaluationData.isTraining = 1;
            }}
          >
            <Text
              style={{
                paddingRight: 15,
                paddingTop: 40,
                fontSize: 20,
                color: 'darkblue',
                marginLeft: 11,
              }}
            >
              Schulter Nacken
            </Text>
          </TouchableOpacity>
        </Link>

        {/* Mittlerer-Rücken */}
        <Link href={'components/painHow'} asChild>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(0, 0, 168, 0)',
              alignItems: 'center',
              justifyContent: 'center',
              height: windowHeight * 0.13,
            }}
            onPress={() => {
              painData.painRegion = 2;
              console.log('Mittlerer-Rücken ausgewählt.');
              evaluationData.resetValues();
              evaluationData.isTraining = 1;
            }}
          >
            <Text
              style={{
                paddingRight: 10,
                fontSize: 20,
                color: 'darkblue',
                marginLeft: 11,
              }}
            >
              Mittlerer Rücken
            </Text>
          </TouchableOpacity>
        </Link>

        {/* Unterer-Rücken */}
        <Link href={'components/painHow'} asChild>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(0, 0, 168, 0)',
              alignItems: 'center',
              justifyContent: 'center',
              height: windowHeight * 0.14,
            }}
            onPress={() => {
              painData.painRegion = 3;
              console.log('Unterer-Rücken ausgewählt.');
              evaluationData.resetValues();
              evaluationData.isTraining = 1;
            }}
          >
            <Text
              style={{
                paddingRight: 15,
                paddingBottom: 20,
                fontSize: 20,
                color: 'darkblue',
                marginLeft: 11,
              }}
            >
              Unterer Rücken
            </Text>
          </TouchableOpacity>
        </Link>

        {/* Becken-Gesäß */}
        <Link href={'components/painHow'} asChild>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(0, 0, 168, 0)',
              alignItems: 'center',
              justifyContent: 'center',
              height: windowHeight * 0.16,
            }}
            onPress={() => {
              painData.painRegion = 4;
              console.log('Becken-Gesäß ausgewählt.');
              evaluationData.resetValues();
              evaluationData.isTraining = 1;
            }}
          >
            <Text
              style={{
                paddingRight: 15,
                paddingBottom: 30,
                marginLeft: 11,
                fontSize: 20,
                color: 'darkblue',
              }}
            >
              Becken Gesäß
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default painWhere;
