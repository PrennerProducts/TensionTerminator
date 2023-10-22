// Diese Klasse wird benutzt um Daten zu speichern. 
// Funktionen:
//  get
//  set
//
//
import AsyncStorage from "@react-native-async-storage/async-storage";

const initData = {
    name: 'Hans',
    reset: 'false'
  }

 export const setUserData = async (Data) => {
    try {
      await AsyncStorage.setItem('@user', JSON.stringify(Data))
    } catch(e) {
      console.log(e)
    }
    console.log('UserData set.')
  }

export const getUserData = async () => {
    try {
      const Data = await AsyncStorage.getItem('@user')
      console.log("What")
      return Data != null ? JSON.parse(Data) : null
    } catch(e) {
      
      console.log(e)
    }
    console.log("Userdata loaded! ")
  }

  export const initUserData = async () => {
    try {
        await AsyncStorage.removeItem('@user')
        await AsyncStorage.setItem('@user', JSON.stringify(initData))
    } catch(e) {
      console.log(e)
    }
    console.log('UserData set.')
  }

