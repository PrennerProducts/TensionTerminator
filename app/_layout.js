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
    router.push('profile/profileScreen');
  };

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#10069F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Home',
          headerTitle: 'Home Screen',
          headerShown: true,
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={goToProfile}>
              {/* <Icon name="person-circle" size={30} color="#fff" /> */}
              {/* Alternativ ein Bild nutzen: */}
              <Image
                source={require('../assets/images/avatar.png')}
                style={{ width: 40, height: 40, borderRadius: 50, margin: 15 }}
                style={{ width: 40, height: 40, borderRadius: 50, margin: 15 }}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Tabs.Screen
        name="EvaluationScreen"
        options={{
          headerTitle: 'Create account',
          headerShown: true,
          headerRight: () => (
            <Button
              title="open Modal"
              onPress={() => {
                router.push('modal');
              }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="appointment"
        options={{
          headerTitle: 'Termin planen',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="criteria"
        options={{
          headerTitle: 'Ausschlusskriterien',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="dataTransfer"
        options={{
          headerTitle: 'Daten übermitteln',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="evaluationAfter"
        options={{
          headerTitle: 'Evaluierungsübung NACHHER',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="evaluationBefore"
        options={{
          headerTitle: 'Evaluierungsübung VORHER',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="explanationText"
        options={{
          headerTitle: 'Erklärung lesen',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="explanationVideo"
        options={{
          headerTitle: 'Erklärvideo',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="gratulation"
        options={{
          headerTitle: 'Gratulation',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="how"
        options={{
          headerTitle: 'Wie tut es weh?',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="intensityBefore"
        options={{
          headerTitle: 'Wie stark tut es weh? VORHER',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="intensityAfter"
        options={{
          headerTitle: 'Wie stark tut es weh? NACHHER',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="resultEvaluation"
        options={{
          headerTitle: 'Ergebnisanzeige Evaluierung',
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
      <Stack.Screen
        name="where"
        options={{
          headerTitle: 'Wo tut es weh?',
          headerShown: true,
          headerTitleAlign: 'center',
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

      <Stack.Screen name="tabs" options={{ headerShown: false }} />
    </Stack>
  );
}
