
import {Image, Pressable} from "react-native";
import styles from "../components/styleSheet";
import * as React from "react";
import {FontAwesome5} from '@expo/vector-icons';

function homeButton(navigation) {
    return (
        <Pressable
            style={styles.button} onPress={() => router.push('QRScan')}>
            <Image
                source={<FontAwesome5 name="home" />}
            />
        </Pressable>
    )
}


export default homeButton;