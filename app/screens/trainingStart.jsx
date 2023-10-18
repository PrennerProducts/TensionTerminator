import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';
import styles from "../../components/styleSheet";

export default function TrainingStartScreen ({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Training</Text>
            <View style={styles.bottom}>
                <Pressable style={styles.button} onPress={() => navigation.navigate("training")}>
                    <Text style={styles.buttonText}>Training starten</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => navigation.navigate("explanationVideo")}>
                    <Text style={styles.buttonText}>Erklärvideo anschauen</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => navigation.navigate("explanationText")}>
                    <Text style={styles.buttonText}>Erklärung lesen</Text>
                </Pressable>
            </View>
        </View>
    );
}