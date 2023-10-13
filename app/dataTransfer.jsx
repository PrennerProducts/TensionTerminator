import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';

const DataTransfer = () => {
    const router = useRouter();

    return (
        <View>
            <Text>Daten übermitteln</Text>

            <Link href={'/gratulation'} asChild>
                <Pressable>
                    <Text>Bestätigen</Text>
                </Pressable>
            </Link>

        </View>
    );
}

export default DataTransfer;