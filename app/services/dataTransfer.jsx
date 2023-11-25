import 'expo-router/entry';
import { View, Text  } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';
import styles from '../components/StyleSheet';
import {Button} from "@rneui/themed";


const DataTransfer = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daten übermitteln</Text>
      <View style={styles.bottom}>
          <Button
              title="Bestätigen"
              onPress={() => {router.push({ pathname:'./gratulation'})}}
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
          />
      </View>
    </View>
  );
};

export default DataTransfer;
