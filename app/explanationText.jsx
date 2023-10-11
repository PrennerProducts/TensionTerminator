import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';

const ExplanationText = () => {
    const router = useRouter();

    return (
        <View>
            <Text>Training</Text>

            <Link href={'/training'} asChild>
                <Pressable>
                    <Text>Training starten</Text>
                </Pressable>
            </Link>

            <Link href={'/explanationVideo'} asChild>
                <Pressable>
                    <Text>Erklärvideo anschauen</Text>
                </Pressable>
            </Link>

        </View>
    );
}

export default ExplanationText;