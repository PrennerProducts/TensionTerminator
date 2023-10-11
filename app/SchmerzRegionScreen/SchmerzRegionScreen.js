import React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

const SchmerzRegionScreen = () => {
    const silhouetteImage = require('../../assets/Mensch.png');
    const windowHeight = Dimensions.get('window').height;
    const opacityHeight = windowHeight * 0.17; // Hier können Sie den Prozentsatz anpassen


    return (
        <View style={{ flex: 1 }}>
            <Image source={silhouetteImage} style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'cover' }} />

            <View style={{ top: windowHeight* 0.22, position: 'absolute', flexDirection: 'column',  width: '100%' }}>
                {/* Schulter-Nacken */}
                <TouchableOpacity
                    style={{
                        backgroundColor: 'rgba(0, 0, 168, 0.2)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: windowHeight * 0.205

                    }}
                    onPress={() => {
                        console.log('Schulter-Nacken wurde berührt.');
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
                        height: windowHeight * 0.136,

                    }}
                    onPress={() => {
                        console.log('Mittlerer-Rücken wurde berührt.');
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
                        height: windowHeight * 0.15,

                    }}
                    onPress={() => {
                        console.log('Unterer-Rücken wurde berührt.');
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
                        height: windowHeight * 0.165,

                    }}
                    onPress={() => {
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
