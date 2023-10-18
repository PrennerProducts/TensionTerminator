import 'expo-router/entry';
import { View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from "../../components/styleSheet";

export default function IntensityAfterScreen ({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Wie stark tut es weh? VORHER</Text>
            <View style={styles.bottom}>
                <Pressable style={styles.button} onPress={() => navigation.navigate("resultEvaluation")}>
                    <Text style={styles.buttonText}>Weiter</Text>
                </Pressable>
            </View>
        </View>
    );
}
