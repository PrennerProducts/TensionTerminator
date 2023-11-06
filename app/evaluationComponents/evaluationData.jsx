export const evaluationData = {
    originScreen: '',
    imageName: '',
    exercise: 0,
    isTraining: 0,
    beforeAfterTraining: 0,
    maxYL: 0,
    maxYR: 0,
    maxRL: 0,
    maxRR: 0,
    maxYLAfter: 0,
    maxYRAfter: 0,
    maxRLAfter: 0,
    maxRRAfter: 0,
    resetValues: function() {
        this.originScreen = '';
        this.imageName = '';
        this.exercise = 0;
        this.isTraining = 0;
        this.maxYL = 0;
        this.maxYR = 0;
        this.maxRL = 0;
        this.maxRR = 0;
        this.maxYLAfter = 0;
        this.maxYRAfter = 0;
        this.maxRLAfter = 0;
        this.maxRRAfter = 0;
    }
}