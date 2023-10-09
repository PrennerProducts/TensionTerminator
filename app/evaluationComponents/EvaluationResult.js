import React from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';

const EvaluationResult = ({ photoUri, onRepeat, onOk }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: photoUri }} style={styles.photo} />
      <View style={styles.buttonContainer}>
        <Button title="Repeat" onPress={onRepeat} />
        <Button title="Ok" onPress={onOk} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default EvaluationResult;
