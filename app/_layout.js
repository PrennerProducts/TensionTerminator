import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useRouter, Tabs } from 'expo-router';
import { Stack } from 'expo-router/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

export default function Layout() {
  const router = useRouter();

  const goToProfile = () => {
    // Funktion zum Navigieren zu den Profileinstellungen
    router.push('profile/profileScreen');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="index" component={index} />
      </Stack.Navigator>
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
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    margin: 15,
                  }}
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
        {/* ------------------------------------------------------------------------------------- */}
        {/* HIDE EVERITING IN TABS FOR NOW */}
        {/* ------------------------------------------------------------------------------------- */}
        <Tabs.Screen
          // Name of the route to hide.
          name="[...unmatched]"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />

        <Tabs.Screen
          // Name of the route to hide.
          name="QRScan"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="training"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="trainingStart"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />

        {/* ------------------------------------------------------------------------------------- */}
        {/* HIDE FOLDER components */}
        {/* ------------------------------------------------------------------------------------- */}
        <Tabs.Screen
          // Name of the route to hide.
          name="components/appointment"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="components/criteria"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="components/explanationText"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="components/explanationVideo"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="components/gratulation"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="components/how"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="components/intensityAfter"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="components/intensityBefore"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="components/StyleSheet"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="components/where"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
        {/* ------------------------------------------------------------------------------------- */}
        {/* HIDE FOLDER evaluationComponents */}
        {/* ------------------------------------------------------------------------------------- */}
        <Tabs.Screen
          // Name of the route to hide.
          name="evaluationComponents/evaluationAfter"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="evaluationComponents/evaluationBefore"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="evaluationComponents/evaluationRoll"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="evaluationComponents/evaluationYaw"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
        <Tabs.Screen
          // Name of the route to hide.
          name="evaluationComponents/resultEvaluation"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
        {/* ------------------------------------------------------------------------------------- */}
        {/* HIDE FOLDER profile */}
        {/* ------------------------------------------------------------------------------------- */}
        <Tabs.Screen
          // Name of the route to hide.
          name="profile/profileScreen"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
        {/* ------------------------------------------------------------------------------------- */}
        {/* HIDE FOLDER services*/}
        {/* ------------------------------------------------------------------------------------- */}
        <Tabs.Screen
          // Name of the route to hide.
          name="services/dataTransfer"
          options={{
            // This tab will no longer show up in the tab bar.
            href: null,
          }}
        />
      </Tabs>
    </NavigationContainer>
  );
}
