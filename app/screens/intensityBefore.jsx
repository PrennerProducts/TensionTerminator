import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';
import styles from "../../components/styleSheet";

export default function IntensityBeforeScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Wie stark tut es weh? VORHER</Text>
            <View style={styles.bottom}>
                <Pressable style={styles.button} onPress={() => navigation.navigate("evaluationBefore")}>
                    <Text style={styles.buttonText}>Weiter</Text>
                </Pressable>
            </View>
        </View>
    );
}
