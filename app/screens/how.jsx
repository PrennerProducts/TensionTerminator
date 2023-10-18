import 'expo-router/entry';
import { View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from "../../components/styleSheet";

export default function HowScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Wie tut es weh?</Text>
            <View style={styles.bottom}>
                <Pressable style={styles.button}  onPress={() => navigation.navigate("intensityBefore")}>
                    <Text style={styles.buttonText}>Druckschmerzen</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => navigation.navigate("intensityBefore")}>
                    <Text style={styles.buttonText}>Ziehender Schmerz</Text>
                </Pressable>
            </View>
        </View>
    );
}