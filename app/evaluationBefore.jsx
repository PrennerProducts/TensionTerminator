import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';
import styles from "./components/StyleSheet";


const EvaluationBefore = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Evaluierungsübung VORHER</Text>
            <View style={styles.bottom}>
            <Link href={'/tabs/EvaluationScreen'} asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Weiter</Text>
                </Pressable>
            </Link>

            <Link href={'/trainingStart'} asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Überspringen</Text>
                </Pressable>
            </Link>
            </View>
        </View>
    );
}

export default EvaluationBefore;