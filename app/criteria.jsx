 import {View, Text, Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {Link, useRouter} from "expo-router";
import { getData, removeData, saveData } from "./services/storage";
import CheckBox from "expo-checkbox";
import styles from "./components/StyleSheet";
import { useIsFocused } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from '@rneui/themed';

const criteriaScreen = () => {
    const router = useRouter();
  //Uncomment this to use
  // const navigation = useNavigation();
  // const [firstTime, setFirstTime] = React.useState(true);
  // const isFocused = useIsFocused();

  // //CheckBoxes
  // const [toggleCheckBox, setToggleCheckBox] = React.useState(false);

  // //Function to load our FirstTime Data. This allows the user to skip this Screen
  // const loadData = async () => {
  //   const firstTime = await getData("firstTime");
  //   console.log("firstTime: ", firstTime);
  //   setFirstTime(firstTime);
  // };

  // //Use of useEffect to get our FocusHandler and to reload Data on Change of Navigation and Focus
  // React.useEffect(() => {
  //   const focusHandler = navigation.addListener("focus", () => {
  //     loadData();
  //   });
  //   return focusHandler;
  // }, [navigation, isFocused]);

  const changeFirstTime = async () => {
      router.push("./home");
    // await saveData("firstTime", false);
    // setFirstTime(false);

  };

  // const skip = async () => {
  //   // for testing purpose --> clean up firstTime Data
  //   // removeData("firstTime");
  // };

  // const skipCriteria =
  //   firstTime === false ? (
  //     <View style={styles.buttonBottom}>
  //       <Link href={"/where"} asChild>
  //         <Pressable style={styles.button} onPress={skip}>
  //           <Text style={styles.buttonFont}>Überspringen</Text>
  //         </Pressable>
  //       </Link>
  //     </View>
  //   ) : null;

  const myCheckBox2 = (props) => (
    <View style={styles.section}>
      <CheckBox
        disabled={false}
        value={true}
        style={styles.checkbox}
        color="green"
      />
      <Text style={styles.paragraph}>{props}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Ausschlusskriterien</Text> */}
      <Text style={styles.text}>
        Bitte bestätigen Sie, dass Sie keine der folgenden Ausschlusskriterien
        erfüllen:
      </Text>

      <ScrollView style={{ padding: 5, flex: 1 }}>
        <Text style={styles.text}>
          Ich habe im Nacken-, Schulter/Arm oder Rückenbereich
        </Text>
        {myCheckBox2("keine frischen Verletzungen.")}
        {myCheckBox2("keine Knochenbrücke.")}
        {myCheckBox2("keine Wunden bzw. starke Hautreizungen.")}
        {myCheckBox2("keine Haut Tumor oder Metastasierungen.")}
        <Text style={styles.text}>Es liegt</Text>
        {myCheckBox2("keine Schwangerschaft ab dem 6. Monat vor.")}
        {myCheckBox2(
          "keine neurologische Erkrankung vor, welche auf mechanische Einwirkung reagiert (z.B. Epilepsie, Schwindel)."
        )}
        {myCheckBox2(
          "keine sonstige med. Gegebenheit vor, welche gegen die Verwendung von TensionTerminator (z.B. Blutgerinnungsstörung) spricht."
        )}
      </ScrollView>

      <View style={styles.bottom}>
          <Button
              title="Bestätigen"
                onPress={changeFirstTime}
              buttonStyle={styles.button}
                titleStyle={styles.buttonText}
                />
      </View>

      {/* <View>{skipCriteria}</View> */}
    </View>
  );
};

export default criteriaScreen;
