import 'expo-router/entry';
import {
  View,
  Text,
  Pressable,
  Button,
  ImageBackground,
  Image,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Link, useRouter } from 'expo-router';
import styles from './components/StyleSheet';
import UserData from './classes/userData';
import { avatarList } from './config/avatarConfig';
import { ProfileImageProvider } from '../app/components/ProfileImageContext';
import { useProfileImage } from '../app/components/ProfileImageContext';

const LoginPage = () => {
  const router = useRouter();
  const user = new UserData();
  const { currentImageIndex, updateImageIndex } = useProfileImage();

  return (
    <ProfileImageProvider>
      <View style={styles.container}>
        <View
          style={{
            position: 'absolute',
            width: '100%',
            flex: 1,
            flexDirection: 'column',
            top: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            source={require('../assets/logo.png')}
            style={{
              position: 'absolute',
              width: '100%',
              resizeMode: 'contain',
              top: 0,
            }}
          />
          <Image
            source={
              avatarList[currentImageIndex != null ? currentImageIndex : 1]
            }
            style={{
              position: 'absolute',
              width: '30%',
              resizeMode: 'contain',
              top: -300,
            }}
          />
        </View>
        <View style={styles.bottom}>
          <Link href={'./QRScan'} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>QR-Code scannen</Text>
            </Pressable>
          </Link>
          <Link href={'./components/criteria'} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Ausschlusskriterien</Text>
            </Pressable>
          </Link>
          <Link href={'./evaluationComponents/EvaluationScreen'} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Beweglichkeitsmessung</Text>
            </Pressable>
          </Link>
          <Link href={'./components/painWhere'} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Training</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </ProfileImageProvider>
  );
};

export default LoginPage;
