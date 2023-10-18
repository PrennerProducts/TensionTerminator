import 'expo-router/entry';
import {View, Text, Pressable, Button} from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';
import styles from "../../components/styleSheet";

export default function WhereScreen({navigation}) {

    return (
        <View style={styles.container}>
                <Text style={styles.title}>Wo tut es weh?</Text>

            <View style={styles.bottom}>

                    <Pressable style={styles.button}  onPress={() => navigation.navigate("how")}>
                        <Text style={styles.buttonText}>Schulter/Nacken</Text>
                    </Pressable>

                    <Pressable style={styles.button}  onPress={() => navigation.navigate("how")}>
                        <Text style={styles.buttonText}>Mittlerer Rücken</Text>
                    </Pressable>

                    <Pressable style={styles.button}  onPress={() => navigation.navigate("how")}>
                        <Text style={styles.buttonText}>Unterer Rücken</Text>
                    </Pressable>

                    <Pressable style={styles.button}  onPress={() => navigation.navigate("how")}>
                        <Text style={styles.buttonText}>Becken/Gesaess</Text>
                    </Pressable>
            </View>
        </View>
    );
}
