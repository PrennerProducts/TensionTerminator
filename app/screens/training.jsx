import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';
import styles from "../../components/styleSheet";

export default function TrainingScreen ({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Training</Text>
            <View style={styles.bottom}>
                <Pressable style={styles.button}  nPress={() => navigation.navigate("evaluationAfter")}>
                    <Text style={styles.buttonText}>Training beenden</Text>
                </Pressable>
            </View>
        </View>
    );
}
