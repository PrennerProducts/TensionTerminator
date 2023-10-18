import "expo-router/entry";
import { View, Text, Pressable, Button } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { removeData } from "./services/storage";

const WherePain = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Wo tut es weh?</Text>

      <Link href={"/how"} asChild>
        <Pressable>
          <Text>Schulter/Nacken</Text>
        </Pressable>
      </Link>

      <Link href={"/how"} asChild>
        <Pressable>
          <Text>Mittlerer Rücken</Text>
        </Pressable>
      </Link>

      <Link href={"/how"} asChild>
        <Pressable>
          <Text>Unterer Rücken</Text>
        </Pressable>
      </Link>

      <Link href={"/how"} asChild>
        <Pressable>
          <Text>Becken/Gesaess</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default WherePain;
