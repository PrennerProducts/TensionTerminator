import 'expo-router/entry';
import { View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from "../../components/styleSheet";

export default function EvaluationAfterScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Evaluierungsübung NACHHER</Text>
            <View style={styles.bottom}>
                <Pressable style={styles.button} onPress={() => navigation.navigate("EvaluationScreen")}>
                    <Text style={styles.buttonText}>Starten</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => navigation.navigate("intensityAfter")}>
                    <Text style={styles.buttonText}>Weiter</Text>
                </Pressable>
            </View>
        </View>
    );
}
