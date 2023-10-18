import 'expo-router/entry';
import { View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from '../../components/styleSheet';


export default function QRScanScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>QR-Code Scannen</Text>

            <View style={styles.bottom}>

                <Pressable style={styles.button} nPress={() => navigation.navigate("barcode")}>
                    <Text style={styles.buttonText}>Barcode Scannen</Text>
                </Pressable>

                <Pressable style={styles.button} nPress={() => navigation.navigate("criteria")}>
                    <Text style={styles.buttonText}>Überspringen</Text>
                </Pressable>
            </View>
        </View>
    );
}
