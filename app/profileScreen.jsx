import {
  View,
  Text,
  TouchableOpacity,
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
import { Appointment } from './components/appointment';
import { Link, useRouter } from 'expo-router';
import GameStatusGif from './components/GameStatusGif';

// const avatarList = [
//   require('../../assets/images/avatar1.png'),
//   require('../../assets/images/avatar2.png'),
//   require('../../assets/images/avatar3.png'),
//   require('../../assets/images/avatar4.png'),
//   // ... weitere Avatare
// ];

const profileScreen = () => {
  const [name, setName] = useState('SpongeBob42');
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(new UserData());
  const [userName, setUserName] = useState();
  const [newName, setNewName] = useState('');
  // const [image, setImage] = useState(null);
  // const [imageList, setImageList] = useState([]);
  // const [currentImage, setCurrentImage] = useState();
  const [selectedAvatarIndex, setselectedAvatarIndex] = useState(0);
  let myImageList = [];
  //dropdown picker
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(selectedAvatarIndex);
  const { currentImageIndex, updateImageIndex } = useProfileImage();
  // Switch
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
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
      setselectedAvatarIndex(user.getprofilepicture());
      setSendData(user.getSendData());
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
      user.setprofilepicture(selectedIndex);
      await user.save();
      console.log(
        'Im Speicher steht jetz der index:: ' + user.getprofilepicture()
      );
      console.log(
        'LOGtheFuck StorageProvider getUserData: ' + (await getUserData())
      );
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
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <DropDownPicker
          open={open}
          setOpen={setOpen}
          value={value}
          setValue={setValue}
          // setItems={setItems}
          items={itemsList}
          defaultValue={currentImageIndex} //entry point im DropdownPicker
          containerStyle={{ height: 150, width: 150 }}
          // onChangeItem={(item) => pickImage(item.value)}
          onChangeValue={(value) => {
            pickImage(value);
            console.log(value);
          }}
        />
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
              <Icon style={{ marginLeft: 15 }} name="pencil" size={15} />
            </TouchableOpacity>
          </Text>
        )}
      </View>

      {/* Game Status */}
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
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
          <Text style={{ fontSize: 20 }}>Game Status: Level 1</Text>
        </TouchableOpacity>
      </View>
      {showGameStatusGif && (
        <GameStatusGif
          visible={showGameStatusGif}
          onClose={() => setShowGameStatusGif(false)}
        />
      )}

      {/* Reminder setzen */}
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <TouchableOpacity
          onPress={() => {
            router.push('components/appointment');
          }}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <Icon
            style={{ marginRight: 10 }}
            name="calendar"
            size={24}
            color="black"
          />
          <Text style={{ fontSize: 18, marginLeft: 10 }}>Reminder setzen</Text>
        </TouchableOpacity>
      </View>

      {/* Meine Statistiken */}
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
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
          <Text style={{ fontSize: 16 }}>Meine Statistiken </Text>
        </TouchableOpacity>
        {/* Hier können Sie weitere Details zu den Statistiken hinzufügen */}
      </View>

      {/* Datenschutz */}
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
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
          <Text style={{ fontSize: 18 }}>Datenschutz</Text>
        </TouchableOpacity>
      </View>

      {/* Switch */}
      <View style={styles.switchcontainer}>
        <Text style={styles.switchtext}>Daten an ErgoPhysion senden</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#10069F' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleSendDataChange}
          value={isEnabled}
        />
      </View>
      <View style={styles.switchcontainer}>
        <Text style={styles.switchtext}>Analyse und Verbesserung</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#10069F' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleSendDataChange}
          value={isEnabled}
        />
      </View>
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
});

export default profileScreen;
