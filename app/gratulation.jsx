import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';
import styles from "./components/StyleSheet";
import AudioPlayer from './services/audioPlayer';

const Gratulation = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
                <View>
      <AudioPlayer audioUri={require('../assets/sounds/Chimes.wav')} />
    </View>
            <Text style={styles.title}>Gratulation!</Text>
            <View style={styles.bottom}>
            <Link href={'./appointment'} asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Termin planen</Text>
                </Pressable>
            </Link>

            <Link href={'./components/painWhere'} asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Neues Training starten</Text>
                </Pressable>
            </Link>
            </View>
        </View>
    );
}

export default Gratulation;