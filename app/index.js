import 'expo-router/entry';
import {
  View,
  Text,
  Pressable,
  Button,
  ImageBackground,
  Image,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Link, useRouter } from 'expo-router';
import styles from './components/StyleSheet';
import UserData from './classes/userData';
import { avatarList } from './config/avatarConfig';
import { ProfileImageProvider } from '../app/components/ProfileImageContext';

const LoginPage = () => {
  const router = useRouter();
  const user = new UserData();
  const [currentImageIndex, setCurrentImageIndex] = useState();

 /* useEffect(() => {
    const initializeUser = async () => {
      await user.initialize();
      // if (user.getprofilepicture() === null) {
      //   user.setprofilepicture(0);
      // }
      setCurrentImageIndex(user.getprofilepicture());
      console.log(
        'Tabs_layout liest aus dem speicher den Image index: ' +
          user.getprofilepicture()
      );
    };

    initializeUser();
  });*/

  const getProfileImage = () => {
    if (
      selectedAvatarIndex !== null &&
      selectedAvatarIndex < avatarList.length
    ) {
      return avatarList[selectedAvatarIndex];
    }
    return require('../assets/images/avatar4.png');
  };

  // const updateImageIndex = () => {
  //   setCurrentImageIndex(user.getprofilepicture());
  // };

  // useEffect(() => {
  //   user.addObserver(updateImageIndex);

  //   return () => {
  //     // Dies wird beim Aushängen der Komponente aufgerufen
  //     user.removeObserver(updateImageIndex);
  //   };
  // }, []);

  const handlePress = () => {
    router.replace('components/barcode');
  };

  return (
    <ProfileImageProvider>
      <View style={styles.container}>
        {/* <Image
          source={
            currentImageIndex >= 0 &&
            currentImageIndex != null &&
            currentImageIndex < avatarList.length
              ? avatarList[currentImageIndex]
              : require('../assets/images/error.jpg')
          }
          style={{
            position: 'absolute',
            width: '90%',
            resizeMode: 'contain',
            top: 20,
          }}
        /> */}
        <View
          style={{
            position: 'absolute',
            width: '100%',
            flex: 1,
            flexDirection: 'column',
            top: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            source={require('../assets/logo.png')}
            style={{
              position: 'absolute',
              width: '50%',
              resizeMode: 'contain',
              top: 0,
            }}
          />

          <Image
            source={require('../assets/TTmodel.png')}
            style={{
              position: 'relative',
              width: '80%',
              resizeMode: 'contain',
              top: '15%',
            }}
          />
        </View>
        <View style={styles.bottom}>
          <Link href={'./QRScan'} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>App Starten</Text>
            </Pressable>
          </Link>
        </View>

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

              <Link href={"/criteria"} asChild>
        <Pressable>
          <Text>Kriterien</Text>
        </Pressable>
      </Link>

*/}
      </View>
    </ProfileImageProvider>
  );
};

export default LoginPage;
