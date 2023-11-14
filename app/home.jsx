import 'expo-router/entry';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Link, useRouter } from 'expo-router';
import styles from './components/StyleSheet';
import UserData from './classes/userData';
import { avatarList } from './config/avatarConfig';
import { ProfileImageProvider } from '../app/components/ProfileImageContext';
import { evaluationData } from './evaluationComponents/evaluationData';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useUserContext } from './components/userContextProvider';

const Home = () => {
  // User context provider
  const {
    username,
    gameLevel,
    points,
    profileImageIndex,
    setUsername,
    setGameLevel,
    setPoints,
    setProfileImageIndex,
    updateUserDetails,
  } = useUserContext();
  const router = useRouter();
  const [user, setUser] = useState(new UserData());
  const [userName, setUserName] = useState();
  //const [points, setPoints] = useState(0);

  const goToEvaluation = async () => {
    evaluationData.resetValues();
    evaluationData.originScreen = '../home';
    evaluationData.isTraining = 0;
    evaluationData.beforeAfterTraining = 0;
    router.replace({ pathname: 'evaluationComponents/EvaluationScreen' });
  };

  useEffect(() => {
    const initializeUser = async () => {
      await user.initialize();
      if (user.getUserName() == null) {
        user.setUserName('Default');
      } else {
        setUserName(user.getUserName());
      }
      setProfileImageIndex(user.getprofilepicture());
      setGameLevel(user.getLevel);
      setPoints(user.getPoints);
    };
    initializeUser();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{}}>
        <View style={styles.box}>
          <Image
            source={require('../assets/logo.png')}
            style={{
              resizeMode: 'contain',
              width: '50%',
              height: 50,
              borderRadius: 10,
            }}
          />
          <Text style={styles.header}>{userName}'s Startseite</Text>

          <Image
            source={
              profileImageIndex >= 0 &&
              profileImageIndex != null &&
              profileImageIndex < avatarList.length
                ? avatarList[profileImageIndex]
                : require('../assets/images/error.jpg')
            }
            style={{
              resizeMode: 'contain',
              width: '42%',
              height: '20%',
              borderRadius: 100,
            }}
          />
          <Text style={styles.row}>
            {' '}
            Stufe: {gameLevel};{'\n'}Punkte: {points};
          </Text>

          <Link href={'./QRScan'} asChild>
            <TouchableOpacity style={styles.button}>
              <View style={styles.section}>
                <Icon
                  name="qrcode-scan"
                  size={30}
                  color="#fff"
                  style={{ marginLeft: 30 }}
                />
                <Text style={styles.buttonText}> QR-Code scannen</Text>
              </View>
            </TouchableOpacity>
          </Link>
          <Link href={'./criteria'} asChild>
            <TouchableOpacity style={styles.button}>
              <View style={styles.section}>
                <Icon
                  name="information"
                  size={30}
                  color="#fff"
                  style={{ marginLeft: 30 }}
                />
                <Text style={styles.buttonText}> Ausschlusskriterien</Text>
              </View>
            </TouchableOpacity>
          </Link>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              goToEvaluation();
            }}
          >
            <View style={styles.section}>
              <Icon
                name="reiterate"
                size={30}
                color="#fff"
                style={{ marginLeft: 30 }}
              />
              <Text style={styles.buttonText}> Beweglichkeit messen</Text>
            </View>
          </TouchableOpacity>

          <Link href={'./components/painWhere'} asChild>
            <TouchableOpacity style={styles.button}>
              <View style={styles.section}>
                <Icon
                  name="rowing"
                  size={30}
                  color="#fff"
                  style={{ marginLeft: 30 }}
                />
                <Text style={styles.buttonText}> Training starten</Text>
              </View>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default Home;
