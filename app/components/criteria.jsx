import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Link } from 'expo-router';
import { getData, removeData, saveData } from '../services/storage';
import CheckBox from 'expo-checkbox';
import styles from './StyleSheet';
import { useIsFocused } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const criteriaScreen = () => {
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
      <ScrollView style={{ padding: 5 }}>
        <Text style={styles.text}>Ich habe keine</Text>
        {myCheckBox2((text = 'frischen Verletzungen'))}
        {myCheckBox2((text = 'Knochenbrücke'))}
        {myCheckBox2((text = 'Wunden bzw. starke Hautreizungen'))}
        {myCheckBox2((text = 'Haut Tumor oder Metastasierungen'))}
        <Text style={styles.text}>
          im Nacken-, Schulter/Arm oder Rückenbereich.
        </Text>
        <Text style={styles.text}>Es liegt keine</Text>
        {myCheckBox2((text = 'Schwangerschaft ab dem 6. Monat'))}
        {myCheckBox2(
          (text =
            'Neurologische Erkrankung welche auf mechanische Einwirkung reagieren (z.B. Epilepsie, Schwindel)')
        )}
        {myCheckBox2(
          (text =
            'Sonstige med. Gegebenheit welche gegen die Verwendung von TensionTerminator (z.B. Blutgerinnungsstörung) spricht')
        )}
        <Text style={styles.text}>vor.</Text>
        <View style={styles.bottom}>
          <Link href={'/where'} asChild>
            <Pressable onPress={changeFirstTime} style={styles.button}>
              <Text style={styles.buttonText}>Bestätigen</Text>
            </Pressable>
          </Link>
        </View>
        {/* <View>{skipCriteria}</View> */}
      </ScrollView>
    </View>
  );
};

export default criteriaScreen;