import 'expo-router/entry';
import { View, Text, Pressable, Animated } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Link, useRouter } from 'expo-router';
import styles from './components/StyleSheet';
import { Button } from '@rneui/themed';

const TrainingScreen = () => {
  const router = useRouter();

  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isPressableVisible, setPressableVisible] = useState(true);
  const [elements, setElements] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalInput, setIntervalInput] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);

        if (seconds === 59) {
          setSeconds(0);
          setMinutes((prevMinutes) => prevMinutes + 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  useEffect(() => {
    // Load data from local JSON file

    const fetchData = () => {
      try {
        const data = require('./data/inputgrp2.json');
        setElements(data.elements);
        console.log('JSON imported');
        console.log(data);
      } catch (error) {
        console.error('Error reading local JSON file:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (isRunning) {
      setIntervalInput(
        setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % elements.length);
          fadeIn();
        }, 6000)
      );
    } else {
      clearInterval(intervalInput);
    }

    return () => clearInterval(intervalInput);
  }, [elements, isRunning]);

  const handleStop = () => {
    setPressableVisible(true);
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
  };

  const handleStart = () => {
    setIsRunning(true);
    setPressableVisible(false);
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        setTimeout(() => fadeOut(), 2000); // Wait for 3 seconds before fading out
      }
    });
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            flex: 2.5,
            width: '80%',
            justifyContent: 'center',
            paddingTop: 5,
            alignItems: 'center',
            backgroundColor: elements[currentIndex]?.color || 'white',
            opacity: fadeAnim,
          },
        ]}
      >
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
          {elements[currentIndex]?.text || ''}
        </Text>
      </Animated.View>

      <Text style={{ fontSize: 60 }}>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </Text>
      <View style={styles.bottom}>
        {isPressableVisible && (
          <Button
            title="Timer starten"
            onPress={() => {
              handleStart();
            }}
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
          />
        )}
      </View>
      <View style={styles.bottom}>
        <Button
          title="Training beenden"
          onPress={() => {
            router.push({ pathname: '../components/intensityAfter' });
          }}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        />
      </View>
    </View>
  );
};

export default TrainingScreen;
