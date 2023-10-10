// StackLayout.js
import React from 'react';
import { Button } from 'react-native';
import { Stack } from 'expo-router';
import SchmerzRegionScreen from './SchmerzRegionScreen/SchmerzRegionScreen';

const StackLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"

                options={{
                    headerTitle: 'Login',
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}
            />

            <Stack.Screen
                name="register"

                options={{
                    headerTitle: 'Create account',
                    headerShown: true,
                    headerRight: () => (
                        <Button
                            title="open Modal"
                            onPress={() => {
                                router.push('modal');
                            }}
                        />
                    ),
                }}
            />

            <Stack.Screen
                name="modal"
                options={{
                    presentation: 'modal',
                    headerRight: () => (
                        <Button
                            title="close Modal"
                            onPress={() => {
                                router.back();
                            }}
                        />
                    ),
                }}
            />

            {/* <Stack.Screen
                name="schmerzregion"
                component={SchmerzRegionScreen}
                options={{
                    headerTitle: 'Schmerz Region',
                    headerShown: true,
                    headerTitleAlign: 'center',
                }}
            />*/}

            <Stack.Screen name="tabs" options={{ headerShown: false }} />
        </Stack>
    );
};

export default StackLayout;
