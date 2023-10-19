import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';
import styles from "./components/StyleSheet";

const intensityAfter = () => {
    const router = useRouter();

    return (
        <View>
            <Text>Wie stark tut es weh? VORHER</Text>
            <View style={styles.bottom}>
            <Link href={'/resultEvaluation'} asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Weiter</Text>
                </Pressable>
            </Link>
            </View>
        </View>
    );
}

export default intensityAfter;