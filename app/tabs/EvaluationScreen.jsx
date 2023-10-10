import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Image,
  Pressable,
} from 'react-native';

import React, { useState, useEffect, useRef } from 'react';
import { WebView } from 'react-native-webview';
import Modal from 'react-native-modal';
import { Link, useRouter } from 'expo-router';

const EvaluationScreen = () => {
  const router = useRouter();

  const [isModalVisible, setModalVisible] = useState(false);
  const [evaluationStarted, setEvaluationStarted] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleEvaluierung = () => {
    setEvaluationStarted(true);
    router.replace('evaluationYaw');
  };

  return (
    <View style={styles.container}>
      <Text>Evaluierungsübungen Anleitung</Text>
      <Text>HIER KOMMT NOCH EINE DETEILIERTERE ANLEITUNG HIN</Text>
      <Text>Die Übungen werden in 2 schritten durchgführt:</Text>
      <Text>Erste Übung Yaw (Kopfrotation)</Text>
      <Text>Zweite Übung Rol (Kopf zu Schulterbewegung):</Text>

      <Text>AnleitungsViedeo anschauen:</Text>
      {/* Hier das Video einbetten  url: https://vimeo.com/853027148?share=copy */}
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

      <Button title="Anleitungsvideo schauen" onPress={toggleModal} />
      <Modal
        options={{ presentation: 'fullscreen-modal' }}
        isVisible={isModalVisible}
      >
        <View style={{ flex: 1 }}>
          {/* Vimeo Videos können nicht direkt mit react-native-video wiedergegeben werden deswegen WebView*/}
          <WebView
            source={{
              uri: 'https://player.vimeo.com/video/853027148?autoplay=1',
            }}
            mediaPlaybackRequiresUserAction={false}
            style={{ flex: 1 }}
          />
          <Button title="Schließen" onPress={toggleModal} />
        </View>
      </Modal>

      <View style={{ marginTop: 150 }}>
        <Button title="Evaluierungsübung starten" onPress={handleEvaluierung} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  startScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButton: {
    fontSize: 20,
    color: 'white',
    padding: 10,
    backgroundColor: 'blue',
  },
  camera: {
    flex: 1,
  },
  exitButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  exitButtonText: {
    fontSize: 16,
    color: 'white',
  },
  textContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
  },
  faceDesc: {
    fontSize: 20,
    color: 'white',
  },
  maxValues: {
    fontSize: 20,
    color: 'yellow',
  },
});

export default EvaluationScreen;
