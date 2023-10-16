import "expo-router/entry";
import { View, Text, Pressable, Button, StyleSheet } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import * as Notifications from "expo-notifications";

const Appointment = () => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  const router = useRouter();

  setAppointment = async () => {
    //we need to save the trainingstype and the dateTime. Probably we can jump to it?
    //DemoAppointment in 3 seconds
    await schedulePushNotification();
    console.log("Appointment set");
  };

  async function schedulePushNotification() {
    // const trigger = new Date(Date.now() + 60 * 60 * 1000);
    // trigger.setMinutes(0);
    // trigger.setSeconds(0);

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
      <Link href={"/"} asChild>
        <Pressable style={styles.button} onPress={setAppointment}>
          <Text style={styles.buttonFont}>Bestätigen</Text>
        </Pressable>
      </Link>
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
  text2: {
    fontSize: 12,
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

export default Appointment;
