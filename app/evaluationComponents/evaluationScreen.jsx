import { Text, View, Image, ScrollView } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { WebView } from 'react-native-webview';
import Modal from 'react-native-modal';
import { Link, useRouter } from 'expo-router';
import { evaluationData } from './evaluationData';
import styles from '../components/StyleSheet';
import { Button } from '@rneui/themed';

const evaluationScreen = () => {
  const router = useRouter();

  const [isModalVisible, setModalVisible] = useState(false);
  const [evaluationStarted, setEvaluationStarted] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleEvaluierung = () => {
    setEvaluationStarted(true);
    evaluationData.printValues();
    router.replace('../evaluationComponents/evaluationYR');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {'\n'}Anleitung {'\n'}
      </Text>
      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.text}>
            Die Evaluierung besteht aus 2 Übungen. {'\n'}
            Mit diesen Übungen wird die Beweglichkeit des Kopfes evaluiert. {'\n'}
        </Text>
          <Text style={styles.textUnderline}>
            Erste Übung Yaw (Kopfrotation)
          </Text>
            <Text style={styles.text}>
            Dafür den Kopf zuerst nach links oder rechts drehen, kurz am Maximum halten
            und dann wieder in die Ausgangsposition zurückdrehen. {'\n'}
            Dann den Kopf in die andere Richtung drehen, kurz am Maximum halten und wieder
            in die Ausgangsposition zurückdrehen. {'\n'}
            </Text>
            <Text style={styles.textUnderline}>
            Zweite Übung Rol (Kopf zu Schulterbewegung)
            </Text>
            <Text style={styles.text}>
            Dafür den Kopf zuerst nach links oder rechts neigen, kurz am Maximum halten
            und dann wieder in die Ausgangsposition zurückneigen. {'\n'}
            Dann den Kopf in die andere Richtung neigen, kurz am Maximum halten und wieder
            in die Ausgangsposition zurückneigen. {'\n'}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <Image
            source={require('../../assets/images/roll.png')}
            style={{ width: 100, height: 100 }}
          />
          <Image
            source={require('../../assets/images/rotation.png')}
            style={{ width: 100, height: 100 }}
          />
        </View>
          <Text>{'\n'}</Text>
      </ScrollView>

      <View style={styles.bottom}>
        <Button
          title="Anleitungsvideo schauen"
          onPress={toggleModal}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        />
        <Modal
          options={{ presentation: 'fullscreen-modal' }}
          isVisible={isModalVisible}
        >
          <View style={{ flex: 1 }}>
            {/*Vimeo Videos können nicht direkt mit react-native-video wiedergegeben werden deswegen WebView*/}
            <WebView
              source={{
                uri: 'https://player.vimeo.com/video/853027148?autoplay=1',
              }}
              mediaPlaybackRequiresUserAction={false}
              style={{ flex: 1 }}
            />

            <View style={{ alignItems: 'center' }}>
              <Button
                title="Schließen"
                onPress={toggleModal}
                buttonStyle={styles.button}
                titleStyle={styles.buttonText}
              />
            </View>
          </View>
        </Modal>

        <Button
          title="Evaluierungsübung starten"
          onPress={handleEvaluierung}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
        />
      </View>
    </View>
  );
};

export default evaluationScreen;
