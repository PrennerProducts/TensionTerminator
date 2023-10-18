import 'expo-router/entry';
import { View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from '../../components/styleSheet';

export default function EvaluationBeforeScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Evaluierungsübung VORHER</Text>
            <View style={styles.bottom}>
                <Pressable style={styles.button} onPress={() => navigation.navigate("EvaluationScreen")}>
                    <Text style={styles.buttonText}>Weiter</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => navigation.navigate("trainingStart")}>
                    <Text style={styles.buttonText}>Überspringen</Text>
                </Pressable>
            </View>
        </View>
    );
}