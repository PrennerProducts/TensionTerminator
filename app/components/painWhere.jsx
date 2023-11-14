 import 'expo-router/entry';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { Link, useRouter} from 'expo-router';
import styles from "./StyleSheet";
import { painData } from './painData';

const painWhere = () => {
    const router = useRouter();
    const silhouetteImage = require('../../assets/images/Mensch.png');
    const windowHeight = Dimensions.get('window').height;

    return (
        <View style={{ flex: 1 ,backgroundColor: 'white'}}>
            <View style={{alignItems: 'center',justifyContent: 'center',}}>
                <Text style={styles.title}></Text>
            </View>
            <Image source={silhouetteImage} style={{ flex: 1, width: '100%', height: '100%', resizeMode: 'cover' }} />

            <View style={{ top: windowHeight* 0.25, position: 'absolute', flexDirection: 'column',  width: '100%' }}>
                {/* Schulter-Nacken */}
                <Link href={'components/painHow'} asChild>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'rgba(0, 0, 168, 0)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: windowHeight * 0.19

                        }}
                        onPress={() => {
                            painData.painRegion = 1;
                            console.log('Schulter-Nacken ausgewählt.');
                        }}
                    >
                        <Text style={{paddingRight:15,paddingTop:40, fontSize: 17,color: 'darkblue'}}>Schulter Nacken</Text>
                    </TouchableOpacity>
                </Link>

                {/* Mittlerer-Rücken */}
                <Link href={'components/painHow'} asChild>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'rgba(0, 0, 168, 0)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: windowHeight * 0.13,

                        }}
                        onPress={() => {
                            painData.painRegion = 2;
                            console.log('Mittlerer-Rücken ausgewählt.');
                        }}
                    >
                        <Text style={{paddingRight:15, fontSize: 17,color: 'darkblue'}}>Mittlerer Rücken</Text>
                    </TouchableOpacity>
                </Link>

                {/* Unterer-Rücken */}
                <Link href={'components/painHow'} asChild>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'rgba(0, 0, 168, 0)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: windowHeight * 0.14,

                        }}
                        onPress={() => {
                            painData.painRegion = 3;
                            console.log('Unterer-Rücken ausgewählt.');
                        }}
                    >
                        <Text style={{paddingRight:15,paddingBottom:20, fontSize: 17,color: 'darkblue'}}>Unterer Rücken</Text>
                    </TouchableOpacity>
                </Link>

                {/* Becken-Gesäß */}
                <Link href={'components/painHow'} asChild>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'rgba(0, 0, 168, 0)',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: windowHeight * 0.16,

                        }}
                        onPress={() => {
                            painData.painRegion = 4;
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

export default painWhere;