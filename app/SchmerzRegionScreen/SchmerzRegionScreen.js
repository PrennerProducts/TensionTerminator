import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const SchmerzRegionScreen = () => {
    // Hier können Sie die Quelle für Ihre Silhouette-Datei ersetzen
    const silhouetteImage = require('../../assets/Mensch.png');

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SchmerzRegionScreen</Text>
            <Image source={silhouetteImage} style={{ width: 200, height: 400 }} />


            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor: 'blue',
                        margin: 10,
                    }}
                    onPress={() => {
                        // Aktion, die bei Berührung von Schulter-Nacken-Rechteck ausgeführt werden soll
                        console.log('Schulter-Nacken wurde berührt.');
                    }}
                >
                    <Text>Schulter-Nacken</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor: 'green',
                        margin: 10,
                    }}
                    onPress={() => {
                        // Aktion, die bei Berührung von Mittlerer-Rücken-Rechteck ausgeführt werden soll
                        console.log('Mittlerer-Rücken wurde berührt.');
                    }}
                >
                    <Text>Mittlerer-Rücken</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor: 'red',
                        margin: 10,
                    }}
                    onPress={() => {
                        // Aktion, die bei Berührung von Unterer-Rücken-Rechteck ausgeführt werden soll
                        console.log('Unterer-Rücken wurde berührt.');
                    }}
                >
                    <Text>Unterer-Rücken</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: 100,
                        height: 100,
                        backgroundColor: 'purple',
                        margin: 10,
                    }}
                    onPress={() => {
                        // Aktion, die bei Berührung von Becken-Gesäß-Rechteck ausgeführt werden soll
                        console.log('Becken-Gesäß wurde berührt.');
                    }}
                >
                    <Text>Becken-Gesäß</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SchmerzRegionScreen;
