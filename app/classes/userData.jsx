//* this class is used to interact with the storage to get or set user data
//* it saves only user specific data
//* use save() method to save the object from storage
//* use load() method to load the object to storage
//* if u need a new property than add it into the constructor, write getter and setter and correct fromJSON(), toString() and load() methods  


import { saveUserData, getUserData } from "../services/storage.jsx";

class UserData {
  constructor(userName, reseted, picture, level, points) {
    getUserData().then((data) => {
      let myObj = null;
      try {
        myObj = JSON.parse(data);
        userName = myObj.userName;
        reseted = myObj.reseted;
        picture = myObj.picture;
        level = myObj.level;
        points = myObj.points;
      } catch (e) {}

      if (userName === undefined || userName === null) {
        userName = "Default";
      }
      if (reseted === undefined || reseted === null) {
        reseted = false;
      }
      if (picture === undefined || picture === null) {
        picture = false;
      }
      if (level === undefined || level === null) {
        level = 0;
      }
      if (points === undefined || points === null) {
        points = 0;
      }
      this.userName = userName;
      this.reseted = reseted;
      this.picture = picture;
      this.level = level;
      this.points = points;
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

  getPicture() {
    return this.picture;
  }

  setPicture(picture) {
    this.picture = picture;
  }

  setLevel(level) {
    this.level = level;
  }

  getLevel() {
    return this.level;
  }

  setPoints(points) {
    this.points = points;
  }

  getPoints() {
    return this.points;
  }

  // Other methods
  toString() {
    return `User: ${this.userName}, reseted: ${this.reseted}, picture: ${this.picture}, level: ${this.level}, points: ${this.points}`;
  }

  toJson() {
    return JSON.stringify(this);
  }

  static fromJson(json) {
    const obj = JSON.parse(json);
    return new UserData(obj.userName, obj.reseted, obj.picture, obj.level, obj.points);
  }

  async save() {
    console.log("UserDataClass Saving userData: " + this.toJson());
    await saveUserData(this.toJson());
  }

  async load() {
    let myObj = await getUserData();
    console.log("UserDataClass Loading userData: " + JSON.parse(myObj));
    return new UserData(JSON.parse(myObj).userName, JSON.parse(myObj).reseted, JSON.parse(myObj).picture, JSON.parse(myObj).level, JSON.parse(myObj).points);
  }
}

export default UserData;
