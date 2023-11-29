import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter, Tabs } from 'expo-router';
import { Stack } from 'expo-router/stack';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import UserData from './classes/userData';
import { avatarList } from './config/avatarConfig';
import { useFocusEffect } from '@react-navigation/native';
import myheaderRight from './components/headerRight';
import { UserContextProvider } from './services/userContextProvider';
import headerRight from './components/headerRight';
import { evaluationData } from './evaluationComponents/evaluationData';

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

  const goToHome = () => {
    router.replace('/home');
  };

  const goToGratulation = () => {
    console.log(evaluationData.isTraining);
    if (evaluationData.isTraining == 1) router.push('/gratulation');
    else router.push('/home');
  };

  return (
    <UserContextProvider>
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
          //animationTypeForReplace: 'push', // oder 'pop'
          animationEnabled: false,
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
          })}
        />
        <Stack.Screen
          name="home"
          options={({ navigation }) => ({
            headerTitle: 'Tension Terminator',
            headerShown: true,
            headerTitleAlign: 'center',
            headerLeft: () => <Text />,
            // headerLeft: () => (
            //   <TouchableOpacity>
            //     <Icon
            //       name="comment-o"
            //       size={35}
            //       color="#fff"
            //       style={{ marginRight: 15 }}
            //     />
            //   </TouchableOpacity>
            // ),
            //headerRight: myheaderRight,
            headerRight: () => (
              <TouchableOpacity onPress={goToProfile}>
                <Icon
                  name="cog"
                  size={35}
                  color="#fff"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="profileScreen"
          options={{
            headerTitle: 'Profil',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity onPress={goToHome}>
                <Icon
                  name="home"
                  size={35}
                  color="#fff"
                  style={{ marginRight: 15 }}
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
              <TouchableOpacity onPress={goToHome}>
                <Icon
                  name="home"
                  size={35}
                  color="#fff"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen
          name="components/barcode"
          options={{
            headerTitle: 'Barcode Scanner',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity onPress={goToHome}>
                <Icon
                  name="home"
                  size={35}
                  color="#fff"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />

        {/* ------------------------------------------------------------------------------------- */}
        {/*  FOLDER components */}
        {/* ------------------------------------------------------------------------------------- */}
        <Stack.Screen
          name="appointment"
          options={{
            headerTitle: 'Termin planen',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity onPress={goToHome}>
                <Icon
                  name="home"
                  size={35}
                  color="#fff"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="criteria"
          options={{
            headerTitle: 'Ausschlusskriterien',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity onPress={goToHome}>
                <Icon
                  name="home"
                  size={35}
                  color="#fff"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen
          name="gratulation"
          options={{
              headerTitle: () => (
                      <Icon name="party-popper" size={35} color="#fff" style={{ marginRight: 15 }} />
              ),
            headerShown: true,
            headerTitleAlign: 'center',
            headerLeft: () => <Text />,
            headerRight: () => (
              <TouchableOpacity onPress={goToHome}>
                <Icon
                  name="home"
                  size={35}
                  color="#fff"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="components/painHow"
          options={{
            headerTitle: 'Wie tut es weh?',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity onPress={goToHome}>
                <Icon
                  name="home"
                  size={35}
                  color="#fff"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="components/intensityAfter"
          options={{
            headerTitle: 'Wie stark tut es weh?',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity onPress={goToHome}>
                <Icon
                  name="home"
                  size={35}
                  color="#fff"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="components/intensityBefore"
          options={{
            headerTitle: 'Wie stark tut es weh?',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity onPress={goToHome}>
                <Icon
                  name="home"
                  size={35}
                  color="#fff"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="components/painWhere"
          options={{
            headerTitle: 'Wo tut es weh?',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity onPress={goToHome}>
                <Icon
                  name="home"
                  size={35}
                  color="#fff"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
          <Stack.Screen
              name="components/statistics"
              options={{
                  headerTitle: 'Statistik',
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
            headerRight: () => (
              <TouchableOpacity onPress={goToHome}>
                <Icon
                  name="home"
                  size={35}
                  color="#fff"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="evaluationComponents/evaluationScreen"
          options={{
            headerTitle: 'Evaluierung',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity onPress={goToHome}>
                <Icon
                  name="home"
                  size={35}
                  color="#fff"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="evaluationComponents/evaluationBefore"
          options={{
            headerTitle: 'Evaluierungsübung VORHER',
            headerShown: true,
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity onPress={goToHome}>
                <Icon
                  name="home"
                  size={35}
                  color="#fff"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
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
            headerRight: () => (
              <TouchableOpacity onPress={goToHome}>
                <Icon
                  name="home"
                  size={35}
                  color="#fff"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="evaluationComponents/resultEvaluation"
          options={{
            headerTitle: 'Ergebnis',
            headerShown: true,
            headerTitleAlign: 'center',
            headerLeft: () => <Text />,
            headerRight: () => (
              <TouchableOpacity onPress={goToGratulation}>
                <Icon
                  name="check"
                  size={35}
                  color="#fff"
                  style={{ marginRight: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />
          <Stack.Screen
              name="trainingStart"
              options={{
                  headerTitle: 'Training',
                  headerShown: true,
                  headerTitleAlign: 'center',
                  headerRight: () => (
                      <TouchableOpacity onPress={goToHome}>
                          <Icon
                              name="home"
                              size={35}
                              color="#fff"
                              style={{ marginRight: 15 }}
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

        {/* <Stack.Screen name="tabs" options={{ headerShown: false }} /> */}
      </Stack>
    </UserContextProvider>
  );
}
