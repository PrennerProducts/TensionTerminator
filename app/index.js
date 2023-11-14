import { useRouter } from "expo-router";
import { StyleSheet, Text, View, Image } from "react-native";
import { useEffect } from "react";
import styles from "./components/StyleSheet";

const WelcomeScreen = () => {
  const navigation = useRouter();

  useEffect(() => {
    setTimeout(async () => {
      navigation.push("/home")
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')}/>
      <Image source={require('../assets/gifs/loading.gif')}/>
      <Text>Lade...</Text>
    </View>
  );
};



export default WelcomeScreen;