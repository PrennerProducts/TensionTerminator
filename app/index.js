import 'expo-router/entry';

import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';

const LoginPage = () => {
  const router = useRouter();

  const handlePress = () => {
    router.replace('tabs');
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable onPress={handlePress}>
        <Text>Home</Text>
      </Pressable>
      <Text style={{ marginBottom: 50 }}>
        -------------------------LoginPage----------------------------
      </Text>
      <Link href={'/register'} asChild>
        <Pressable>
          <Text>Create Account</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default LoginPage;
