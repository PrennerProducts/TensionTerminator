import 'expo-router/entry';
import {View, Text, Pressable, Button, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Link, useRouter} from 'expo-router';
import styles from "./components/StyleSheet";
import AudioPlayer from './services/audioPlayer';
import { useUserContext } from './components/userContextProvider';
import { saveUserData, getUserData } from './services/storage.jsx';
import SlotMachine from 'react-native-slot-machine';
import profileScreen from "./profileScreen.jsx";

const Gratulation = () => {
    const router = useRouter();
    const { points, updatePoints, gameLevel, updateGameLevel } = useUserContext();

    useEffect(() => {

        const lpunkte = points + 200;
        updatePoints(lpunkte);
        if (lpunkte <199) {
            updateGameLevel(1);
        }
        if (lpunkte > 199 && lpunkte < 399) {
            updateGameLevel(2);
        }
        if (lpunkte > 399 && lpunkte < 599) {
            updateGameLevel(3);
        }
        if (lpunkte > 599 && lpunkte < 799) {
            updateGameLevel(4);
        }
        if (lpunkte > 799 && lpunkte < 999) {
            updateGameLevel(5);
        }
        if (lpunkte > 999 && lpunkte < 1199) {
            updateGameLevel(6);
        }
        if (lpunkte > 1199 && lpunkte < 1399) {
            updateGameLevel(7);
        }
        if (lpunkte > 1399 && lpunkte < 1599) {
            updateGameLevel(8);
        }
        if (lpunkte > 1599 && lpunkte < 1799)  {
            updateGameLevel(9);
        }
        if (lpunkte > 1799 && lpunkte < 1999) {
            updateGameLevel(9);
        }
        if (lpunkte > 1999) {
            updateGameLevel(10);
        }

    }, []);
    console.log(getUserData());



    return (
        <View style={styles.container}>
                <View>
      <AudioPlayer audioUri={require('../assets/sounds/Chimes.wav')} />
    </View>
            <Text style={styles.title}>Gratulation!</Text>
<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={stylesLocal.text}>Wow, du hast dir für deine Leistung 200 Punkte verdient!</Text>
    <View>
        <SlotMachine text={points} duration={2000} width={60} height={80} />

    </View>
    <Text style={stylesLocal.text}>Dein aktuelles Game-Level: {gameLevel}</Text>
</View>
            <View style={styles.bottom}>

            <Link href={'./appointment'} asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Termin planen</Text>
                </Pressable>
            </Link>

            <Link href={'./components/painWhere'} asChild>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Neues Training starten</Text>
                </Pressable>
            </Link>
            </View>
        </View>
    );
}
const stylesLocal = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        marginVertical: 18,
    },
    textInputStyle: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        minWidth: 150,
    },
    okButtonStyle: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    okButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    switchcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        backgroundColor: '#C5C5C5',
        width: '100%',
    },
    switchtext: {
        marginRight: 10,
    },
});
export default Gratulation;