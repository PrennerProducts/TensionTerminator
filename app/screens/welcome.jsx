import 'expo-router/entry';
import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from '../../components/styleSheet';



export default function Welcome ({navigation}) {

    return (
        <View style={styles.container}>
            <View style={styles.bottom}>
                    <Pressable style={styles.button} onPress={() => navigation.navigate("QRScan")}>
                        <Text style={styles.buttonText}>App Starten</Text>
                    </Pressable>

                {/*Verschiedene Varianten um ans Ziel zu kommen*/}
                {/*
        <Button title="App Starten" onPress= {() => router.push('QRscan')}>
        </Button>

        handlePress geht zu home
        <Pressable style={{ top: 0 }} onPress= {() => router.push('QRscan')}>
            <Text style={{ top: 0 }}>App Starten</Text>
        </Pressable>

        <Link href={'/QRscan'} asChild>
            <Pressable>
                <Text>App Starten</Text>
            </Pressable>
        </Link>

*/}
            </View>
        </View>
    );
};
