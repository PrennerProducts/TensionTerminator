import {View, Text, Pressable} from "react-native";
import React from 'react';
import styles from "../../components/styleSheet";

export default function CriteriaScreen ({navigation}) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ausschlusskriterien</Text>
            <View style={styles.bottom}>
                <Pressable style={styles.button} onPress={() => navigation.navigate("where")}>
                    <Text style={styles.buttonText}>Bestätigen</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => navigation.navigate("where")}>
                    <Text style={styles.buttonText}>Überspringen</Text>
                </Pressable>
            </View>
        </View>
    );
}