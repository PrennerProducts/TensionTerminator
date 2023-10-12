import { View, Text, Button } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Stack } from 'expo-router/stack';
import QRScan from "./QRScan";



export default function Layout() {
  const router = useRouter();
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
      {/* // Stackscreens können so umbenannt werden oder ausgeblendet mit
      //headerShown */}
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Login',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="register"
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
        }}
      />
      <Stack.Screen
        name="training"
        options={{
          headerTitle: 'Training',
          headerShown: true,
          headerTitleAlign: 'center',
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
