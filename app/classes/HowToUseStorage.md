# Just import the class u want to get data e.g. userdata and create a new Object. The constructor gets the current saved data or sets default values

# Use this as index.js to experiment:

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

# u can load functions from the storage but u dont need to because everything is handelt in the class

import {
getUserData,
setUserData,
initUserData,
resetAllData,
} from "./services/storage";

# just import the class u need. Here we import userdata

import UserData from "./classes/userData";

# create a new class and save it into a variable, the constructor loads the current data directly into the class

const user = new UserData();

const LoginPage = () => {
const [constMyUserName, constSetMyUserName] = React.useState("");
const router = useRouter();

useEffect(() => {
constSetMyUserName(user.getUserName());
}, []);

const handlePress = () => {
router.push("evaluationComponents");
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
{/_ <Text>myUserData: {this.state.myUserData.userName}</Text> _/}

      <TextInput
        onChangeText={onChangeText}
        style={styles.input}
        value={constMyUserName}
      />

      <Button
        title="Set Name"
        onPress={() => (
          console.log(user.toString()),

# We change the username here

          user.setUserName(constMyUserName),
          console.log(user.toString()),

# and save the changed class to the storage

          user.save()
        )}
      ></Button>

      <Button
        title="Load it"
        onPress={async () => (
          console.log(user.toString()),
          console.log("Begin Load"),

# here we get the object in the storage and overwrite the current object

          user.load(),
          console.log("Finished Load"),
          console.log(user.toString()),
          constSetMyUserName(user.getUserName())
        )}
      ></Button>
      <Button
      title = "DELETE DATA"
      onPress={async () =>
        resetAllData()}></Button>
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

\*/}
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
