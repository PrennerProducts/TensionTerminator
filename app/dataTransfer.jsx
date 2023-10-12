import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';
import styles from "../components/styleSheet";

const DataTransfer = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Daten übermitteln</Text>

            <Link href={'/gratulation'} asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Bestätigen</Text>
                </Pressable>
            </Link>

        </View>
    );
}

export default DataTransfer;