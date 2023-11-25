import {  TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import {useFonts} from 'expo-font';
import {useRouter, Tabs, SplashScreen} from 'expo-router';
import { Stack } from 'expo-router/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserData from './classes/userData';
import { avatarList } from './config/avatarConfig';
import { useFocusEffect } from '@react-navigation/native';
import { ProfileImageProvider } from './components/ProfileImageContext';
import myheaderRight from './components/headerRight';
import { useProfileImage } from './components/ProfileImageContext';
import { UserContextProvider } from './components/userContextProvider';
import headerRight from './components/headerRight';
import {NativeBaseProvider} from "native-base";


//Prevent splash screen from autohiding before asset loading is completed
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
//        'Pano B': require('../assets/fonts/Pano Bold.otf'),
        'Loew Next R': require('../assets/fonts/LoewNext-Regular-BF63fd638aa2303.otf'),
        'Loew Next B': require('../assets/fonts/LoewNext-Bold-BF63fd638abb9de.otf')
    });

    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return <Layout />;
}

function Layout() {
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
    router.push("/profileScreen");
  };

  const goToHome = () => {
    router.replace('/home');
  };

  const goToGratulation = () => {
    router.replace('/gratulation');
  };

  return (

    <UserContextProvider>
      <ProfileImageProvider>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: "#10069f",
              alignItems: "center",
              justifyContent: "center",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
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
              headerTitle: "Tension Terminator",
              headerShown: true,
              headerTitleAlign: "center",
            })}
          />
          <Stack.Screen
            name="home"
            options={({ navigation }) => ({
              headerTitle: "Tension Terminator",
              headerShown: true,
              headerTitleAlign: "center",
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
              headerTitle: "Profil",
              headerShown: true,
              headerTitleAlign: "center",
              // headerRight: () => (
              //   <TouchableOpacity onPress={goToHome}>
              //     <Icon
              //       name="check"
              //       size={35}
              //       color="#fff"
              //       style={{ marginRight: 15 }}
              //     />
              //   </TouchableOpacity>
              // ),
            }}
          />
          <Stack.Screen
            name="training"
            options={{
              headerTitle: "Training",
              headerShown: true,
              headerTitleAlign: "center",
              headerRight: myheaderRight,
            }}
          />

          <Stack.Screen
            name="components/statistics"
            options={{
              headerTitle: "Meine Statistiken",
              headerShown: true,
              headerTitleAlign: "center",
              headerRight: myheaderRight,
            }}
          />

          {/* ------------------------------------------------------------------------------------- */}
          {/*  FOLDER components */}
          {/* ------------------------------------------------------------------------------------- */}
          <Stack.Screen
            name="appointment"
            options={{
              headerTitle: "appointment",
              headerShown: true,
              headerTitleAlign: "center",
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
              headerTitle: "Ausschlusskriterien",
              headerShown: true,
              headerTitleAlign: "center",
              // headerRight: myheaderRight,
            }}
          />
          <Stack.Screen
            name="trainingStart"
            options={{
              headerTitle: "Anleitung",
              headerShown: true,
              headerTitleAlign: "center",
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
              headerTitle: "Gratulation",
              headerShown: true,
              headerTitleAlign: "center",
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
              headerTitle: "Wie tut es weh?",
              headerShown: true,
              headerTitleAlign: "center",
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
              headerTitle: "Wie stark tut es weh?",
              headerShown: true,
              headerTitleAlign: "center",
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
              headerTitle: "Wie stark tut es weh?",
              headerShown: true,
              headerTitleAlign: "center",
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
              headerTitle: "Wo tut es weh?",
              headerShown: true,
              headerTitleAlign: "center",
              headerRight: myheaderRight,
            }}
          />

          {/* ------------------------------------------------------------------------------------- */}
          {/*  FOLDER evaluationComponents */}
          {/* ------------------------------------------------------------------------------------- */}
          <Stack.Screen
            name="evaluationComponents/evaluationAfter"
            options={{
              headerTitle: "Evaluierungsübung NACHHER",
              headerShown: true,
              headerTitleAlign: "center",
              headerRight: myheaderRight,
            }}
          />
          <Stack.Screen
            name="evaluationComponents/evaluationScreen"
            options={{
              headerTitle: "EvaluationScreen",
              headerShown: true,
              headerTitleAlign: "center",
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
              headerTitle: "Evaluierungsübung VORHER",
              headerShown: true,
              headerTitleAlign: "center",
              headerRight: myheaderRight,
            }}
          />
          <Stack.Screen
            name="evaluationComponents/evaluationYR"
            options={{
              headerTitle: "Evaluierungsübung",
              headerShown: true,
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="evaluationComponents/evaluationControl"
            options={{
              headerTitle: "Kontrolle",
              headerShown: true,
              headerTitleAlign: "center",
              headerRight: myheaderRight,
            }}
          />
          <Stack.Screen
            name="evaluationComponents/resultEvaluation"
            options={{
              headerTitle: "Ergebnis",
              headerShown: true,
              headerTitleAlign: "center",
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

          {/* ------------------------------------------------------------------------------------- */}
          {/*  FOLDER services */}
          {/* ------------------------------------------------------------------------------------- */}

          <Stack.Screen
            name="services/dataTransfer"
            options={{
              headerTitle: "Daten übermitteln",
              headerShown: true,
              headerTitleAlign: "center",
            }}
          />

          {/* <Stack.Screen name="tabs" options={{ headerShown: false }} /> */}
        </Stack>
      </ProfileImageProvider>
    </UserContextProvider>
  );
}
