import { View, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const homePage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>home</Text>
      <Link href="/">Log out</Link>
    </View>
  );
};

export default homePage;
