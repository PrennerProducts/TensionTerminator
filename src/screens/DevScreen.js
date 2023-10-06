import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from '../components/StyleSheet';


export default function DevScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dev Screen</Text>
            <Button
                title="Go to FaceApp"
                onPress={() => navigation.navigate('FaceAppScreen')}
            />
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('HomeScreen')}
            />
        </View>
    );
}
