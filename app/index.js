import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React, { useEffect } from 'react';
import {Link, useRouter} from 'expo-router';
import { getUserData, setUserData, initUserData } from "./services/storage";
import { UserData} from "./classes/userData";



const LoginPage = () => {
  const 
  useEffect(() => {

  }, []);
  const router = useRouter();

  const handlePress = () => {
    router.replace('tabs');
  };
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ top: 0 }}>
        -------------- TENSION TERMINATOR ------------------
      </Text>

          <Link href={'/QRScan'} asChild>
              <Pressable>
                  <Text>App Starten</Text>
              </Pressable>
          </Link>
          <Button title="Init" onPress = {() => initUserData()}></Button>
          <Button title="Load" onPress = {() => data = getUserData()}></Button>
          <Button title="Set Name" onPress = {() => data.name = "Paul"}></Button>
          <Button title="Show UserData" onPress = {() => console.log(JSON.stringify(data))}></Button>
          <Button title="Set" onPress = {() => setUserData(data)}></Button>


        {/*Verschiedene Varianten um ans Ziel zu kommen*/}
        {/*
        <Button title="App Starten" onPress= {() => router.push('QRscan')}>
        </Button>

        handlePress geht zu home
        <Pressable style={{ top: 0 }} onPress= {() => router.push('QRscan')}>
            <Text style={{ top: 0 }}>App Starten</Text>
        </Pressable>

        <Link href={'/QRscan'} asChild>
            <Pressable>
                <Text>App Starten</Text>
            </Pressable>
        </Link>

*/}

    </View>
  );
};

export default LoginPage;
