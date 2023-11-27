import { useRouter } from 'expo-router';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './components/StyleSheet';
import UserData from './classes/userData';
import { useUserContext } from './services/userContextProvider';
import React, { useEffect, useState } from 'react';
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
    updateProfileImageIndex,
    updateUsername,
    updateGameLevel,
    updatePoints,
  } = useUserContext();

  // user instance
  const [user, setUser] = useState(new UserData());

  // router
  const navigation = useRouter();

  // useEffect(() => {
  //   const resetDataAndInitialize = async () => {
  //     await resetAllData(); // Daten zurücksetzen
  //   };

  //   resetDataAndInitialize();
  // }, []);

  // init userData
  // useEffect(() => {
  //   const initializeUser = async () => {
  //     await user.initialize();
  //     await user.load();
  //     await updateProfileImageIndex(user.getprofilepicture());
  //     await updateUsername(user.getUserName());
  //     await updateGameLevel(user.getLevel());
  //     await updatePoints(user.getPoints());
  //   };

  //   initializeUser();
  // }, []);

  useEffect(() => {
    setTimeout(async () => {
      navigation.push('/home');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} />
      <Image source={require('../assets/gifs/loading.gif')} />
      <Text>Lade...</Text>
    </View>
  );
};

export default WelcomeScreen;
