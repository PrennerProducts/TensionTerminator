import 'expo-router/entry';
import { View, Text, Pressable, Button } from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';
import styles from "../components/styleSheet";

const Appointment = () => {
    const router = useRouter();

    return (
        <View>
            <Text>Termin planen</Text>
            <View style={styles.bottom}>
            <Link href={'/where'} asChild>
                <Pressable>
                    <Text>Bestätigen</Text>
                </Pressable>
            </Link>
            </View>
        </View>
    );
}

export default Appointment;