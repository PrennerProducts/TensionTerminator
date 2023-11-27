import 'expo-router/entry';
import { View, Image, Text, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Link, useRouter } from 'expo-router';
import UserData from './classes/userData';
import { avatarList } from './config/avatarConfig';
import { ProfileImageProvider } from '../app/components/ProfileImageContext';
import { evaluationData } from './evaluationComponents/evaluationData';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useUserContext } from './services/userContextProvider';
import { Button } from '@rneui/themed';
import { Box } from 'victory-native';
import { useNavigation } from '@react-navigation/native';
import { painData } from './components/painData';
import { resetAllData } from './services/storage';

const Home = () => {
  // Resett all data
  //resetAllData();

  // User context provider
  const {
    username,
    gameLevel,
    points,
    profileImageIndex,
    updateUserDetails,
    updateProfileImageIndex,
    updateUsername,
    updateGameLevel,
    updatePoints,
  } = useUserContext();

  // router
  const router = useRouter();
  // user Instance
  const [user, setUser] = useState(new UserData());

  const goToEvaluation = async () => {
    evaluationData.resetValues();
    evaluationData.originScreen = '../home';
    evaluationData.isTraining = 0;
    evaluationData.beforeAfterTraining = 0;
    router.replace({ pathname: 'evaluationComponents/evaluationScreen' });
  };

  const goToTraining = async () => {
    painData.resetValues();
    painData.painIntensityBefore = 5;
    evaluationData.resetValues();
    evaluationData.originScreen = '../home';
    evaluationData.isTraining = 1;
    evaluationData.beforeAfterTraining = 0;
    router.replace({ pathname: 'components/painWhere' });
  };

  useEffect(() => {
    const initializeUser = async () => {
      await user.initialize();
      await updateProfileImageIndex(user.getprofilepicture());
      await updateUsername(user.getUserName());
      await updateGameLevel(user.getLevel());
      await updatePoints(user.getPoints());
    };
    initializeUser();
  }, []);

  return (
    <View style={stylesLocal.container}>
      <View style={{}}>
        <View style={stylesLocal.box}>
          <Image
            source={require('../assets/logo.png')}
            style={{
              resizeMode: 'contain',
              width: '50%',
              height: 50,
              borderRadius: 10,
            }}
          />
          <Text style={stylesLocal.header}>{username}'s Startseite</Text>

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
          <Text style={stylesLocal.row}>
            {' '}
            Level: {gameLevel};{'\n'}Punkte: {points};
          </Text>

          <Button
            title="QR-Code scannen"
            onPress={() => {
              router.push({ pathname: 'components/barcode' });
            }}
            buttonStyle={stylesLocal.buttonWithIcon}
            titleStyle={stylesLocal.buttonText}
            icon={<Icon name="qrcode-scan" size={30} color="#fff" />}
          />

          <Button
            title="Ausschlusskriterien"
            onPress={() => {
              router.push({ pathname: 'criteria' });
            }}
            buttonStyle={stylesLocal.buttonWithIcon}
            titleStyle={stylesLocal.buttonText}
            icon={<Icon name="information" size={30} color="#fff" />}
          />

          <Button
            title="Beweglichkeit messen"
            onPress={() => {
              goToEvaluation();
            }}
            buttonStyle={stylesLocal.buttonWithIcon}
            titleStyle={stylesLocal.buttonText}
            icon={<Icon name="reiterate" size={30} color="#fff" />}
          />

          <Button
            title="Training starten"
            onPress={() => {
              goToTraining();
            }}
            buttonStyle={stylesLocal.buttonWithIcon}
            titleStyle={stylesLocal.buttonText}
            icon={
              <Icon name="rowing" size={30} color="#fff" marginRight={30} />
            }
          />
        </View>
      </View>
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  box: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#10069f',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fffff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#10069F',
  },
  row: {
    flexDirection: 'row',
  },
  buttonWithIcon: {
    display: 'flex',
    height: '9%',
    minHeight: 50,
    minWidth: '90%',
    backgroundColor: '#10069f',
    borderRadius: 10,
    marginTop: '5%',
    justifyContent: 'flex-start',
  },
  buttonText: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'left',
    marginLeft: '10%',
  },
});

export default Home;
