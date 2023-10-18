import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';
import styles from "../../components/styleSheet";

export default function GratulationScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Gratulation!</Text>
            <View style={styles.bottom}>
                <Pressable style={styles.button} onPress={() => navigation.navigate("appointment")}>
                    <Text style={styles.buttonText}>Termin planen</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => navigation.navigate("where")}>
                    <Text style={styles.buttonText}>Neues Training starten</Text>
                </Pressable>
            </View>
        </View>
    );
}