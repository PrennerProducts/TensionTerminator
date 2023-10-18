import 'expo-router/entry';
import { View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from "../../components/styleSheet";

export default function AppointmentScreen ({navigation}) {

    return (
        <View>
            <Text>Termin planen</Text>
            <View style={styles.bottom}>
                <Pressable style={styles.button} onPress={() => navigation.navigate("where")}>
                    <Text>Bestätigen</Text>
                </Pressable>
            </View>
        </View>
    );
}
