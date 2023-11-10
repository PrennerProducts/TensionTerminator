import "expo-router/entry";
import {View, Text, Pressable, Button} from "react-native";
import React from "react";
import {Link, useRouter} from "expo-router";
import {removeData} from "./services/storage";
import styles from "./components/StyleSheet";


const WherePain = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Wo tut es weh?</Text>
            <View style={styles.bottom}>
                <Link href={"/how"} asChild>

                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Schulter/Nacken</Text>
                    </Pressable>
                </Link>

                <Link href={"/how"} asChild>

                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Mittlerer Rücken</Text>
                    </Pressable>
                </Link>


                <Link href={"/how"} asChild>
      <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Unterer Rücken</Text>
                    </Pressable>
                </Link>


                <Link href={"/how"} asChild>

                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Becken/Gesaess</Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    );
};

export default WherePain;
