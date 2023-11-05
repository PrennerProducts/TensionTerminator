import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Button,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { getProfileName, setProfileName } from '../services/storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';

import UserData from '../classes/userData';
import DropDownPicker from 'react-native-dropdown-picker';

const profileScreen = () => {
  const [name, setName] = useState('SpongeBob42');
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(new UserData());
  const [userName, setUserName] = useState();
  const [newName, setNewName] = useState('');
  const [image, setImage] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [currentImage, setCurrentImage] = useState();
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  useEffect(() => {
    const initializeUser = async () => {
      await user.initialize();
      setUserName(user.getUserName());
    };

    initializeUser();
  }, []);

  const handleNameChange = async () => {
    try {
      user.setUserName(newName);
      await user.save();
      setUserName(newName);
      setIsEditing(false);
    } catch (error) {
      console.log('Fehler beim Ändern des Namens:', error);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      // Speichern Sie das Bild-URI irgendwo, z.B. in AsyncStorage oder in einer Datenbank
    }
  };

  return (
    <View style={{ padding: 20 }}>
      {/* Avatar Bild */}
      <View
        style={{ alignItems: 'center', marginBottom: 20, position: 'relative' }}
      >
        <Image
          source={
            image ? { uri: image } : require('../../assets/images/avatar.png')
          }
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: '60%',
            bottom: 0,
          }}
          onPress={pickImage}
        >
          <Icon name="pencil" size={30} />
        </TouchableOpacity>
      </View>

      {/* Profilname */}
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        {isEditing ? (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TextInput
              value={newName}
              placeholder="Neuen Namen eingeben"
              onChangeText={(text) => setNewName(text)}
            />
            <TouchableOpacity onPress={handleNameChange}>
              <Text>OK</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={{ fontSize: 24 }}>
            Username: {userName}
            <TouchableOpacity
              style={{ marginLeft: 5 }}
              onPress={() => {
                setNewName(user.getUserName());
                setIsEditing(true);
              }}
            >
              <Icon name="pencil" size={15} />
            </TouchableOpacity>
          </Text>
        )}
      </View>

      {/* Game Status */}
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Text style={{ fontSize: 20 }}>Game Status: Level 1</Text>
      </View>

      {/* Reminder setzen */}
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <TouchableOpacity>
          <Text style={{ fontSize: 18 }}>Reminder setzen</Text>
        </TouchableOpacity>
      </View>

      {/* Meine Statistiken */}
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Text style={{ fontSize: 16 }}>Meine Statistiken: </Text>
        {/* Hier können Sie weitere Details zu den Statistiken hinzufügen */}
      </View>

      {/* Datenschutz */}
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <TouchableOpacity>
          <Text style={{ fontSize: 18 }}>Datenschutz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default profileScreen;
