import React from 'react';
import DrawingR from './drawingR';
import { View } from 'react-native';
import styles from '../components/StyleSheet';

const drawTest = () => {
  const maxYLBefore = 42;
  const maxYRBefore = 35;
  const maxYLAfter = 65;
  const maxYRAfter = 55;
  return (
    <View styles={top=200}>
      <DrawingR
        maxYLBefore={maxYLBefore}
        maxYRBefore={maxYRBefore}
        maxYLAfter={maxYLAfter}
        maxYRAfter={maxYRAfter}
      />
    </View>
  );
};

export default drawTest;
