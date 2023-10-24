import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';
import styles from "./components/StyleSheet";


const ResultEvaluation = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ergebnisanzeige Evaluation</Text>
            <View style={styles.bottom}>
            <Link href={'/dataTransfer'} asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Daten übermitteln</Text>
                </Pressable>
            </Link>

            <Link href={'/gratulation'} asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Weiter</Text>
                </Pressable>
            </Link>
            </View>
        </View>
    );
}

export default ResultEvaluation;