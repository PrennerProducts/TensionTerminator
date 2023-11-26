import React from 'react';
import { View } from 'react-native';
import { resetAllData } from '../services/storage';
import styles from "./StyleSheet";
import {Button} from "@rneui/themed";

const ResetDataScreen = () => {
  const handleReset = async () => {
    await resetAllData();
    // Hier können Sie zusätzliche Aktionen durchführen, nachdem der Speicher zurückgesetzt wurde
  };

  return (
    <View>
      <Button
          title="Daten zurücksetzen"
          onPress={handleReset}
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
      />
    </View>
  );
};

export default ResetDataScreen;
