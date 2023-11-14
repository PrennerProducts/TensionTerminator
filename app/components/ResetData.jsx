import React from 'react';
import { View, Button } from 'react-native';
import { resetAllData } from '../services/storage';

const ResetDataScreen = () => {
  const handleReset = async () => {
    await resetAllData();
    // Hier können Sie zusätzliche Aktionen durchführen, nachdem der Speicher zurückgesetzt wurde
  };

  return (
    <View>
      <Button title="Daten zurücksetzen" onPress={handleReset} />
    </View>
  );
};

export default ResetDataScreen;
