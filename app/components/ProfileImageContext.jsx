import React, { createContext, useState, useContext } from 'react';

const ProfileImageContext = createContext();

export const useProfileImage = () => useContext(ProfileImageContext);

export const ProfileImageProvider = ({ children }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const updateImageIndex = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <ProfileImageContext.Provider
      value={{ currentImageIndex, updateImageIndex }}
    >
      {children}
    </ProfileImageContext.Provider>
  );
};
