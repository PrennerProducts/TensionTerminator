import {Text, View, Image, ScrollView,} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { WebView } from 'react-native-webview';
import Modal from 'react-native-modal';
import { Link, useRouter } from 'expo-router';
import { evaluationData } from './evaluationData';
import styles from '../components/StyleSheet';
import { Button } from '@rneui/themed';

const EvaluationScreen = () => {
  const router = useRouter();

  const [isModalVisible, setModalVisible] = useState(false);
  const [evaluationStarted, setEvaluationStarted] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleEvaluierung = () => {
    setEvaluationStarted(true);
    evaluationData.printValues();
    router.push('../evaluationComponents/evaluationYR');
  };

  return (

    <View style={styles.container}>

      <Text style={{fontSize: 25, marginTop: 20}}>Evaluierungsübungen Anleitung {"\n"} {"\n"}</Text>

        <ScrollView style={{ flexGrow:1, padding: 5 }}>

        <Text style={styles.text}>HIER KOMMT NOCH EINE DETEILIERTERE ANLEITUNG HIN {"\n"} {"\n"}
      Die Übungen werden in 2 Schritten durchgführt: {"\n"}
      + Erste Übung Yaw (Kopfrotation) {"\n"}
      + Zweite Übung Rol (Kopf zu Schulterbewegung):</Text>


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
           Vimeo Videos können nicht direkt mit react-native-video wiedergegeben werden deswegen WebView
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

      <View>
          <Button
              title="Evaluierungsübung starten"
              onPress={handleEvaluierung}
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
          />
        {/* <Button title="Evaluierungsübung starten" onPress={handleEvaluierung} /> */}
      </View>
    </View>

        </View>
  );
};

export default EvaluationScreen;
