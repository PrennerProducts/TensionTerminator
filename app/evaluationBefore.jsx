import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';

const EvaluationBefore = () => {
    const router = useRouter();

    return (
        <View>
            <Text>Evaluierungsübung VORHER</Text>

            <Link href={'/tabs/EvaluationScreen'} asChild>
                <Pressable>
                    <Text>Weiter</Text>
                </Pressable>
            </Link>

            <Link href={'/trainingStart'} asChild>
                <Pressable>
                    <Text>Überspringen</Text>
                </Pressable>
            </Link>

        </View>
    );
}

export default EvaluationBefore;