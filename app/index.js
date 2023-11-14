import 'expo-router/entry';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Link, useRouter } from 'expo-router';
import styles from './components/StyleSheet';
import UserData from './classes/userData';
import { avatarList } from './config/avatarConfig';
import { ProfileImageProvider } from '../app/components/ProfileImageContext';
import { evaluationData } from './evaluationComponents/evaluationData';

const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = useState(new UserData());
  const [userName, setUserName] = useState();
  const [selectedAvatarIndex, setselectedAvatarIndex] = useState(0);

  const goToEvaluation = async () => {
    evaluationData.resetValues();
    evaluationData.originScreen = '../homeScreen';
    evaluationData.isTraining = 0;
    evaluationData.beforeAfterTraining = 0;
    router.replace({ pathname: 'evaluationComponents/EvaluationScreen' });
  };

  useEffect(() => {
    const initializeUser = async () => {
      await user.initialize();
      setUserName(user.getUserName());
      setselectedAvatarIndex(user.getprofilepicture());
      //console.log('Name: ', userName);
      //console.log('Avatar Index: ', selectedAvatarIndex);
    };
    initializeUser();
  }, []);

  return (
    <ProfileImageProvider>
      <View style={{flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  }}>
        <View style={{
            }}>
          <Text style={styles.header}>Home</Text>
          {/*<Image
            source={require('../assets/logo.png')}
            style={{
              width: '100%',
              resizeMode: 'contain',
            }}
          />*/}
          <Image
          source={
            selectedAvatarIndex >= 0 &&
            selectedAvatarIndex != null &&
            selectedAvatarIndex < avatarList.length
              ? avatarList[selectedAvatarIndex]
              : require('../assets/images/error.jpg')
          }
          style={{ 
            resizeMode: 'contain',
            width: 200, 
            height: 200, 
            borderRadius: 100 
          }}
        />
        <Text style={styles.header}>{userName}</Text>
        </View>
        <View style={styles.bottom}>
          <Link href={'./QRScan'} asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>QR-Code scannen</Text>
            </TouchableOpacity>
          </Link>
          <Link href={'./components/criteria'} asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Ausschlusskriterien</Text>
            </TouchableOpacity>
          </Link>

            <TouchableOpacity style={styles.button} onPress={() => {goToEvaluation();}}>
              <Text style={styles.buttonText}>Beweglichkeitsmessung</Text>
            </TouchableOpacity>

          <Link href={'./components/painWhere'} asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Training</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ProfileImageProvider>
  );
};

export default LoginPage;
