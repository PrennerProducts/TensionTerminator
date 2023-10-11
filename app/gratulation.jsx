import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';

const Gratulation = () => {
    const router = useRouter();

    return (
        <View>
            <Text>Gratulation!</Text>

            <Link href={'/appointment'} asChild>
                <Pressable>
                    <Text>Termin planen</Text>
                </Pressable>
            </Link>

            <Link href={'/where'} asChild>
                <Pressable>
                    <Text>Neues Training starten</Text>
                </Pressable>
            </Link>

        </View>
    );
}

export default Gratulation;