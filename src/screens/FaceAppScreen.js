import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from '../components/StyleSheet';


export default function FaceAppScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}
