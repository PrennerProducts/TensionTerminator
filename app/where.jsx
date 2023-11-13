import "expo-router/entry";
import {View, Text, Pressable, Button} from "react-native";
import React from "react";
import {Link, useRouter} from "expo-router";
import {removeData} from "./services/storage";
import styles from "./components/StyleSheet";

import 'expo-router/entry';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';
import styles from "../components/styleSheet";

const WherePain = () => {
    const router = useRouter();

    const silhouetteImage = require('../assets/Mensch.png');
    const windowHeight = Dimensions.get('window').height;



    return (
        <View style={{ flex: 1 ,backgroundColor: 'white'}}>
            <View style={{alignItems: 'center',justifyContent: 'center',}}>
                <Text style={styles.title}></Text>
            </View>
            <Image source={silhouetteImage} style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'cover' }} />

            <View style={{ top: windowHeight* 0.25, position: 'absolute', flexDirection: 'column',  width: '100%' }}>
                {/* Schulter-Nacken */}
                <Link href={'/how'} asChild>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'rgba(0, 0, 168, 0)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: windowHeight * 0.19

                        }}
                        onPress={() => {
                            console.log('Schulter-Nacken ausgewählt.');
                        }}
                    >
                        <Text style={{paddingRight:15,paddingTop:40, fontSize: 17,color: 'darkblue'}}>Schulter Nacken</Text>
                    </TouchableOpacity>
                </Link>

                {/* Mittlerer-Rücken */}
                <Link href={'/how'} asChild>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'rgba(0, 0, 168, 0)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: windowHeight * 0.13,

                        }}
                        onPress={() => {
                            console.log('Mittlerer-Rücken ausgewählt.');
                        }}
                    >
                        <Text style={{paddingRight:15, fontSize: 17,color: 'darkblue'}}>Mittlerer Rücken</Text>
                    </TouchableOpacity>
                </Link>

                {/* Unterer-Rücken */}
                <Link href={'/how'} asChild>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'rgba(0, 0, 168, 0)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: windowHeight * 0.14,

                        }}
                        onPress={() => {
                            console.log('Unterer-Rücken ausgewählt.');
                        }}
                    >
                        <Text style={{paddingRight:15,paddingBottom:20, fontSize: 17,color: 'darkblue'}}>Unterer Rücken</Text>
                    </TouchableOpacity>
                </Link>

                {/* Becken-Gesäß */}
                <Link href={'/how'} asChild>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'rgba(0, 0, 168, 0)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: windowHeight * 0.16,

                        }}
                        onPress={() => {
                            console.log('Becken-Gesäß ausgewählt.');
                        }}
                    >
                        <Text style={{paddingRight:15, paddingBottom: 30, fontSize: 17,color: 'darkblue'}}>Becken Gesäß</Text>
                    </TouchableOpacity>
                </Link>
            </View>
        </View>


    );
};
};

export default WherePain;

