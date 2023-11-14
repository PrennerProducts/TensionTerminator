import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter, Tabs } from 'expo-router';
import { Stack } from 'expo-router/stack';

import Icon from 'react-native-vector-icons/FontAwesome';
import UserData from './classes/userData';
import { avatarList } from './config/avatarConfig';
import { useFocusEffect } from '@react-navigation/native';
import { ProfileImageProvider } from './components/ProfileImageContext';
import myheaderRight from './components/headerRight';
import { useProfileImage } from './components/ProfileImageContext';

export default function Layout() {
  const router = useRouter();
  const user = new UserData();

  useEffect(() => {
    const initializeUser = async () => {
      await user.initialize();
      if (user.getprofilepicture() === null) {
        user.setprofilepicture(0);
      }
    };
    initializeUser();
  }, []);

  const goToProfile = () => {
    router.push('/profileScreen');
  };

  return (
    <ProfileImageProvider>
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
          options={({ navigation }) => ({
            headerTitle: 'Tension Terminator',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: myheaderRight,
          })}
        />
        <Stack.Screen
          name="QRScan"
          options={{
            headerTitle: 'QR-Code scannen',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: myheaderRight,
          }}
        />
        <Stack.Screen
          name="training"
          options={{
            headerTitle: 'Training',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: myheaderRight,
          }}
        />

        {/* ------------------------------------------------------------------------------------- */}
        {/*  FOLDER components */}
        {/* ------------------------------------------------------------------------------------- */}
        <Stack.Screen
          name="appointment"
          options={{
            headerTitle: 'appointment',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: myheaderRight,
          }}
        />
        <Stack.Screen
          name="criteria"
          options={{
            headerTitle: 'Ausschlusskriterien',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: myheaderRight,
          }}
        />
        <Stack.Screen
          name="explanationText"
          options={{
            headerTitle: 'Erklärung lesen',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: myheaderRight,
          }}
        />
        <Stack.Screen
          name="explanationVideo"
          options={{
            headerTitle: 'Erklärvideo',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: myheaderRight,
          }}
        />
        <Stack.Screen
          name="gratulation"
          options={{
            headerTitle: 'Gratulation',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: myheaderRight,
          }}
        />
        <Stack.Screen
          name="components/painHow"
          options={{
            headerTitle: 'Wie tut es weh?',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: myheaderRight,
          }}
        />
        <Stack.Screen
          name="components/intensityAfter"
          options={{
            headerTitle: 'Wie stark tut es weh?',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: myheaderRight,
          }}
        />
        <Stack.Screen
          name="components/intensityBefore"
          options={{
            headerTitle: 'Wie stark tut es weh?',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: myheaderRight,
          }}
        />
        <Stack.Screen
          name="components/painWhere"
          options={{
            headerTitle: 'Wo tut es weh?',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: myheaderRight,
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
            headerRight: myheaderRight,
          }}
        />
        <Stack.Screen
          name="evaluationComponents/EvaluationScreen"
          options={{
            headerTitle: 'EvaluationScreen',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: myheaderRight,
          }}
        />
        <Stack.Screen
          name="evaluationComponents/evaluationBefore"
          options={{
            headerTitle: 'Evaluierungsübung VORHER',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: myheaderRight,
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
            headerRight: myheaderRight,
          }}
        />
        <Stack.Screen
          name="evaluationComponents/resultEvaluation"
          options={{
            headerTitle: 'Ergebnis',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: myheaderRight,
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

        {/* <Stack.Screen name="tabs" options={{ headerShown: false }} /> */}
      </Stack>
    </ProfileImageProvider>
  );
}
