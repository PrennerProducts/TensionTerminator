import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';

const QRcodeScreen = () => {
    const router = useRouter();

    return (
        <View>
            <Text>QR-Code Scannen</Text>

            <Link href={'/tabs/barcode'} asChild>
                <Pressable>
                    <Text>Barcode Scannen</Text>
                </Pressable>
            </Link>

            <Link href={'/criteria'} asChild>
                <Pressable>
                    <Text>Überspringen</Text>
                </Pressable>
            </Link>

        </View>
    );
}

export default QRcodeScreen;