import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';
import styles from "./components/StyleSheet";

const howPain = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Wie tut es weh?</Text>
            <View style={styles.bottom}>
            <Link href={'/intensityBefore'} asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Druckschmerzen</Text>
                </Pressable>
            </Link>

            <Link href={'/intensityBefore'} asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Ziehender Schmerz</Text>
                </Pressable>
            </Link>
            </View>
        </View>
    );
}

export default howPain;