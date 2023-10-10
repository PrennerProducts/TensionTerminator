import 'expo-router/entry';

import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';

const LoginPage = () => {
  const router = useRouter();

  const handlePress = () => {
    router.replace('tabs');
  };
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ top: 0 }}>
        -------------------------LoginPage----------------------------
      </Text>

      <Button
        style={{ fontSize: 24, margin: 540 }}
        title="Home"
        onPress={handlePress}
      />

      <Link href={'/register'} asChild>
        <Pressable>
          <Text>Create Account</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default LoginPage;
