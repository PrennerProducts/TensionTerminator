
import {Image, Pressable} from "react-native";
import styles from "../components/styleSheet";
import * as React from "react";
import {FontAwesome5} from '@expo/vector-icons';

function profileButton(navigation) {
    return (
        <Pressable
            style={styles.button} onPress={() => router.push('Profile')}>
            <Image
                source={<FontAwesome5 name="profile" />}
            />
        </Pressable>
    )
}


export default profileButton;