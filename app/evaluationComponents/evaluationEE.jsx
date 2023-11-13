import React, { useEffect } from 'react';
import { View, Image, Animated } from 'react-native';

const EvaluationEE = () => {
  const rotateValue = new Animated.Value(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
        animate();
        setTimeout(() => {
            animateBack();
          }, 3500);
      }, 4000);
      return () => {
        clearInterval(intervalId);
      };
  }, []);

  const animate = ()=>{
    Animated.timing(rotateValue, {
        toValue: 45,
        duration: 1000,
        useNativeDriver: false,
      }).start();
  }

  const animateBack = ()=>{
    Animated.timing(rotateValue, {
        toValue: 0,
        duration: 500, // Animation duration in milliseconds
        useNativeDriver: false,
      }).start();
  }

  const rotateStyle = {
    transform: [{ rotate: rotateValue.interpolate({ inputRange: [0, 45], outputRange: ['0deg', '45deg'] }) }],
  };

  return (
    <View>
      <Animated.Image
        source={require('../../assets/images/ee.png')}
        style={[{ width: 100, height: 100 }, rotateStyle]}
      />
    </View>
  );
};

export default EvaluationEE;