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

const profileScreen = () => {
  const [constMyUserName, constSetMyUserName] = React.useState('');
  const [userData, setUserData] = React.useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const [image, setImage] = useState(null);

  const user = new UserData();

  console.log('MyUserDate: ' + userData);
  // useEffect(() => {
  //   const fetchProfileName = async () => {
  //     try {
  //       const fetchedName = await getProfileName();
  //       if (fetchedName !== null) {
  //         setName(fetchedName);
  //       } else {
  //         console.log(
  //           'Name nicht gefunden, jetz setzen wir einen Defaultnamen (SpongeBob42)'
  //         );
  //         setName(name);
  //       }
  //     } catch (error) {
  //       console.log('Fehler beim Abrufen des Namens:', error);
  //     }
  //   };

  //   fetchProfileName();
  // }, []);

  useEffect(() => {
    const loadData = async () => {
      // Hier laden Sie userData aus dem Speicher und setzen es.
      const loadedData = await user.load(); // Annahme, dass `user.load()` die gespeicherten Daten lädt
      setUserData(loadedData);
    };

    loadData();
  }, []);

  const handleNameChange = async () => {
    try {
      user.setUserName(newName);
      await user.save();
      setUserData({ ...userData, userName: newName });
      setIsEditing(false);
    } catch (error) {
      console.log('Fehler beim Ändern des Namens:', error);
    }
  };

  useEffect(() => {
    const initializeUserData = async () => {
      try {
        await user.load();
        setUserData(user);
        constSetMyUserName(user.getUserName()); // Setzen Sie den initialen Zustand des Benutzernamens
      } catch (error) {
        console.log('Fehler beim Initialisieren der UserData:', error);
      }
    };

    initializeUserData();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      userData.setPicture(result.uri);
      await userData.save();
      setUserData({ ...userData }); // Erneutes Rendern der Komponente erzwingen
    }
  };
  console.log('MyUserDate: ' + userData);

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
          <Icon name="pencil" size={20} />
        </TouchableOpacity>
      </View>

      {/* Profilname
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        {isEditing ? (
          <TextInput
            value={newName}
            placeholder="Neuen Namen eingeben"
            onChangeText={(text) => setNewName(text)}
            onSubmitEditing={handleNameChange}
          />
        ) : (
          <Text style={{ fontSize: 24 }}>
            Username: {name}{' '}
            <TouchableOpacity
              style={{ marginLeft: 5 }}
              onPress={() => setIsEditing(!isEditing)}
            >
              <Icon name="pencil" size={30} />
            </TouchableOpacity>
          </Text>
        )}
      </View> */}
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
            Username: {userData ? userData.getUserName() : 'Lädt...'}
            <TouchableOpacity
              style={{ marginLeft: 5 }}
              onPress={() => {
                setNewName(userData.getUserName());
                setIsEditing(true);
              }}
            >
              <Icon name="pencil" size={30} />
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
