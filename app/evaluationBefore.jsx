import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';
import styles from '../components/styleSheet';

const EvaluationBefore = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Evaluierungsübung VORHER</Text>

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
    );
}

export default EvaluationBefore;