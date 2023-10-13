import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';

const ResultEvaluation = () => {
    const router = useRouter();

    return (
        <View>
            <Text>Ergebnisanzeige Evaluation</Text>

            <Link href={'/dataTransfer'} asChild>
                <Pressable>
                    <Text>Daten übermitteln</Text>
                </Pressable>
            </Link>

            <Link href={'/gratulation'} asChild>
                <Pressable>
                    <Text>Weiter</Text>
                </Pressable>
            </Link>

        </View>
    );
}

export default ResultEvaluation;