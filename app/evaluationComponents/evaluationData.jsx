export const evaluationData = {
    originScreen: '',
    imageName: '',
    exercise: 0,
    isTraining: 0,
    beforeAfterTraining: 0,
    shouldTakePictures: 1,
    maxYL: 0,
    maxYR: 0,
    maxRL: 0,
    maxRR: 0,
    maxYLBefore: 0,
    maxYRBefore: 0,
    maxRLBefore: 40,
    maxRRBefore: 55,
    maxYLAfter: 60,
    maxYRAfter: 70,
    maxRLAfter: 90,
    maxRRAfter: 90,
    resetValues: function() {
        this.originScreen = '';
        this.imageName = '';
        this.exercise = 0;
        this.isTraining = 0;
        this.maxYL = 0;
        this.maxYR = 0;
        this.maxRL = 0;
        this.maxRR = 0;
        this.maxYLBefore = 0;
        this.maxYRBefore = 0;
        this.maxRLBefore = 0;
        this.maxRRBefore = 0;
        this.maxYLAfter = 0;
        this.maxYRAfter = 0;
        this.maxRLAfter = 0;
        this.maxRRAfter = 0;
    },
    printValues: function() {
        console.log(
            this.originScreen, 
            this.imageName, 
            this.exercise, 
            this.isTraining, 
            this.maxYL, 
            this.maxYR, 
            this.maxRL, 
            this.maxRR,
            this.maxYLBefore,
            this.maxYRBefore,
            this.maxRLBefore,
            this.maxRRBefore,
            this.maxYLAfter,
            this.maxYRAfter,
            this.maxRLAfter,
            this.maxRRAfter)
    }
}