import 'expo-router/entry';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Animated, ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Link, useRouter } from 'expo-router';
import styles from './components/StyleSheet';
import AudioPlayer from './services/audioPlayer';
import { useUserContext } from './services/userContextProvider.jsx';
import { saveUserData, getUserData } from './services/storage.jsx';
import SlotMachine from 'react-native-slot-machine';
import profileScreen from './profileScreen.jsx';
import UserData from './classes/userData';
import { avatarList } from './config/avatarConfig';
import gratulationGif from '../assets/gifs/confetti.gif';
import { Button } from '@rneui/themed';

const Gratulation = () => {
  const router = useRouter();
  const {
    username,
    points,
    updatePoints,
    gameLevel,
    updateGameLevel,
    profileImageIndex,
    updateProfileImageIndex,
    updateUsername,
  } = useUserContext();
  const user = new UserData();
  const modulo = points % 200;

  useEffect(() => {
    const initializeUser = async () => {
      await user.initialize();
      updateUsername(user.getUserName());
      user.setUserName(username);
      console.log('My USername ist: ' + username);
    };
    initializeUser();
  }, []);

  // Confetti Gif
  const [showGif, setShowGif] = useState(true);

  const [fadeAnim] = useState(new Animated.Value(1)); // Initial opacity: 1

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Punkte
  useEffect(() => {
    const lpunkte = points + 150;

    user.setPoints(lpunkte);
    updatePoints(lpunkte);

    console.log(user.toString());
    // set Username in Storage  To username from Context Provider
    user.setUserName(username);

    if (lpunkte < 199) {
      updateGameLevel(1);
      user.setLevel(1);
      updateProfileImageIndex(0);
      user.setprofilepicture(0);
    }
    if (lpunkte > 199 && lpunkte < 399) {
      updateGameLevel(2);
      user.setLevel(2);
      updateProfileImageIndex(1);
      user.setprofilepicture(1);
    }
    if (lpunkte > 399 && lpunkte < 599) {
      updateGameLevel(3);
      user.setLevel(3);
      updateProfileImageIndex(2);
      user.setprofilepicture(2);
    }

    if (lpunkte > 599 && lpunkte < 799) {
      updateGameLevel(4);
      user.setLevel(4);
      updateProfileImageIndex(3);
      user.setprofilepicture(3);
    }
    if (lpunkte > 799 && lpunkte < 999) {
      updateGameLevel(5);
      user.setLevel(5);
      updateProfileImageIndex(4);
      user.setprofilepicture(5);
    }
    if (lpunkte > 999 && lpunkte < 1199) {
      updateGameLevel(6);
      user.setLevel(6);
      updateProfileImageIndex(5);
      user.setprofilepicture(5);
    }
    if (lpunkte > 1199 && lpunkte < 1399) {
      updateGameLevel(7);
      user.setLevel(7);
      updateProfileImageIndex(6);
      user.setprofilepicture(6);
    }
    if (lpunkte > 1399 && lpunkte < 1599) {
      updateGameLevel(8);
      user.setLevel(8);
      updateProfileImageIndex(7);
      user.setprofilepicture(7);
    }
    if (lpunkte > 1599 && lpunkte < 1799) {
      updateGameLevel(9);
      user.setLevel(9);
      updateProfileImageIndex(8);
      user.setprofilepicture(8);
    }
    if (lpunkte > 1799 && lpunkte < 1999) {
      updateGameLevel(10);
      user.setLevel(10);
      updateProfileImageIndex(9);
      user.setprofilepicture(9);
    }
    if (lpunkte > 1999) {
      updateGameLevel(11);
      user.setLevel(11);
      updateProfileImageIndex(10);
      user.setprofilepicture(10);
    }
    let picture = user.getprofilepicture();
    user.save();
  }, []);
  console.log(getUserData());

  return (
    <View style={styles.container}>
      {showGif && (
        <Animated.View style={[stylesLocal.overlay, { opacity: fadeAnim }]}>
          <Image source={gratulationGif} style={stylesLocal.gifStyle} />
        </Animated.View>
      )}
      <View>
        <AudioPlayer audioUri={require('../assets/sounds/Chimes.wav')} />
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.title}>{'\n'}Gratulation!</Text>
      </View>

      <ScrollView style={{ padding: 5, flex: 1}}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={stylesLocal.text}>
            Wow, Sie haben sich für Ihre Leistung 150 Punkte verdient!
          </Text>
          <View>
            <SlotMachine text={points} duration={2000} width={60} height={80} />
          </View>
          <Text style={stylesLocal.text}>
            Ihr aktuelles Game-Level: {gameLevel} {'\n'}
            Sie benötigen noch {modulo} Punkte für das nächste Level.
          </Text>
          <Image
            source={
              profileImageIndex >= 0 &&
              profileImageIndex != null &&
              profileImageIndex < avatarList.length
                ? avatarList[profileImageIndex]
                : require('../assets/images/error.jpg')
            }
            style={{
              width: 150,
              height: 150,
              borderRadius: 50,
              marginBottom: 20,
            }}
          />
      </View>
        </ScrollView>

      <View style={styles.bottom}>
        <Button
            title="Termin planen"
            onPress={() => router.push('appointment')}
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
            />
        <Button
            title="Neues Training starten"
            onPress={() => router.push('components/painWhere')}
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
            />
{/*        <Link href={'./appointment'} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Termin planen</Text>
          </Pressable>
        </Link>

        <Link href={'./components/painWhere'} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Neues Training starten</Text>
          </Pressable>
        </Link>*/}
      </View>
    </View>

  );
};
const stylesLocal = StyleSheet.create({
  /*overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },*/
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
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
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    pointerEvents: 'none',
  },
  gifStyle: {
    width: 450,
    height: 800,
  },
});
export default Gratulation;
