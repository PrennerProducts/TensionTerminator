import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Link } from "expo-router";
import { getData, removeData, saveData } from "./services/storage";
import CheckBox from "expo-checkbox";

import { useIsFocused } from "@react-navigation/native";

const criteriaScreen = () => {
  const navigation = useNavigation();
  const [firstTime, setFirstTime] = React.useState(true);
  const isFocused = useIsFocused();

  //CheckBoxes
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

  //Function to load our FirstTime Data. This allows the user to skip this Screen
  const loadData = async () => {
    const firstTime = await getData("firstTime");
    console.log("firstTime: ", firstTime);
    setFirstTime(firstTime);
  };

  //Use of useEffect to get our FocusHandler and to reload Data on Change of Navigation and Focus
  React.useEffect(() => {
    const focusHandler = navigation.addListener("focus", () => {
      loadData();
    });
    return focusHandler;
  }, [navigation, isFocused]);

  const changeFirstTime = async () => {
    await saveData("firstTime", false);
    setFirstTime(false);
  };

  const skip = async () => {
    // for testing purpose --> clean up firstTime Data
    //removeData("firstTime");
  };

  const skipCriteria =
    firstTime === false ? (
      <View style={styles.buttonBottom}>
        <Link href={"/where"} asChild>
          <Pressable style={styles.button} onPress={skip}>
            <Text style={styles.buttonFont}>Überspringen</Text>
          </Pressable>
        </Link>
      </View>
    ) : null;

  const myCheckBox2 = (props) => (
    <View style={styles.section}>
      <CheckBox
        disabled={false}
        value={true}
        style={styles.checkbox}
        color="red"
      />
      <Text style={styles.paragraph}>{props}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ausschlusskriterien</Text>
      <Text style={styles.text}>
        Bitte bestätigen Sie, dass Sie keine der folgenden Ausschlusskriterien
        erfüllen:
      </Text>

      {myCheckBox2((text = "Ich hatte einen Bandscheibenvorfall."))}
      {myCheckBox2((text = "Ich hatte eine Operation an der Schulter."))}
      {myCheckBox2((text = "Ich habe..."))}
      {myCheckBox2((text = "Ich hatte/habe...."))}
      {myCheckBox2((text = "Ich bin knorke."))}

      <View>
        <View>
          <Link href={"/where"} asChild>
            <Pressable onPress={changeFirstTime} style={styles.button}>
              <Text style={styles.buttonFont}>Bestätigen</Text>
            </Pressable>
          </Link>
        </View>
        <View>{skipCriteria}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#10069F",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#10069F",
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
  },
  buttonFont: {
    color: "white",
  },
  buttonBottom: {
    marginTop: -30,
  },
  text: {
    fontSize: 16,
    marginVertical: 20,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    margin: 8,
    color: "#111111",
  },
});

export default criteriaScreen;
