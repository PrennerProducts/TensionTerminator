import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Switch,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserData from './classes/userData';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './components/StyleSheet';
import { avatarList } from './config/avatarConfig';
import { Link, useRouter } from 'expo-router';
import GameStatusGif from './components/GameStatusGif';
import { useUserContext } from './services/userContextProvider';
import { Button } from '@rneui/themed';

const profileScreen = () => {
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
  const [isEditing, setIsEditing] = useState(false);
  // Userdata Class from storage
  const [user, setUser] = useState(new UserData());
  const [newName, setNewName] = useState('');
  //dropdown picker
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(profileImageIndex);
  // Switch
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

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
      setValue(profileImageIndex);
      await updateProfileImageIndex(user.getprofilepicture());
      await updateUsername(user.getUserName());
      await updateGameLevel(user.getLevel());
      await updatePoints(user.getPoints());
      await updateSendData(user.getSendData());
    };

    initializeUser();
  }, []);

  useEffect(() => {
    console.log(
      'Aktualisierter Wert von selectetAvatarIndex:',
      profileImageIndex
    );
  }, [profileImageIndex]);

  const handleNameChange = async () => {
    try {
      user.setUserName(newName);
      user.save();
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
      updateSendData(newSendDataValue);
      user.setSendData(newSendDataValue);
      await user.save();
    } catch (error) {
      console.log('Fehler beim Ändern von sendData:', error);
    }
  };

  const pickImage = async (selectedIndex) => {
    console.log('Ausgewählter Avatar-Index:', selectedIndex);
    if (selectedIndex >= 0 && selectedIndex < avatarList.length) {
      updateProfileImageIndex(selectedIndex);
      user.setprofilepicture(selectedIndex);
      await user.save();
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
            profileImageIndex >= 0 &&
            profileImageIndex != null &&
            profileImageIndex < avatarList.length
              ? avatarList[profileImageIndex]
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
            updateProfileImageIndex(newValue); // update User Context Provider
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
            <Button
              title="OK"
              onPress={handleNameChange}
              buttonStyle={stylesLocal.okButtonStyle}
              titleStyle={stylesLocal.okButtonText}
            />
          </View>
        ) : (
          <Text style={{ fontSize: 34, fontWeight: 'bold' }}>
            {username}
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

      <ScrollView style={{ padding: 5 }}>
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
            <Text style={stylesLocal.text}>Game-Level: {gameLevel}</Text>
          </TouchableOpacity>
        </View>
        {showGameStatusGif && (
          <GameStatusGif
            visible={showGameStatusGif}
            onClose={() => setShowGameStatusGif(false)}
          />
        )}

        {/* Points */}
        <View style={{ alignItems: 'flex-start', marginLeft: 20 }}>
          <TouchableOpacity
            onPress={handleShowGif}
            style={{ flexDirection: 'row', alignItems: 'center' }}
          >
            <Icon
              style={{ marginRight: 10 }}
              name="bullseye"
              size={24}
              color="red"
            />
            <Text style={stylesLocal.text}>Punktestand: {points}</Text>
          </TouchableOpacity>
        </View>

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
              color="green"
            />
            <Text style={stylesLocal.text}>Reminder setzen</Text>
          </TouchableOpacity>
        </View>

        {/* Meine Statistiken */}
        <View style={{ alignItems: 'flex-start', marginLeft: 20 }}>
          <TouchableOpacity
            onPress={() => {
              router.push('components/statistics');
            }}
            style={{ flexDirection: 'row', alignItems: 'center' }}
          >
            <Icon
              style={{ marginRight: 10 }}
              name="bar-chart"
              size={24}
              color="#10069F"
            />
            <Text style={stylesLocal.text}>Meine Statistiken </Text>
          </TouchableOpacity>
        </View>

        {/* Datenschutz */}
        <View style={{ alignItems: 'flex-start', marginLeft: 20 }}>
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={() => {
              router.push('components/dataProtection');
            }}
          >
            <Icon
              style={{ marginRight: 10 }}
              name="lock"
              size={24}
              color="#000"
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

        {/* <Link href={'/'} asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </Pressable>
      </Link> */}
      </ScrollView>
    </View>
  );
};

const stylesLocal = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
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
    backgroundColor: '#10069f',
    padding: 10,
    borderRadius: 5,
  },
  okButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  switchcontainer: {
    flexDirection: 'row',
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
