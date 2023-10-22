class UserData {
  constructor(userName, reseted) {
    (this.userName = userName), (this.reseted = reseted);
  }

  getUserName() {
    return this.userName;
  }

  getReseted() {
    return this.reseted;
  }

  setUserName(userName) {
    this.userName = userName;
  }

  setReseted(reseted) {
    this.reseted = reseted;
  }

  toString() {
    return "User: " + this.userName + " Reseted: " + this.reseted;
  }

  toJson() {
    return JSON.stringify(this);
  }

  static fromJson(json) {
    var obj = JSON.parse(json);
    return new UserData(obj.userName, obj.reseted);
  }
}

export default UserData;
