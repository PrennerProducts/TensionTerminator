import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';
import styles from "../../components/styleSheet";

export default function ResultScreen ({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ergebnisanzeige Evaluation</Text>
            <View style={styles.bottom}>
                <Pressable style={styles.button} onPress={() => navigation.navigate("dataTransfer")}>
                    <Text style={styles.buttonText}>Daten übermitteln</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => navigation.navigate("gratulation")}>
                    <Text style={styles.buttonText}>Weiter</Text>
                </Pressable>
            </View>
        </View>
    );
}
