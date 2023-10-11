import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';

const EvaluationAfter = () => {
    const router = useRouter();

    return (
        <View>
            <Text>Evaluierungsübung NACHHER</Text>

            <Link href={'/tabs/EvaluationScreen'} asChild>
                <Pressable>
                    <Text>Starten</Text>
                </Pressable>
            </Link>

            <Link href={'/intensityAfter'} asChild>
                <Pressable>
                    <Text>Weiter</Text>
                </Pressable>
            </Link>



        </View>
    );
}

export default EvaluationAfter;