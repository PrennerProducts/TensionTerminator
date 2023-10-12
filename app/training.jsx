import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';
import styles from "../components/styleSheet";

const TrainingScreen = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Training</Text>

            <Link href={'/evaluationAfter'} asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Training beenden</Text>
                </Pressable>
            </Link>

        </View>
    );
}

export default TrainingScreen;