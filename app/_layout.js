import { View, Text, Button } from 'react-native';
import React from 'react';
import {
  NavigationContainer,
  Stack,
  Screen,
  useRouter,
  Slot,
} from 'expo-router';

const StackLayout = () => {
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
        name="modal"
        options={{
          presentation: 'modal',
          headerRight: () => (
            <Button
              title="close Modal"
              onPress={() => {
                router.back();
              }}
            />
          ),
        }}
      />
      <Stack.Screen name="tabs" options={{ headerShown: false }} />
    </Stack>
  );
};

export default StackLayout;
