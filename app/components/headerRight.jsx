import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { avatarList } from '../config/avatarConfig';
import { Link, useRouter } from 'expo-router';
import { useProfileImage } from './ProfileImageContext';

const myheaderRight = () => {
  // router
  const router = useRouter();
  // useProfileImage Context
  const { currentImageIndex, updateImageIndex } = useProfileImage();

  const goToProfile = () => {
    router.push('/profileScreen');
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={goToProfile}>
        {currentImageIndex !== null ? (
          <Image
            source={avatarList[currentImageIndex]}
            style={{
              width: 40,
              height: 40,
              borderRadius: 50,
              margin: 15,
            }}
          />
        ) : (
          <Icon name="user" size={40} color="#fff" style={{ margin: 15 }} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const myPaht = () => {
  // useProfileImage Context
  const { currentImageIndex, updateImageIndex } = useProfileImage();
  return <Text></Text>;
};

export default myheaderRight;
