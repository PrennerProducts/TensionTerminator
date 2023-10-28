import 'expo-router/entry';
import { View, Text, Pressable, Image, Button } from 'react-native';
import React from 'react';
import { Link, useRouter, useLocalSearchParams } from 'expo-router';
import styles from '../components/StyleSheet';
import * as FileSystem from 'expo-file-system';
import {StyleSheet} from "react-native";

const ResultEvaluation = () => {
  const router = useRouter();
  const { exercise, maxL, maxR } = useLocalSearchParams();
  console.log(exercise);
  const cacheBuster = Date.now();

  if (exercise === 0){
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Bewegung {(exercise+1)}</Text>
          <Image
                source={{
                  uri: `${FileSystem.documentDirectory}MaxL.jpg?${cacheBuster}`,
                }}
                style={stylesER.imageL}
                />
                <Text style={stylesER.imageTextL}>Max L {maxL}°</Text>
          <Image
                source={{
                  uri: `${FileSystem.documentDirectory}MaxR.jpg?${cacheBuster}`,
                }}
                style={stylesER.imageR}
                />
                <Text style={stylesER.imageTextR}>Max R {maxR}°</Text>
          <View style={styles.bottom}>
            <Link href={'/dataTransfer'} asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Daten übermitteln</Text>
              </Pressable>
            </Link>
            <Link href={'/gratulation'} asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Weiter</Text>
              </Pressable>
            </Link>
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
                  uri: `${FileSystem.documentDirectory}MaxL.jpg?${cacheBuster}`,
                }}
                style={stylesER.imageL}
                />
                <Text style={stylesER.imageTextL}>Max L {maxL}°</Text>
          <Image
                source={{
                  uri: `${FileSystem.documentDirectory}MaxR.jpg?${cacheBuster}`,
                }}
                style={stylesER.imageR}
                />
                <Text style={stylesER.imageTextR}>Max R {maxR}°</Text>
                <Image
                source={{
                  uri: `${FileSystem.documentDirectory}MaxL.jpg?${cacheBuster}`,
                }}
                style={stylesER.imageL}
                />
                <Text style={stylesER.imageTextL}>Max L {maxL}°</Text>
          <Image
                source={{
                  uri: `${FileSystem.documentDirectory}MaxR.jpg?${cacheBuster}`,
                }}
                style={stylesER.imageR}
                />
                <Text style={stylesER.imageTextR}>Max R {maxR}°</Text>
          <View style={styles.bottom}>
            <Link href={'/dataTransfer'} asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Daten übermitteln</Text>
              </Pressable>
            </Link>
            <Link href={'/gratulation'} asChild>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Weiter</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      );
    }
};


const stylesER = StyleSheet.create({
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


