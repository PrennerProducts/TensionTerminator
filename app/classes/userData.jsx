import { saveUserData, getUserData } from "../services/storage.jsx";

class UserData {
  constructor(userName, reseted) {
    getUserData().then((data) => {
      let myObj = null;
      try {
        myObj = JSON.parse(data);
        userName = myObj.userName;
        reseted = myObj.reseted;
      } catch (e) {}

      if (userName === undefined || userName === null) {
        userName = "Default";
      }
      if (reseted === undefined || reseted === null) {
        reseted = false;
      }
      this.userName = userName;
      this.reseted = reseted;
    });
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
    console.log("UserDataClass Saving userData: " + this.toJson());
    await saveUserData(this.toJson());
  }

  async load() {
    let myObj = await getUserData();
    console.log("UserDataClass Loading userData: " + JSON.parse(myObj));
    return new UserData(JSON.parse(myObj).userName, JSON.parse(myObj).reseted);
  }
}

export default UserData;
