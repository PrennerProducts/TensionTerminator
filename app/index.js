import { useRouter } from 'expo-router';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './components/StyleSheet';
import UserData from './classes/userData';
import { useUserContext } from './components/userContextProvider';
import React, { useEffect, useState } from 'react';
import { UserContextProvider } from './components/userContextProvider';
import { resetAllData } from './services/storage';

const WelcomeScreen = () => {
  // User context provider
  const {
    username,
    gameLevel,
    points,
    profileImageIndex,
    setUsername,
    setGameLevel,
    setPoints,
    setProfileImageIndex,
    updateUserDetails,
  } = useUserContext();

  // user instance
  const [user, setUser] = useState(new UserData());

  // router
  const navigation = useRouter();

  // reset all data
  // useEffect(() => {
  //   const resetDataAndInitialize = async () => {
  //     await resetAllData(); // Daten zurücksetzen
  //   };

  //   resetDataAndInitialize();
  // }, []);

  // init userData
  useEffect(() => {
    const initializeUser = async () => {
      await user.initialize();
      await updateUserDetails(
        user.getUserName(),
        user.getLevel(),
        user.getPoints(),
        user.getprofilepicture()
      );
    };

    initializeUser();
  }, []);

  useEffect(() => {
    setTimeout(async () => {
      navigation.push('/home');
    }, 1000);
  }, []);

  return (
    <UserContextProvider>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} />
        <Image source={require('../assets/gifs/loading.gif')} />
        <Text>Lade...</Text>
      </View>
    </UserContextProvider>
  );
};

export default WelcomeScreen;
