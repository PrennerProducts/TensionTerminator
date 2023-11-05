//* this class is used to interact with the storage to get or set user data
//* it saves only user specific data
//* use save() method to save the object from storage
//* use load() method to load the object to storage
//* if u need a new property than add it into the constructor, write getter and setter and correct fromJSON(), toString() and load() methods

import { saveUserData, getUserData } from '../services/storage.jsx';

class UserData {
  constructor() {
    this.userName = 'Default';
    this.reseted = false;
    this.pictureList = null;
    this.level = 0;
    this.points = 0;
  }

  // intitialize muss nach dem erzeugen der instanz ausgeführt werden:
  //const userData = new UserData();
  //await userData.initialize();

  async initialize() {
    const data = await getUserData();
    let myObj = null;
    try {
      myObj = JSON.parse(data);
      this.userName = myObj.userName ?? 'Default';
      this.reseted = myObj.reseted ?? false;
      this.pictureList = myObj.pictureList ?? null;
      this.level = myObj.level ?? 0;
      this.points = myObj.points ?? 0;
    } catch (e) {
      console.error('Error parsing user data:', e);
    }
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

  getpictureList() {
    return this.pictureList;
  }

  getAvailableAvatars() {
    return this.availableAvatars;
  }

  setpictureList(pictureList) {
    this.pictureList = pictureList;
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
    return `User: ${this.userName}, reseted: ${this.reseted}, pictureList: ${this.pictureList}, level: ${this.level}, points: ${this.points}`;
  }

  toJson() {
    return JSON.stringify(this);
  }

  static fromJson(json) {
    const obj = JSON.parse(json);
    return new UserData(
      obj.userName,
      obj.reseted,
      obj.pictureList,
      obj.level,
      obj.points
    );
  }

  async save() {
    console.log('UserDataClass Saving userData: ' + this.toJson());
    await saveUserData(this.toJson());
  }

  async load() {
    let data = await getUserData();

    if (!data) {
      console.error('Received null or undefined data from getUserData');
      return new UserData();
    }

    try {
      let myObj = JSON.parse(data);
      console.log('UserDataClass Loading userData: ', myObj);
      return new UserData(
        myObj.userName,
        myObj.reseted,
        myObj.pictureList,
        myObj.availableAvatars,
        myObj.level,
        myObj.points
      );
    } catch (e) {
      console.error('Error parsing user data:', e);
      return new UserData(); // Bei einem Fehler gib ein Standard-UserData-Objekt zurück
    }
  }
}

export default UserData;
