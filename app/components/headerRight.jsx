import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { avatarList } from '../config/avatarConfig';
import { Link, useRouter } from 'expo-router';
import { useProfileImage } from './ProfileImageContext';
import { useUserContext } from './userContextProvider';

const myheaderRight = () => {
  // router
  const router = useRouter();

  // User context provider
  const {
    username,
    gameLevel,
    points,
    profileImageIndex,
    sendData,
    updateUserDetails,
    updateProfileImageIndex,
    updateUsername,
    updateGameLevel,
    updatePoints,
    updateSendData,
  } = useUserContext();

  const goToProfile = () => {
    router.push('/profileScreen');
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={goToProfile}>
        {profileImageIndex !== null ? (
          <Image
            source={avatarList[profileImageIndex]}
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

export default myheaderRight;
