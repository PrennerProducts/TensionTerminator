import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRouter, Tabs } from 'expo-router';
import { Stack } from 'expo-router/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Layout() {
  const router = useRouter();

  const goToProfile = () => {
    // Funktion zum Navigieren zu den Profileinstellungen
    router.push('tabs/profileScreen');
  };

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#10069f',
          alignItems: 'center',
          justifyContent: 'center',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      {/* ------------------------------------------------------------------------------------- */}
      {/*  root App FOLDER  */}
      {/* ------------------------------------------------------------------------------------- */}

      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Tension Terminator',

          headerShown: true,
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity onPress={goToProfile}>
              {/* Alternativ ein Bild nutzen: */}
              <Image
                source={require('../assets/images/avatar.png')}
                style={{ width: 40, height: 40, borderRadius: 50, margin: 15 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="QRScan"
        options={{
          headerTitle: 'QR-Code scannen',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="training"
        options={{
          headerTitle: 'Training',
          headerShown: true,
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity onPress={goToProfile}>
              {/* <Icon name="person-circle" size={30} color="#fff" /> */}
              {/* Alternativ ein Bild nutzen: */}
              <Image
                source={require('../assets/images/avatar.png')}
                style={{ width: 40, height: 40, borderRadius: 50, margin: 15 }}
              />
            </TouchableOpacity>
          ),
        }}
      />

      {/* ------------------------------------------------------------------------------------- */}
      {/*  FOLDER components */}
      {/* ------------------------------------------------------------------------------------- */}
      <Stack.Screen
        name="components/appointment"
        options={{
          headerTitle: 'appointment',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="components/criteria"
        options={{
          headerTitle: 'Ausschlusskriterien',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="components/explanationText"
        options={{
          headerTitle: 'Erklärung lesen',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="components/explanationVideo"
        options={{
          headerTitle: 'Erklärvideo',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="components/gratulation"
        options={{
          headerTitle: 'Gratulation',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="components/how"
        options={{
          headerTitle: 'Wie tut es weh?',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="components/intensityAfter"
        options={{
          headerTitle: 'Wie stark tut es weh? NACHHER',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="components/intensityBefore"
        options={{
          headerTitle: 'Wie stark tut es weh? VORHER',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="components/where"
        options={{
          headerTitle: 'Wo tut es weh?',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />

      {/* ------------------------------------------------------------------------------------- */}
      {/*  FOLDER evaluationComponents */}
      {/* ------------------------------------------------------------------------------------- */}
      <Stack.Screen
        name="evaluationComponents/evaluationAfter"
        options={{
          headerTitle: 'Evaluierungsübung NACHHER',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="evaluationComponents/evaluationBefore"
        options={{
          headerTitle: 'Evaluierungsübung VORHER',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="evaluationComponents/evaluationRoll"
        options={{
          headerTitle: 'Evaluierungsübung Roll',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="evaluationComponents/evaluationYaw"
        options={{
          headerTitle: 'Evaluierungsübung YAW',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="evaluationComponents/evaluationYR"
        options={{
          headerTitle: 'Evaluierungsübung',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="evaluationComponents/evaluationControl"
        options={{
          headerTitle: 'Kontrolle',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="evaluationComponents/resultEvaluation"
        options={{
          headerTitle: 'Ergebnis',
          headerShown: true,
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity onPress={goToProfile}>
              {/* <Icon name="person-circle" size={30} color="#fff" /> */}
              {/* Alternativ ein Bild nutzen: */}
              <Image
                source={require('../assets/images/avatar.png')}
                style={{ width: 40, height: 40, borderRadius: 50, margin: 15 }}
              />
            </TouchableOpacity>
          ),
        }}
      />

      {/* ------------------------------------------------------------------------------------- */}
      {/*  FOLDER services */}
      {/* ------------------------------------------------------------------------------------- */}

      <Stack.Screen
        name="services/dataTransfer"
        options={{
          headerTitle: 'Daten übermitteln',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />

      <Stack.Screen name="tabs" options={{ headerShown: false }} />
    </Stack>
  );
}
