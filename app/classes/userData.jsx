import { saveUserData, getUserData } from "../services/storage.jsx";

class UserData {
  constructor(userName, reseted) {
    this.userName = userName;
    this.reseted = reseted;
  }

  // Getters
  getUserName() {
    return this.userName;
  }

  // Setters
  setUserName(userName) {
    this.userName = userName;
  }

  getReseted() {
    return this.reseted;
  }

  setReseted(reseted) {
    this.reseted = reseted;
  }

  // Other methods
  toString() {
    return `User: ${this.userName}, reseted: ${this.reseted}`;
  }

  toJson() {
    return JSON.stringify(this);
  }

  static fromJson(json) {
    const obj = JSON.parse(json);
    return new UserData(obj.userName, obj.reseted);
  }

  async save() {
    console.log("UserDataClass Saving userData: " + this.toString());
    await saveUserData(this.toString());
  }

  async load() {
    console.log("UserDataClass Loading userData");
    let myObj = await getUserData();
    this.userName = myObj.userName;
    this.reseted = myObj.reseted;
  }
}

export default UserData;
