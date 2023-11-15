import { View, Text } from 'react-native';
import React, { createContext, useState, useContext } from 'react';

// 1. Create  Context
const UserContext = createContext();

// 2. Use Context
export const useUserContext = () => useContext(UserContext);

// 3. Define  Provider
export const UserContextProvider = ({ children }) => {
  const [username, setUsername] = useState(null);
  const [gameLevel, setGameLevel] = useState(null);
  const [points, setPoints] = useState(null);
  const [profileImageIndex, setProfileImageIndex] = useState(null);
  const [sendData, setSendData] = useState(null);

  const updateUserDetails = (
    newUsername,
    newGameLevel,
    newPoints,
    newIndex,
    sendData
  ) => {
    setUsername(newUsername);
    setGameLevel(newGameLevel);
    setPoints(newPoints);
    setProfileImageIndex(newIndex);
    setSendData(sendData);
  };

  const updateProfileImageIndex = (profileImageIndex) => {
    setProfileImageIndex(profileImageIndex);
  };

  const updateUsername = (username) => {
    setUsername(username);
  };
  const updateGameLevel = (gameLevel) => {
    setGameLevel(gameLevel);
  };
  const updatePoints = (points) => {
    setPoints(points);
  };
  const updateSendData = (sendData) => {
    setSendData(sendData);
  };

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        gameLevel,
        setGameLevel,
        points,
        setPoints,
        profileImageIndex,
        setProfileImageIndex,
        updateProfileImageIndex,
        updateUsername,
        updateGameLevel,
        updatePoints,
        sendData,
        updateSendData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
