// Diese Klasse wird benutzt um Daten zu speichern.
// Funktionen:
//  get
//  set
//
//
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserData from "../classes/userData";

export const setUserData = async (Data) => {
  try {
    await AsyncStorage.setItem("@user", JSON.stringify(Data));
  } catch (e) {
    console.log(e);
  }
  console.log("UserData set.");
};

export const getUserData = async () => {
  try {
    const Data = await AsyncStorage.getItem("@user");
    console.log("getUserData: " + Data);
    return new UserData(JSON.parse(Data).userName, JSON.parse(Data).reseted);
  } catch (e) {
    console.log("getUserData: " + e);
    initUserData();
  }
  // try {
  //   const Data = await AsyncStorage.getItem('@user')
  //   console.log("What")
  //   return Data != null ? JSON.parse(Data) : null
  // } catch(e) {

  //   console.log(e)
  // }
  // console.log("Userdata loaded! ")
};

export const initUserData = async () => {
  try {
    await AsyncStorage.removeItem("@user");
    console.log("InitUserData");
    await AsyncStorage.setItem(
      "@user",
      JSON.stringify(new UserData("MySuperGamerTag", false))
    );
  } catch (e) {
    console.log(e);
  }
  console.log("UserData set.");
};

export const resetAllData = async () => {
  try {
    await AsyncStorage.removeItem("@user");
    await AsyncStorage.clear();
    console.log("resetAllData");
  } catch (e) {
    console.log(e);
  }
  console.log("All Data reseted.");
};
