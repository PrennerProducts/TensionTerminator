import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Image,
  TextInput,
  Button,
  Switch,
  Modal,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { getProfileName, setProfileName } from './services/storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserData from './classes/userData';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './components/StyleSheet';
import { avatarList } from './config/avatarConfig';
import { saveUserData, getUserData } from './services/storage.jsx';
import { useProfileImage } from './components/ProfileImageContext';
import { Appointment } from './appointment';
import { Link, useRouter } from 'expo-router';
import GameStatusGif from './components/GameStatusGif';
import { useUserContext } from './components/userContextProvider';
import { UserContextProvider } from './components/userContextProvider';
const profileScreen = () => {
  // User context provider
  const {
    username,
    gameLevel,
    points,
    profileImageIndex,
    setUsername,
    setGameLevel,
    setPoints,
    setProfileImageIndex,
    updateUserDetails,
    updateProfileImageIndex,
    updateUsername,
    updateGameLevel,
    updatePoints,
  } = useUserContext();
  const [isEditing, setIsEditing] = useState(false);
  // Userdata Class from storage
  const [user, setUser] = useState(new UserData());
  const [userName, setUserName] = useState();
  const [newName, setNewName] = useState('');
  const [selectedAvatarIndex, setselectedAvatarIndex] = useState(0);
  //dropdown picker
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(selectedAvatarIndex);
  // ProfileImageContext Provider
  const { currentImageIndex, updateImageIndex } = useProfileImage();
  // Switch
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  // Send Uerdata to ErgoPhysion
  const [sendData, setSendData] = useState(true);
  //Gif GameStatus
  const [showGameStatusGif, setShowGameStatusGif] = useState(false);

  // Screen Dimensions Calculation
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  //Router
  const router = useRouter();

  useEffect(() => {
    const initializeUser = async () => {
      await user.initialize();
      setUserName(user.getUserName());
      const profileIndex = user.getprofilepicture();
      setselectedAvatarIndex(profileIndex);
      setValue(profileIndex);
      setSendData(user.getSendData());
      await updateProfileImageIndex(user.getprofilepicture());
      await updateUsername(user.getUserName());
      await updateGameLevel(user.getLevel());
      await updatePoints(user.getPoints());

      //updateImageIndex(user.getprofilepicture());
    };

    initializeUser();
  }, []);

  useEffect(() => {
    console.log(
      'Aktualisierter Wert von selectetAvatarIndex:',
      selectedAvatarIndex
    );
  }, [selectedAvatarIndex]);

  const handleNameChange = async () => {
    try {
      user.setUserName(newName);
      user.save();
      setUserName(newName);
      // User Context Provider
      updateUsername(newName);
      //updateUserName(newName);
      setIsEditing(false);
    } catch (error) {
      console.log('Fehler beim Ändern des Namens:', error);
    }
  };

  const handleSendDataChange = async () => {
    try {
      toggleSwitch();
      const newSendDataValue = !sendData;

      user.setSendData(newSendDataValue);
      await user.save();

      setSendData(newSendDataValue);
    } catch (error) {
      console.log('Fehler beim Ändern von sendData:', error);
    }
  };

  const pickImage = async (selectedIndex) => {
    console.log('Ausgewählter Avatar-Index:', selectedIndex);
    if (selectedIndex >= 0 && selectedIndex < avatarList.length) {
      setselectedAvatarIndex(selectedIndex);
      updateImageIndex(selectedIndex);
      updateProfileImageIndex(selectedIndex);
      user.setprofilepicture(selectedIndex);
      await user.save();
      // console.log(
      //   'Im Speicher steht jetz der index:: ' + user.getprofilepicture()
      // );
      // console.log(
      //   'LOGtheFuck StorageProvider getUserData: ' + (await getUserData())
      // );
    }
  };

  const itemsList = avatarList.map((image, index) => {
    return {
      label: `Avatar ${index + 1}`,
      value: index,
    };
  });

  const handleShowGif = () => {
    setShowGameStatusGif(true);
    setTimeout(() => {
      setShowGameStatusGif(false);
    }, 3000);
  };

  return (
    <View style={{ padding: 20 }}>
      {/* Avatar Bild */}
      <View
        style={{
          alignItems: 'center',
          marginBottom: 20,
          position: 'relative',
        }}
      >
        <Image
          source={
            selectedAvatarIndex >= 0 &&
            selectedAvatarIndex != null &&
            selectedAvatarIndex < avatarList.length
              ? avatarList[selectedAvatarIndex]
              : require('../assets/images/error.jpg')
          }
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginBottom: 20,
          }}
        />
        <DropDownPicker
          open={open}
          setOpen={setOpen}
          value={value}
          //setValue={setValue}
          setValue={(newValue) => {
            setValue(newValue);
            setselectedAvatarIndex(newValue); // Aktualisieren von selectedAvatarIndex
            pickImage(newValue);
          }}
          // setItems={setItems}
          items={itemsList}
          //defaultValue={selectedAvatarIndex} //entry point im DropdownPicker
          containerStyle={{ height: 150, width: 150 }}
          onChangeValue={(value) => {
            pickImage(value);
            console.log(value);
          }}
        />
      </View>

      {/* Profilname */}
      <View
        style={{
          position: 'relative',
          top: -50,
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
              autoFocus={true}
              onChangeText={(text) => setNewName(text)}
              style={stylesLocal.textInputStyle}
            />
            <TouchableOpacity
              onPress={handleNameChange}
              style={stylesLocal.okButtonStyle}
            >
              <Text style={stylesLocal.okButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={{ fontSize: 34, fontWeight: 'bold' }}>
            {userName}
            <TouchableOpacity
              style={{ marginLeft: 5 }}
              onPress={() => {
                setNewName(user.getUserName());
                setIsEditing(true);
              }}
            >
              <Icon style={{ marginLeft: 15 }} name="pencil" size={15} />
            </TouchableOpacity>
          </Text>
        )}
      </View>

      {/* Game Status */}
      <View style={{ alignItems: 'flex-start', marginLeft: 20 }}>
        <TouchableOpacity
          onPress={handleShowGif}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <Icon
            style={{ marginRight: 10 }}
            name="trophy"
            size={24}
            color="gold"
          />
          <Text style={stylesLocal.text}>Game-Level: 1</Text>
        </TouchableOpacity>
      </View>
      {showGameStatusGif && (
        <GameStatusGif
          visible={showGameStatusGif}
          onClose={() => setShowGameStatusGif(false)}
        />
      )}

      {/* Reminder setzen */}
      <View style={{ alignItems: 'flex-start', marginLeft: 20 }}>
        <TouchableOpacity
          onPress={() => {
            router.push('appointment');
          }}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <Icon
            style={{ marginRight: 10 }}
            name="calendar"
            size={24}
            color="black"
          />
          <Text style={stylesLocal.text}>Reminder setzen</Text>
        </TouchableOpacity>
      </View>

      {/* Meine Statistiken */}
      <View style={{ alignItems: 'flex-start', marginLeft: 20 }}>
        <TouchableOpacity
          onPress={() => {
            router.push('components/appointment');
          }}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <Icon
            style={{ marginRight: 10 }}
            name="bar-chart"
            size={24}
            color="black"
          />
          <Text style={stylesLocal.text}>Meine Statistiken </Text>
        </TouchableOpacity>
      </View>

      {/* Datenschutz */}
      <View style={{ alignItems: 'flex-start', marginLeft: 20 }}>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
          onPress={() => {
            router.push('components/datenschutzScreen');
          }}
        >
          <Icon
            style={{ marginRight: 10 }}
            name="lock"
            size={24}
            color="black"
          />
          <Text style={stylesLocal.text}>Datenschutzbestimmungen</Text>
        </TouchableOpacity>
      </View>

      {/* Switch */}
      <View style={stylesLocal.switchcontainer}>
        <Text style={stylesLocal.text}>Daten an ErgoPhysion senden</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#10069F' }}
          thumbColor={isEnabled ? '#979797' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleSendDataChange}
          value={isEnabled}
        />
      </View>

      <Link href={'/'} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </Pressable>
      </Link>
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparenter Hintergrund
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    marginVertical: 18,
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    minWidth: 150,
  },
  okButtonStyle: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  okButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  switchcontainer: {
    flexDirection: 'row', // Elemente nebeneinander
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#C5C5C5',
    width: '100%',
  },
  switchtext: {
    marginRight: 10,
  },
});

export default profileScreen;
