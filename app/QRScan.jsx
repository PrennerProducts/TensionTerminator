import 'expo-router/entry';
import { View, Text, Pressable, Button, Image } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';
import { WebView } from 'react-native-webview';
import styles from './components/StyleSheet';

const QRcodeScreen = ({}) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QR-Code Scannen</Text>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          position: 'relative',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={require('../assets/gifs/qr_scan.gif')}
          style={{ top: 50, width: 150, height: 150 }}
        />
      </View>

      <View style={styles.bottom}>
        <Link href={'components/barcode'} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Barcode Scannen</Text>
          </Pressable>
        </Link>

        <Link href={'./components/criteria'} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Überspringen</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

export default QRcodeScreen;
