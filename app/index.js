import "expo-router/entry";
import { View, Text, Pressable, Button } from "react-native";
import React, { useEffect } from "react";
import { Link, useRouter } from "expo-router";
import {
  getUserData,
  setUserData,
  initUserData,
  resetAllData,
} from "./services/storage";
import UserData from "./classes/userData";

const user = new UserData("Mr. Anderson", false);

const LoginPage = () => {
  const [myUserName, setMyUserName] = React.useState("");
  const router = useRouter();

  useEffect(() => {
    setMyUserName(user.getUserName());
  }, []);

  const handlePress = () => {
    router.replace("tabs");
  };
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text style={{ top: 0 }}>
        -------------- TENSION TERMINATOR ------------------
      </Text>
      <Text>Hello {myUserName}</Text>
      <Link href={"/QRScan"} asChild>
        <Pressable>
          <Text>App Starten</Text>
        </Pressable>
      </Link>
      {/* <Text>myUserData: {this.state.myUserData.userName}</Text> */}

      <Button
        title="Set Name"
        onPress={() => (
          console.log(user.toString()),
          user.setUserName("MySecondSuperGamerTag"),
          user.setReseted(true),
          console.log(user.toString()),
          user.save()
        )}
      ></Button>

      <Button
        title="Load it"
        onPress={() => (
          console.log(user.toString()),
          console.log("Begin Load"),
          user.load(),
          console.log("Finished Load"),
          console.log(user.toString()),
          setMyUserName(user.getUserName())
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

export default LoginPage;
