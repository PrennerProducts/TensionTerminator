import React, { useEffect } from 'react';
import { View, Image, Animated } from 'react-native';

const DrawingR = () => {
  const rotateValue = new Animated.Value(0);

  useEffect(() => {
    // Rotate the image by 45 degrees
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
        duration: 1000, // Animation duration in milliseconds
        useNativeDriver: false,
      }).start();
  }

  const animateBack = ()=>{
    Animated.timing(rotateValue, {
        toValue: 0,
        duration: 10, // Animation duration in milliseconds
        useNativeDriver: false,
      }).start();
  }

  const rotateStyle = {
    transform: [{ rotate: rotateValue.interpolate({ inputRange: [0, 45], outputRange: ['0deg', '45deg'] }) }],
  };

  return (
    <View>
      <Animated.Image
        source={require('../../assets/logo.png')}
        style={[{ width: 200, height: 200 }, rotateStyle]}
      />
    </View>
  );
};

export default DrawingR;