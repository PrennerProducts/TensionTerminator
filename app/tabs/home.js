import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const homePage = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
      }}
    >
      <Text>home</Text>
      <Link href="/" style={{ textAlign: 'right', fontSize: 24, margin: 20 }}>
        Log out
      </Link>
    </View>
  );
};

export default homePage;
