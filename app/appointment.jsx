import "expo-router/entry";
import { View, Text, Pressable, Button, StyleSheet, Alert } from "react-native";
import React, { useEffect } from "react";
import { Link, useRouter } from "expo-router";
import * as Notifications from "expo-notifications";

import styles from "./components/StyleSheet";

const Appointment = () => {
  const [OurfinalStatus, setFinalStatus] = React.useState(null);

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  const router = useRouter();

  //ToDO: Check Permissions to send Notifications
  getPermissions = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    console.log("getPermissions: " + status);
    if (status === "granted") {
      return true;
    } else {
      return false;
    }
  };

  getPermissionAndSchedule = async () => {
    //Creating a channel for the notifications
    console.log("Setting Channel");

    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("Trainings", {
        name: "Trainings",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    console.log("Setting Channel finished");
    // if (Platform.OS === "android") {
    //   await Notifications.setNotificationChannelAsync("default", {
    //     name: "default",
    //     importance: Notifications.AndroidImportance.MAX,
    //     vibrationPattern: [0, 250, 250, 250],
    //     lightColor: "#FF231F7C",
    //   });
    // }

    if (true) {
      // const { status: existingStatus } =
      //   await Notifications.getPermissionsAsync();
      // let finalStatus = existingStatus;
      // if (existingStatus !== "granted") {
      //   const { status } = await Notifications.requestPermissionsAsync();
      //   finalStatus = status;
      // }
      const { status } = await Notifications.requestPermissionsAsync();

      finalStatus = status;
      if (finalStatus !== "denied") {
        return;
      }
      if (finalStatus !== "granted") {
        alert("Final Status not granted\nStatus: " + finalStatus);
        return;
      }
    } else {
      alert("Must use physical device for Push Notifications");
    }

    // const { status } = await Notifications.requestPermissionsAsync();
    // console.log("getPermissionAndSchedule: " + status);
    // if (status === "granted") {
    //   await schedulePushNotification();
    //   return true;
    // } else {
    //   return false;
    // }
  };

  useEffect(() => {
    getPermissions();
  }, []);

  setAppointment = async () => {
    //we need to save the trainingstype and the dateTime. Probably we can jump to it?
    //DemoAppointment in 3 seconds
    const status = await getPermissions();
    if (status) {
      await schedulePushNotification();
      console.log("Appointment set");
    } else {
      Alert.alert(
        "Pushbenachrichtigung",
        "Wir benötigen deine Erlaubnis um dich an dein Training zu erinnern.\n\n Möchtest du die Erlaubnis erteilen?",
        [
          // {
          //     text: 'Nochmal fragen',
          //     onPress: () => {
          //         saveData('pushPermission', 'askMeLater');
          //         console.log('Ask me later pressed');
          //     },
          // },
          {
            text: "Nein",
            onPress: () => {
              // saveData('pushPermission', false);
              router.push("/");
              console.log("Cancel Pressed");
            },
            style: "cancel",
            isPreferred: true,
          },
          {
            text: "Ja",
            onPress: async () => {
              // saveData('pushPermission', true);
              await getPermissionAndSchedule();
            },
          },
        ]
      );
    }
  };

  async function schedulePushNotification() {
    // await addChannel();

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Trainingserinnerung",
        body: "Hey, es ist zeit für dein Training!",
        data: { data: "TrainingsType" },
      },
      trigger: { seconds: 3, channelId: "Trainings" },
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Termin planen</Text>
      <Text
        style={[
          styles.text,
          {
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
          },
        ]}
      >
        Übung macht den Meister und bringt nachweißlich Verbesserung.
      </Text>
      <Text style={styles.text}>
        Sollen wir dich an ein weiteres Training erinnern?
      </Text>
      <View style={styles.section}>
        <Text style={styles.text2}>Datum: </Text>
        <Text style={styles.text2}>01.01.2021</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.text2}>Uhrzeit: </Text>
        <Text style={styles.text2}>10:00</Text>
      </View>
      {/* <Link href={"/"} asChild> */}
      <Pressable style={[styles.button]} onPress={setAppointment}>
        <Text style={styles.buttonText}>Bestätigen</Text>
      </Pressable>
      {/* </Link> */}
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginVertical: 20,
//     color: "#10069F",
//   },
//   button: {
//     alignItems: "center",
//     backgroundColor: "#10069F",
//     borderRadius: 10,
//     padding: 10,
//     marginVertical: 20,
//   },
//   buttonFont: {
//     color: "white",
//   },
//   buttonBottom: {
//     marginTop: -30,
//   },
//   text: {
//     fontSize: 16,
//     marginVertical: 20,
//   },
//   text2: {
//     fontSize: 12,
//   },
//   section: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   checkbox: {
//     margin: 8,
//     color: "#111111",
//   },
// });

export default Appointment;
