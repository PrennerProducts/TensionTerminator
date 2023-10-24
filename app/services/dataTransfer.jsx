import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';
import styles from '../components/StyleSheet';

const DataTransfer = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daten übermitteln</Text>
      <View style={styles.bottom}>
        <Link href={'../components/gratulation'} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Bestätigen</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

export default DataTransfer;
