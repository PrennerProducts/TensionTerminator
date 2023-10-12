import {View, Text, Pressable} from "react-native";
import React from 'react';
import { Link } from 'expo-router';
import styles from "../components/styleSheet";

const criteriaScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ausschlusskriterien</Text>

            <Link href={'/where'} asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Bestätigen</Text>
                </Pressable>
            </Link>
            <Link href={'/where'} asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Überspringen</Text>
                </Pressable>
            </Link>

        </View>
    );
}


export default criteriaScreen;