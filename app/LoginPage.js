import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export const LoginPage = () => {
  const router = useRouter();

  function handleLogin() {}

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 50 }}>LoginPage</Text>
      <Link href={'/register'} asChild>
        <Pressable>
          <Text>Create Account</Text>
        </Pressable>
      </Link>
    </View>
  );
};
