import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';

const TrainingScreen = () => {
    const router = useRouter();

    return (
        <View>
            <Text>Training</Text>

            <Link href={'/evaluationAfter'} asChild>
                <Pressable>
                    <Text>Training beenden</Text>
                </Pressable>
            </Link>

        </View>
    );
}

export default TrainingScreen;