import { View, Text, Button } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Stack } from 'expo-router/stack';

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

      <Stack.Screen name="tabs" options={{ headerShown: false }} />
    </Stack>
  );
}
