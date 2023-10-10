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
    >
      {/* // Stackscreens können so umbenannt werden oder ausgeblendet mit
      //headerShown */}
        {/*<Stack.Screen
        name="evaluationYaw"
        options={{
          headerTitle: 'Yaw',
          headerShown: false,
          headerTitleAlign: 'center',
        }}
      />*/}
        {<Stack.Screen
        name="evaluationRoll"
        options={{
          headerTitle: 'Roll',
          headerShown: true,
          headerTitleAlign: 'center',
        }}
      />}
    </Stack>
  );
};

export default EvaluationLayout;
