import "expo-router/entry";
import {
  View,
  Text,
  Pressable,
  Button,
  TextInput,
  StyleSheet,
} from "react-native";

import React, { useEffect } from "react";
import { Link, useRouter } from "expo-router";
import {
  getUserData,
  setUserData,
  initUserData,
  resetAllData,
} from "./services/storage";
import UserData from "./classes/userData";

const user = new UserData();

const LoginPage = () => {
  const [constMyUserName, constSetMyUserName] = React.useState("");
  const router = useRouter();

  useEffect(() => {
    constSetMyUserName(user.getUserName());
  }, []);

  const handlePress = () => {
    router.replace("tabs");
  };

  onChangeText = (text) => {
    constSetMyUserName(text);
  };

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ top: 0 }}>
        -------------- TENSION TERMINATOR ------------------
      </Text>
      <Text>Hello {constMyUserName}</Text>
      <Link href={"/QRScan"} asChild>
        <Pressable>
          <Text>App Starten</Text>
        </Pressable>
      </Link>
      {/* <Text>myUserData: {this.state.myUserData.userName}</Text> */}

      <TextInput
        onChangeText={onChangeText}
        style={styles.input}
        value={constMyUserName}
      />

      <Button
        title="Set Name"
        onPress={() => (
          console.log(user.toString()),
          user.setUserName(constMyUserName),
          console.log(user.toString()),
          user.save()
        )}
      ></Button>

      <Button
        title="Load it"
        onPress={async () => (
          console.log(user.toString()),
          console.log("Begin Load"),
          user.load(),
          console.log("Finished Load"),
          console.log(user.toString()),
          constSetMyUserName(user.getUserName())
        )}
      ></Button>
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

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginPage;
