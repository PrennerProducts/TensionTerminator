import { FontAwesome5 } from '@expo/vector-icons';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Link, useRouter, Tabs } from 'expo-router';
import styles from '../components/StyleSheet';
import UserData from '../classes/userData';
import { avatarList } from '../config/avatarConfig';
import { useProfileImage } from '../components/ProfileImageContext';

export default () => {
  const router = useRouter();
  // const [currentImageIndex, setCurrentImageIndex] = useState(3);
  const user = new UserData();
  const [counter, setCounter] = useState(0);

  const { currentImageIndex } = useProfileImage(); // Verwenden des ProfileImageContext hooks
  // Hier könnten Sie jetzt currentImageIndex verwenden, um z.B. ein Profilbild anzuzeigen
  const profileImageSource =
    currentImageIndex && avatarList[currentImageIndex]
      ? avatarList[currentImageIndex]
      : require('../../assets/images/error.jpg'); // Standardbild, falls kein Index vorhanden ist

  useEffect(() => {
    const initializeUser = async () => {
      await user.initialize();
      if (user.getprofilepicture() === null) {
        user.setprofilepicture(0);
      }
      // setCurrentImageIndex(user.getprofilepicture());
      // console.log(
      //   'Tabs_layout liest aus dem speicher den Image index: ' +
      //     user.getprofilepicture()
      // );
    };

    initializeUser();
  }, []);

  useEffect(() => {
    console.log(
      'Tabs_layout Aktueller Wert von currentImageIndex:',
      currentImageIndex
    );
    console.log(
      'Tabs_layoutaktueller url string: ' + avatarList[currentImageIndex]
    );
    setCounter(counter + 1);
  }, [currentImageIndex]);

  const getProfileImage = () => {
    if (
      selectedAvatarIndex !== null &&
      selectedAvatarIndex < avatarList.length
    ) {
      return avatarList[selectedAvatarIndex];
    }
    return require('../../assets/images/avatar4.png');
  };

  const goToProfile = () => {
    // Funktion zum Navigieren zu den Profileinstellungen
    router.push('tabs/profileScreen');
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

  // const MyHeaderRight = () => {
  //   // Diese Komponente verwendet den `currentImageIndex` direkt aus dem Zustand.
  //   // So wird sie bei jeder Änderung von `currentImageIndex` neu gerendert.
  //   return (
  //     <TouchableOpacity onPress={goToProfile} key={currentImageIndex}>
  //       <Image
  //         source={
  //           currentImageIndex >= 0 &&
  //           currentImageIndex != null &&
  //           currentImageIndex < avatarList.length
  //             ? avatarList[currentImageIndex]
  //             : require('../../assets/images/avatar1.jpg')
  //         }
  //         style={{ width: 40, height: 40, borderRadius: 50, margin: 15 }}
  //       />
  //     </TouchableOpacity>
  //   );
  // };

  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#10069f',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: '#1fff',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#10069f', // Hintergrundfarbe der Tab-Leiste
          height: 55, // Höhe der Tab-Leiste
        },
        tabBarLabelStyle: {
          fontSize: 14, // Schriftgröße der Tab-Labels
        },
      }}
    >
      <Tabs.Screen
        name="trainingStart"
        options={({ navigation }) => ({
          tabBarLabel: 'TrainingStart',
          headerTitle: 'Training Starten',

          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
          // headerRight: MyHeaderRight,
          headerRight: () => (
            <TouchableOpacity onPress={goToProfile}>
              {/* <Icon name="person-circle" size={30} color="#fff" /> */}
              {/* Alternativ ein Bild nutzen: */}
              <Image
                source={profileImageSource}
                style={{ width: 40, height: 40, borderRadius: 50, margin: 15 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Tabs.Screen
        name="EvaluationScreen"
        options={{
          tabBarLabel: 'Evaluation',
          headerTitle: 'Evaluation Screen',

          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="camera" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="barcode"
        options={{
          tabBarLabel: 'Scan QR Code',
          headerTitle: 'Scan Barcode',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="qrcode" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profileScreen"
        options={{
          tabBarLabel: 'Profil',
          headerTitle: 'Profil Screen',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};
