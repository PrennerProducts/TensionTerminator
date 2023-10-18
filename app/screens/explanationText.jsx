import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';
import styles from "../../components/styleSheet";

export default function ExplanationTextScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Training</Text>
            <View style={styles.bottom}>
                <Pressable style={styles.button} onPress={() => navigation.navigate("training")}>
                    <Text style={styles.buttonText}>Training starten</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => navigation.navigate("explanation/Video")}>
                    <Text style={styles.buttonText}>Erklärvideo anschauen</Text>
                </Pressable>
            </View>
        </View>
    );
}