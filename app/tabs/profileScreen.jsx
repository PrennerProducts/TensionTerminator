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
  const [selectedAvatar, setSelectedAvatar] = useState(0);

  //dropdown picker
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  useEffect(() => {
    const initializeUser = async () => {
      await user.initialize();
      setUserName(user.getUserName());
      setImageList(user.getpictureList());
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

  const pickImage = (selectedIndex) => {
    console.log('Ausgewählter Avatar-Index:', selectedIndex);
    setSelectedAvatar(selectedIndex);
  };

  const avatars = [
    require('../../assets/images/avatar.png'),
    require('../../assets/images/avatar1.jpg'),
  ];

  return (
    <View style={{ padding: 20 }}>
      {/* Avatar Bild */}
      <View
        style={{
          alignItems: 'center',
          marginBottom: 20,
          position: 'relative',
          zIndex: 1,
          elevation: 1,
          width: '100%',
        }}
      >
        <Image
          source={
            typeof selectedAvatar === 'number'
              ? avatars[selectedAvatar]
              : require('../../assets/images/avatar.png')
          }
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <DropDownPicker
          open={open}
          setOpen={setOpen}
          value={value}
          setValue={setValue}
          // setItems={setItems}
          items={[
            { label: 'Avatar 1', value: 0 },
            { label: 'Avatar 2', value: 1 },
          ]}
          defaultValue={'Hallo'}
          containerStyle={{ height: 150, width: 150 }}
          // onChangeItem={(item) => pickImage(item.value)}
          onChangeValue={(value) => {
            pickImage(value);
            console.log(value);
          }}
        />
        {/* <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        /> */}
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
