import { Tabs } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';

export default () => {
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
        name="home"
        options={{
          tabBarLabel: 'TrainingStart',
          headerTitle: 'Training Starten',

          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" color={color} size={size} />
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
