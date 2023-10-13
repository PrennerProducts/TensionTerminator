import {View, Text, Pressable} from "react-native";
import React from 'react';
import { Link } from 'expo-router';

const criteriaScreen = () => {

    return (
        <View>
            <Text>Ausschlusskriterien</Text>

            <Link href={'/where'} asChild>
                <Pressable>
                    <Text>Bestätigen</Text>
                </Pressable>
            </Link>
            <Link href={'/where'} asChild>
                <Pressable>
                    <Text>Überspringen</Text>
                </Pressable>
            </Link>

        </View>
    );
}


export default criteriaScreen;