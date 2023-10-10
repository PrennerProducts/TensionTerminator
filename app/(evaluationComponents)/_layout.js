import React from 'react';
import {
  NavigationContainer,
  Stack,
  Screen,
  useRouter,
  Slot,
} from 'expo-router';

const EvaluationLayout = () => {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#10069f',
          alignItems: 'center',
          justifyContent: 'center',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    ></Stack>
  );
};

export default EvaluationLayout;
