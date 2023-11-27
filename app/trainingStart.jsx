import 'expo-router/entry';
import { View, Text, Pressable, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import styles from './components/StyleSheet';
import { useUserContext } from './services/userContextProvider';
import { avatarList } from './config/avatarConfig';
import { WebView } from 'react-native-webview';
import Modal from 'react-native-modal';
import { painData } from './components/painData';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from '@rneui/themed';

//import Thn_SchulterNacken_DruckSchm_Nacken from '../assets/gifs/1druck.gif';
//import Thn_SchulterNacken_ZiehSchm from '../assets/gifs/1zieh.gif';
//import Thn_SchulterNacken_DruckSchm_Schulter from '../assets/gifs/1druck2.gif';
//import Thn_MiRuecken_DruckSchm from '../assets/gifs/2druck.gif';
//import Thn_MiRuecken_ZiehSchm from '../assets/gifs/2zieh.gif';
//import Thn_UnRuecken_DruckSchm from '../assets/gifs/3druck.gif';
//import Thn_UnRuecken_ZiehSchm from '../assets/gifs/3zieh.gif';
//import Thn_BeckenGesaess_DruckSchm from '../assets/gifs/4druck.gif';

import Thn_SchulterNacken_DruckSchm_Nacken from '../assets/gifs/Thn_SchulterNacken_DruckSchm_Nacken.gif';
import Thn_SchulterNacken_DruckSchm_Schulter from '../assets/gifs/Thn_SchulterNacken_DruckSchm_Schulter.gif';
import Thn_SchulterNacken_ZiehSchm from '../assets/gifs/Thn_SchulterNacken_ZiehSchm.gif';
import Thn_MiRuecken_DruckSchm from '../assets/gifs/Thn_MiRuecken_DruckSchm.gif';
import Thn_MiRuecken_ZiehSchm from '../assets/gifs/Thn_MiRuecken_ZiehSchm.gif';
import Thn_UnRuecken_DruckSchm from '../assets/gifs/Thn_UnRuecken_DruckSchm.gif';
import Thn_UnRuecken_ZiehSchm from '../assets/gifs/Thn_UnRuecken_ZiehSchm.gif';
import Thn_BeckenGesaess_DruckSchm from '../assets/gifs/Thn_BeckenGesaess_DruckSchm.gif';

const TrainingStart = () => {
  const router = useRouter();
  const { profileImageIndex } = useUserContext();

  const profileImageSource =
    profileImageIndex && avatarList[profileImageIndex]
      ? avatarList[profileImageIndex]
      : require('../assets/images/error.jpg');

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const contentOptions = {
    '1_1': {
      url: 'https://player.vimeo.com/video/490520420',
      thumbnail: Thn_SchulterNacken_DruckSchm_Nacken,
      text1:
        'Bei Druckschmerzen im Schulter-Nacken-Bereich die untere Nase des Triggerpunkthebels verwenden. Die zusätzliche Anwendung der kleinen Duobälle im Bereich der oberen Brustwirbelsäule, führt meistens zu einer weiteren Verbesserung der Verspannung.',
    },
    '1_2': {
      url: 'https://player.vimeo.com/video/490644680',
      thumbnail: Thn_SchulterNacken_ZiehSchm,
      text1:
        'Bei ziehenden Schmerzen im Schulter- Nacken-Bereich die kleinen Duobälle verwenden. Die zusätzliche Anwendung der unteren Nase des Triggerpunkthebels im Schulter-Nacken Bereich, führt meistens zu einer weiteren Verbesserung der Verspannung.',
    },
    '1_3': {
      url: 'https://player.vimeo.com/video/490644043',
      thumbnail: Thn_SchulterNacken_DruckSchm_Schulter,
      text1:
        'Bei Druckschmerzen im oberen Schulterblatt- oder Rückenbereich, am besten die vordere Nase des Triggerpunkthebels verwenden. Der Druckschmerz kann in diesem Bereich an verschiedenen Stellen auftreten.',
    },
    '2_1': {
      url: 'https://player.vimeo.com/video/490644235',
      thumbnail: Thn_MiRuecken_DruckSchm,
      text1:
        'Bei Druckschmerzen im mittleren Rückenbereich, die vordere Nase des Triggerpunkthebels verwenden. Der Druckschmerz kann in diesem Bereich an verschiedenen Stellen auftreten.',
    },
    '2_2': {
      url: 'https://player.vimeo.com/video/490644425',
      thumbnail: Thn_MiRuecken_ZiehSchm,
      text1:
        'Bei ziehenden Schmerzen entlang der Brustwirbelsäule verwenden Sie die Duobälle. Häufiger wird der kleine Duoball als passend empfunden. Probieren Sie anfangs beide.',
    },
    '3_1': {
      url: 'https://player.vimeo.com/video/490645122',
      thumbnail: Thn_UnRuecken_DruckSchm,
      text1:
        'Bei Druckschmerzen im unteren Rückenbereich, verwenden Sie die vordere Nase des Triggerpunkthebels. Der Druckschmerz kann in diesem Bereich an verschiedenen Stellen auftreten.',
    },
    '3_2': {
      url: 'https://player.vimeo.com/video/490644944',
      thumbnail: Thn_UnRuecken_ZiehSchm,
      text1:
        'Bei ziehenden Schmerzen entlang der Lendenwirbelsäule und/oder im Kreuzbeinbereich, verwenden Sie die Duobälle. Probieren Sie aus, welche Duoballgröße am besten passt.',
    },
    '4_1': {
      url: 'https://player.vimeo.com/video/490645311',
      thumbnail: Thn_BeckenGesaess_DruckSchm,
      text1:
        'Bei Druckschmerzen im Becken- Gesäßbereich, verwenden Sie die vordere Nase des Triggerpunkthebels. Der Druckschmerz tritt in diesem Bereich typischer Weise im tiefen Bereich des Gesäßmuskels auf.',
    },
    default: {
      url: 'https://player.vimeo.com/video/490644680',
      thumbnail: Thn_SchulterNacken_DruckSchm_Nacken,
      text1:
        'Es tut uns leid, Ihre Auswahl wurde nicht gespeichert. Bitte klicken Sie auf den Homebutton und beginnen Sie von vorne.',
    },
  };

  const getContent = () => {
    if (
      typeof painData.painRegion === 'undefined' ||
      typeof painData.painType === 'undefined'
    ) {
      return contentOptions['default'];
    }
    const key = `${painData.painRegion}_${painData.painType}`;
    return contentOptions[key] || contentOptions['default'];
  };

  const currentContent = getContent();

  //   if (!currentOption) {
  //       return <View><Text>Could not play video.</Text></View>;
  //   }

  return (
    <View style={styles.container}>
      <View style={{ flex: 0, width: '80%', top: '3%', bottom: '5%' }}>
        <Text style={styles.header}>
          Training gegen {'\n'}
          {painData.painToString}{' '}
        </Text>

        <Text style={[styles.text, { marginVertical: 10 }]}>
          {currentContent.text1} {'\n'}
        </Text>

        <TouchableOpacity onPress={toggleModal}>
          <Text style={[styles.link, { marginVertical: 0, marginBottom: 10 }]}>
            {'Zur Videoanleitung'} {'\n'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleModal}>
          <View style={styles.thumbnailContainer}>
            <Image source={currentContent.thumbnail} style={styles.thumbnail} />
            <View style={styles.playIconContainer}>
              <Icon name="play-circle" size={80} color="#10069f" />
            </View>
          </View>
        </TouchableOpacity>

        <Modal
          options={{ presentation: 'fullscreen-modal' }}
          isVisible={isModalVisible}
        >
          <View style={{ flex: 1 }}>
            {/* Vimeo Videos können nicht direkt mit react-native-video wiedergegeben werden deswegen WebView*/}
            <WebView
              source={{
                uri: currentContent.url,
              }}
              //source={{uri: currentOption.url}}
              mediaPlaybackRequiresUserAction={false}
              style={{ flex: 1 }}
            />
            <View style={{ alignItems: 'center' }}>
              <Pressable style={styles.button} onPress={toggleModal}>
                <Text style={styles.buttonText}>Schließen</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.bottom}>
        <Button
          title="Training starten"
          onPress={() => {
            router.push('/training');
          }}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        />
      </View>
    </View>
  );
};

export default TrainingStart;
