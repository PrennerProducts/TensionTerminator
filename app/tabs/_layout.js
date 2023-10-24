import { FontAwesome5 } from '@expo/vector-icons';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import { Link, useRouter, Tabs } from 'expo-router';
import styles from '../components/StyleSheet';

export default () => {
  const router = useRouter();

  const goToProfile = () => {
    // Funktion zum Navigieren zu den Profileinstellungen
    router.push('tabs/profileScreen');
  };

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
      }}
    >
      <Tabs.Screen
        name="trainingStart"
        options={{
          tabBarLabel: 'TrainingStart',
          headerTitle: 'Training Starten',

          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={goToProfile}>
              {/* <Icon name="person-circle" size={30} color="#fff" /> */}
              {/* Alternativ ein Bild nutzen: */}
              <Image
                source={require('../../assets/images/avatar.png')}
                style={{ width: 40, height: 40, borderRadius: 50, margin: 15 }}
              />
            </TouchableOpacity>
          ),
        }}
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
