import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import {Link, useRouter} from 'expo-router';
import styles from "./components/StyleSheet";



const TrainingScreen = () => {
    const router = useRouter();
    const [isRunning, setIsRunning] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isPressableVisible, setPressableVisible] = useState(true);
    const [elements, setElements] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [intervalInput, setIntervalInput] = useState(null);


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
            console.log(data)
          } catch (error) {
            console.error('Error reading local JSON file:', error);
          }
        };
    
        fetchData();
      }, []); 

      useEffect(() => {
        // Display text and change background color at 2-second intervals
        if (isRunning) {
          setIntervalInput(
            setInterval(() => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % elements.length);
            }, 2000)
          );
        } else {
          // Clear the interval if not started or stopped
          clearInterval(intervalInput);
        }
    
        // Clear the interval when the component unmounts
        return () => clearInterval(intervalInput);
      }, [elements, isRunning]);


    const handleStop = () => {
        setIsRunning(false);
        setSeconds(0);
        setMinutes(0);
      };

    const handleStart = () => {
        setIsRunning(true);
        setPressableVisible(false);
      };


    return (
        <View style={styles.container}>
    <View style={[styles.container, { backgroundColor: elements[currentIndex]?.color || 'white' }]}>
        <Text style={styles.text}>{elements[currentIndex]?.text || ''}</Text>

    </View>


            <Text style={{fontSize: 60}}>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</Text>
            <View style={styles.bottom}>
            {isPressableVisible && (
                <Pressable                     onPress={() => {
                        handleStart();
                    }}style={styles.button}>

                    <Text style={styles.buttonText}>Training starten</Text>
                </Pressable>)}
            </View>
            <View style={styles.bottom}>
            <Link href={'../evaluationComponents/evaluationAfter'} asChild>
                <Pressable                     onPress={() => {
                        handleStop();
                    }}style={styles.button}>

                    <Text style={styles.buttonText}>Training beenden</Text>
                </Pressable>
            </Link>
            </View>
        </View>
    );
}

export default TrainingScreen;