import { View, Text, Pressable, Button, Image } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';
import styles from '../components/StyleSheet';
import { useProfileImage } from '../components/ProfileImageContext';
import { avatarList } from '../config/avatarConfig';

const TrainingStart = () => {
  const router = useRouter();

  const { currentImageIndex } = useProfileImage(); // Verwenden des ProfileImageContext hooks
  // Hier könnten Sie jetzt currentImageIndex verwenden, um z.B. ein Profilbild anzuzeigen
  const profileImageSource =
    currentImageIndex && avatarList[currentImageIndex]
      ? avatarList[currentImageIndex]
      : require('../../assets/images/error.jpg'); // Standardbild, falls kein Index vorhanden ist

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Training</Text>

      {/* Profilbild anzeigen */}
      <Image
        source={profileImageSource}
        style={{ width: 80, height: 80, borderRadius: 40, margin: 50 }}
      />

      <View style={styles.bottom}>
        <Link href={'../training'} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Training starten</Text>
          </Pressable>
        </Link>

        <Link href={'../components/explanationVideo'} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Erklärvideo anschauen</Text>
          </Pressable>
        </Link>

        <Link href={'../components/explanationText'} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Erklärung lesen</Text>
          </Pressable>
        </Link>
      </View>
      <Link
        replace
        href="/"
        style={{ textAlign: 'right', fontSize: 24, margin: 20 }}
      >
        Go to Startseite
      </Link>
    </View>
  );
};

export default TrainingStart;
