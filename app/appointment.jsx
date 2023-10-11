import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';

const Appointment = () => {
    const router = useRouter();

    return (
        <View>
            <Text>Termin planen</Text>

            <Link href={'/where'} asChild>
                <Pressable>
                    <Text>Bestätigen</Text>
                </Pressable>
            </Link>

        </View>
    );
}

export default Appointment;