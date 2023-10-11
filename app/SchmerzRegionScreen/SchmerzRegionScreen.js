import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

const SchmerzRegionScreen = () => {
    const silhouetteImage = require('../../assets/Mensch.png');
    const windowHeight = Dimensions.get('window').height;



    return (
        <View style={{ flex: 1 ,backgroundColor: 'white'}}>
            <View style={{alignItems: 'center',justifyContent: 'center',}}>
                <Text style={{ padding: 10, fontSize: 18,}}>Wählen Sie Ihre Schmerz-Region</Text>
            </View>
            <Image source={silhouetteImage} style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'cover' }} />

            <View style={{ top: windowHeight* 0.25, position: 'absolute', flexDirection: 'column',  width: '100%' }}>
                {/* Schulter-Nacken */}
                <TouchableOpacity
                    style={{
                        backgroundColor: 'rgba(0, 0, 168, 0.2)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: windowHeight * 0.205

                    }}
                    onPress={() => {
                        console.log('Schulter-Nacken ausgewählt.');
                    }}
                >
                    <Text>Schulter-Nacken</Text>
                </TouchableOpacity>

                {/* Mittlerer-Rücken */}
                <TouchableOpacity
                    style={{
                        backgroundColor: 'rgba(0, 0, 168, 0.2)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: windowHeight * 0.13,

                    }}
                    onPress={() => {
                        console.log('Mittlerer-Rücken ausgewählt.');
                    }}
                >
                    <Text>Mittlerer-Rücken</Text>
                </TouchableOpacity>

                {/* Unterer-Rücken */}
                <TouchableOpacity
                    style={{
                        backgroundColor: 'rgba(0, 0, 168, 0.2)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: windowHeight * 0.142,

                    }}
                    onPress={() => {
                        console.log('Unterer-Rücken ausgewählt.');
                    }}
                >
                    <Text>Unterer-Rücken</Text>
                </TouchableOpacity>

                {/* Becken-Gesäß */}
                <TouchableOpacity
                    style={{
                        backgroundColor: 'rgba(0, 0, 168, 0.2)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: windowHeight * 0.15,

                    }}
                    onPress={() => {
                        console.log('Becken-Gesäß ausgewählt.');
                    }}
                >
                    <Text>Becken-Gesäß</Text>
                </TouchableOpacity>
            </View>
        </View>


    );
};

export default SchmerzRegionScreen;
