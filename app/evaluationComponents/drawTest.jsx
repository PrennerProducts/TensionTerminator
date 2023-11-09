import React from 'react';
import DrawingY from './drawingY';
import { View } from 'react-native';
import styles from '../components/StyleSheet';

const drawTest = () => {
  const maxYLBefore = 42;
  const maxYRBefore = 35;
  const maxYLAfter = 65;
  const maxYRAfter = 55;
  const imageSource = require('../../assets/images/headTopDownBW.png');
  const imageSource2 = require('../../assets/images/ee.png');

  return (
    <View styles={top=200}>
      <DrawingY
        maxLBefore={maxYLBefore}
        maxRBefore={maxYRBefore}
        maxLAfter={maxYLAfter}
        maxRAfter={maxYRAfter}
        TitleString = {'Rotation'}
        titleXAdd = {-120}
        titleYAdd = {-120}
        imageSource={imageSource}
        degreeAdd = {90}
        imageHeight = {340}
      />
      <View>
      <DrawingY
        maxLBefore={maxYLBefore}
        maxRBefore={maxYRBefore}
        maxLAfter={maxYLAfter}
        maxRAfter={maxYRAfter}
        YR = {'Seitenneigung'}
        imageSource={imageSource2}
        degreeAdd = {-90}
        height = {300}
      />
      </View>
    </View>
  );
};

export default drawTest;
