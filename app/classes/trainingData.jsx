/*
//todo: connect trainingdata with the id

import { saveUserData, getUserData } from '../services/storage.jsx';
import uuid from 'react-native-uuid';

class TrainingData {
  constructor(
    ID,
    whatIsHurtingBefore,
    howItIsHurtingBefore,
    howMuchIsItHurtingBefore,
    evaluationAngleLeftBefore,
    evaluationAngleRightBefore,
    trainingRight,
    trainingWrong,
    trainingTime,
    evaluationAngleLeftAfter,
    evaluationAngleRightAfter,
    howMuchIsItHurtingAfter
  ) {
    getUserData().then((data) => {
      let myObj = null;
      try {
        myObj = JSON.parse(data);
        ID = myObj.ID;
      } catch (e) {}

      if (ID === undefined || ID === null) {
        ID = uuid.v4();
      }

      this.ID = userName;
      this.whatIsHurtingBefore = whatIsHurtingBefore;
      this.howItIsHurtingBefore = howItIsHurtingBefore;
      this.howMuchIsItHurtingBefore = howMuchIsItHurtingBefore;
      this.evaluationAngleLeftBefore = evaluationAngleLeftBefore;
      this.evaluationAngleRightBefore = evaluationAngleRightBefore;
      this.trainingRight = trainingRight;
      this.trainingWrong = trainingWrong;
      this.trainingTime = trainingTime;
      this.evaluationAngleLeftAfter = evaluationAngleLeftAfter;
      this.evaluationAngleRightAfter = evaluationAngleRightAfter;
      this.howMuchIsItHurtingAfter = howMuchIsItHurtingAfter;
    });
  }

  // Getters
  getID() {
    return this.ID;
  }

  // Setters
  setID(ID) {
    this.ID = ID;
  }

  getwhatIsHurtingBefore() {
    return this.whatIsHurtingBefore;
  }

  setwhatIsHurtingBefore(whatIsHurtingBefore) {
    this.whatIsHurtingBefore = whatIsHurtingBefore;
  }

  gethowItIsHurtingBefore() {
    return this.howItIsHurtingBefore;
  }

  sethowItIsHurtingBefore(howItIsHurtingBefore) {
    this.howItIsHurtingBefore = howItIsHurtingBefore;
  }

  sethowMuchIsItHurtingBefore(howMuchIsItHurtingBefore) {
    this.howMuchIsItHurtingBefore = howMuchIsItHurtingBefore;
  }

  gethowMuchIsItHurtingBefore() {
    return this.howMuchIsItHurtingBefore;
  }

  setevaluationAngleLeftBefore(evaluationAngleLeftBefore) {
    this.evaluationAngleLeftBefore = evaluationAngleLeftBefore;
  }

  getevaluationAngleLeftBefore() {
    return this.evaluationAngleLeftBefore;
  }

  setevaluationAngleRightBefore(evaluationAngleRightBefore) {
    this.evaluationAngleRightBefore = evaluationAngleRightBefore;
  }

  getevaluationAngleRightBefore() {
    return this.evaluationAngleRightBefore;
  }

  settrainingRight(trainingRight) {
    this.trainingRight = trainingRight;
  }

  gettrainingRight() {
    return this.trainingRight;
  }

  settrainingWrong(trainingWrong) {
    this.trainingWrong = trainingWrong;
  }

  gettrainingWrong() {
    return this.trainingWrong;
  }

  settrainingTime(trainingTime) {
    this.trainingTime = trainingTime;
  }

  gettrainingTime() {
    return this.trainingTime;
  }

  setevaluationAngleLeftAfter(evaluationAngleLeftAfter) {
    this.evaluationAngleLeftAfter = evaluationAngleLeftAfter;
  }

  getevaluationAngleLeftAfter() {
    return this.evaluationAngleLeftAfter;
  }

  setevaluationAngleRightAfter(evaluationAngleRightAfter) {
    this.evaluationAngleRightAfter = evaluationAngleRightAfter;
  }

  getevaluationAngleRightAfter() {
    return this.evaluationAngleRightAfter;
  }

  sethowMuchIsItHurtingAfter(howMuchIsItHurtingAfter) {
    this.howMuchIsItHurtingAfter = howMuchIsItHurtingAfter;
  }

  gethowMuchIsItHurtingAfter() {
    return this.howMuchIsItHurtingAfter;
  }

  // Other methods
  toString() {
    return `ID: ${this.ID}, whatIsHurtingBefore: ${this.whatIsHurtingBefore}, howItIsHurtingBefore: ${this.howItIsHurtingBefore}, howMuchIsItHurtingBefore: ${this.howMuchIsItHurtingBefore}, evaluationAngleLeftBefore: ${this.evaluationAngleLeftBefore},
    evaluationAngleRightBefore: ${this.evaluationAngleRightBefore}, trainingRight: ${this.trainingRight}, trainingWrong: ${this.trainingWrong}, trainingTime: ${this.trainingTime}, evaluationAngleLeftAfter: ${this.evaluationAngleLeftAfter}, evaluationAngleRightAfter: ${this.evaluationAngleRightAfter}, howMuchIsItHurtingAfter: ${this.howMuchIsItHurtingAfter}`;
  }

  toJson() {
    return JSON.stringify(this);
  }

  async save() {
    console.log('TrainingDataClass Saving trainingData: ' + this.toJson());
    await saveTrainingData(this.ID, this.toJson());
  }

  async load() {
    let myObj = await getTrainingData(this.ID);
    console.log('TrainingDataClass Loading trainingData: ' + JSON.parse(myObj));
    return new TrainingData(
      JSON.parse(myObj).ID,
      JSON.parse(myObj).whatIsHurtingBefore,
      JSON.parse(myObj).howItIsHurtingBefore,
      JSON.parse(myObj).howMuchIsItHurtingBefore,
      JSON.parse(myObj).evaluationAngleLeftBefore,
      JSON.parse(myObj).evaluationAngleRightBefore,
      JSON.parse(myObj).trainingRight,
      JSON.parse(myObj).trainingWrong,
      JSON.parse(myObj).trainingTime,
      JSON.parse(myObj).evaluationAngleLeftAfter,
      JSON.parse(myObj).evaluationAngleRightAfter,
      JSON.parse(myObj).howMuchIsItHurtingAfter
    );
  }
}

export default TrainingData;
*/
