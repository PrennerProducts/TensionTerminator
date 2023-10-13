import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';

const intensityBefore = () => {
    const router = useRouter();

    return (
        <View>
            <Text>Wie stark tut es weh? VORHER</Text>

            <Link href={'/evaluationBefore'} asChild>
                <Pressable>
                    <Text>Weiter</Text>
                </Pressable>
            </Link>

        </View>
    );
}

export default intensityBefore;