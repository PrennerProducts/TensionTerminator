import 'expo-router/entry';
import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from "../../components/styleSheet";

export default function DataTransfer() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Daten übermitteln</Text>
            <View style={styles.bottom}>
                <Pressable style={styles.button} onPress={() => navigation.navigate("gratulation")}>
                    <Text style={styles.buttonText}>Bestätigen</Text>
                </Pressable>
            </View>
        </View>
    );
}
