import 'expo-router/entry';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Link, useRouter } from 'expo-router';
import * as Notifications from 'expo-notifications';
import {Button} from '@rneui/themed';
import styles from './components/StyleSheet';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Appointment = () => {
  const [ourFinalStatus, setFinalStatus] = useState(null);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  const router = useRouter();

  //ToDO: Check Permissions to send Notifications
  let getPermissions = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    console.log('getPermissions: ' + status);
    if (status === 'granted') {
      return true;
    } else {
      return false;
    }
  };

  let getPermissionAndSchedule = async () => {
    //Creating a channel for the notifications
    console.log('Setting Channel');

    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('Trainings', {
        name: 'Trainings',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    console.log('Setting Channel finished');
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    if (true) {
      // const { status: existingStatus } =
      //   await Notifications.getPermissionsAsync();
      // let finalStatus = existingStatus;
      // if (existingStatus !== "granted") {
      //   const { status } = await Notifications.requestPermissionsAsync();
      //   finalStatus = status;
      // }
      const { status } = await Notifications.requestPermissionsAsync();

      let finalStatus = status;
      if (finalStatus !== 'denied') {
        return;
      }
      if (finalStatus !== 'granted') {
        alert('Final Status not granted\nStatus: ' + finalStatus);
        return;
      }
    } else {
      alert('Must use physical device for Push Notifications');
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
    setDate(new Date());
  }, []);

  let setAppointment = async () => {
    //we need to save the trainingstype and the dateTime. Probably we can jump to it?
    //DemoAppointment in 3 seconds
    console.log('Setting Appointment');
    const status = await getPermissions();
    if (status) {
      await schedulePushNotification();
      console.log('Appointment set');
    } else {
      Alert.alert(
        'Pushbenachrichtigung',
        'Wir benötigen deine Erlaubnis um dich an dein Training zu erinnern.\n\n Möchtest du die Erlaubnis erteilen?',
        [
          // {
          //     text: 'Nochmal fragen',
          //     onPress: () => {
          //         saveData('pushPermission', 'askMeLater');
          //         console.log('Ask me later pressed');
          //     },
          // },
          {
            text: 'Nein',
            onPress: () => {
              // saveData('pushPermission', false);
              router.push('home');
              console.log('Cancel Pressed');
            },
            style: 'cancel',
            isPreferred: true,
          },
          {
            text: 'Ja',
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
    console.log('Scheduling Push Notification');
    let seconds = Math.round(
      date.getTime() / 1000 - new Date().getTime() / 1000
    );
    console.log('Seconds: ' + seconds);
    let secondstoEvent = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Trainingserinnerung',
        body: 'Hey, es ist zeit für dein Training!',
        data: { data: 'TrainingsType' },
      },

      trigger: { seconds: seconds, channelId: 'Trainings' },
    });
    router.push('home');
  }

  //DateTimePickerFunctions
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={styles.container}>
      {/*<Text style={styles.header}>Termin planen</Text>*/}
      <Text
        style={[
          styles.text,
          {
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
          },
        ]}
      >
        {'\n'}
        Übung macht den Meister und bringt nachweißlich Verbesserung.
      </Text>
      <Text style={styles.text}>
        Sollen wir dich an ein weiteres Training erinnern?
      </Text>

      <View style={{ paddingTop: 25, paddingBottom: 25 }}>
        <Text style={styles.text}>
          {date.toLocaleDateString()} um {date.toLocaleTimeString()}
        </Text>
      </View>

      <View style={styles.section}>
        <Button
            title="Datum ändern"
            onPress={showDatepicker}
            buttonStyle={styles.buttonSmall}
            titleStyle={styles.buttonTextSmall}
            icon={<Icon name="calendar" size={20} color="#fff" />}
        />
        <Button
            title="Uhrzeit ändern"
            onPress={showTimepicker}
            buttonStyle={styles.buttonSmall}
            titleStyle={styles.buttonTextSmall}
            icon={<Icon name="clock" size={20} color="#fff" />}
        />
{/*        <Button
          color="#10069f"
          onPress={showDatepicker}
          title="Datum ändern"
        ></Button>
        <Text> </Text>
        <Button
          color="#10069f"
          onPress={showTimepicker}
          title="Uhrzeit ändern"
        ></Button>*/}
      </View>
      {show && (
        <DateTimePicker
          value={date}
          minimumDate={new Date()}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
      <View style={styles.bottom}>
      <Button
          title="Bestätigen"
          onPress={setAppointment}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
      />
    </View>
    </View>
  );
};

export default Appointment;
