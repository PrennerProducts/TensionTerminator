// Diese Klasse wird benutzt um Daten zu speichern.
// Funktionen:
//  get
//  set
//
//
import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveUserData = async (userData) => {
  try {
    await AsyncStorage.setItem("@user", userData);
  } catch (e) {
    console.log(e);
  }
  console.log("StorageProvider UserData set.");
};

export const getUserData = async () => {
  try {
    const Data = await AsyncStorage.getItem("@user");
    console.log("StorageProvider getUserData: " + Data);
    return Data;
  } catch (e) {
    console.log("StorageProvider getUserData: " + e);
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

// export const initUserData = async () => {
//   try {
//     await AsyncStorage.removeItem("@user");
//     console.log("InitUserData");
//     await AsyncStorage.setItem(
//       "@user",
//       JSON.stringify(new UserData("MySuperGamerTag", false))
//     );
//   } catch (e) {
//     console.log(e);
//   }
//   console.log("UserData set.");
// };

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
