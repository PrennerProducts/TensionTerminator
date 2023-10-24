import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';
import styles from './components/StyleSheet';


const LoginPage = () => {
  const router = useRouter();

  const handlePress = () => {
    router.replace('tabs');
  };

  return (
    <View style={styles.container}>
      <View style={styles.bottom}>
        <Link href={'/QRScan'} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>App Starten</Text>
          </Pressable>
        </Link>
      </View>

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

              <Link href={"/criteria"} asChild>
        <Pressable>
          <Text>Kriterien</Text>
        </Pressable>
      </Link>

*/}

    </View>
  );
};

export default LoginPage;
