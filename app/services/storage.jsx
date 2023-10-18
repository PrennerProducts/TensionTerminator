// import * as SecureStore from "expo-secure-store";
// import "react-native-get-random-values";
// import { v4 as uuidv4 } from "uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

//DemoStorageFuctions. Probably to change

//Generate an UniqueID- Should be unique enough for our purposes
// export const myDeviceID = async () => {
//   let uuid = uuidv4();
//   console.log("MyDeviceIDUUID: ", uuid);
//   let fetchUUID = await SecureStore.getItemAsync("secure_deviceid");
//   //if user has already signed up prior
//   if (fetchUUID !== null) {
//     if (fetchUUID.includes("\\")) {
//       await SecureStore.deleteItemAsync("secure_deviceid");
//     }
//     uuid = fetchUUID;
//   } else {
//     await SecureStore.setItemAsync("secure_deviceid", uuid);
//   }

//   return uuid;
// };

// Save Data to ExpoSecureStore
// export const saveToSecureStore = async (key, value) => {
//   if (typeof value === "boolean") {
//     console.log("Boolean value detected", value.toString());
//     value = value.toString();
//   }

//   try {
//     await SecureStore.setItemAsync(key, value);
//     console.log("SecureData " + key + " erfolgreich gespeichert!");
//   } catch (error) {
//     console.log("Fehler beim Speichern der SecureData: ", error);
//   }
// };

//GetData from ExpoSecureStore
// export const getFromSecureStore = async (key) => {
//   let result = await SecureStore.getItemAsync(key);
//   console.log("getFromSecureStore: " + key + " " + result);
//   console.log("getFromSecureStore: " + typeof result);
//   if (result != null) {
//     if (result === "true") {
//       console.log("got true");
//       return true;
//     } else if (result === "false") {
//       console.log("got false");
//       return false;
//     } else {
//       console.log("got something else");
//       return result;
//     }
//   } else {
//     return null;
//   }
// };

//CleanUp SecureStore -> we need to add every key because SecureStore has no DeleteAllkeys() function
// export const cleanUpSecureStore = async () => {
//   const keys = ["key"];
//   keys.forEach(async (key) => {
//     console.log("Deleting: ", key);
//     await SecureStore.deleteItemAsync(key);
//   });
// };

//AsyncStorage SavingFunctions
// BoolValues will be saved as String. This is a workaround
export const saveData = async (key, value) => {
  if (typeof value === "boolean") {
    console.log("Boolean value detected", value.toString());
    value = value.toString();
  }

  try {
    await AsyncStorage.setItem(key, value);
    console.log("Daten " + key + " erfolgreich gespeichert!");
  } catch (error) {
    console.log("Fehler beim Speichern der Daten: ", error);
  }
};

export const getData = async (key) => {
  try {
    let value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log("Daten gefunden: ", key);
      if (value === "true") {
        value = true;
      } else if (value === "false") {
        value = false;
      }
      return value;
    } else {
      console.log("Daten nicht gefunden", key);
      return null;
    }
  } catch (error) {
    console.log("Fehler beim Abrufen der Daten: ", error);
    return null;
  }
};

//AsyncStorage Remove Functions for a single key
export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log("Daten erfolgreich gelöscht!");
  } catch (error) {
    console.log("Fehler beim Löschen der Daten: ", error);
  }
};

//AsyncStorage Remove Functions for multiple keys
export const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
    await cleanUpSecureStore();
    console.log("Alle Daten erfolgreich gelöscht!");
  } catch (error) {
    console.log("Fehler beim Löschen aller Daten: ", error);
  }
};
