export const evaluationData = {
    originScreen: '',
    imageName: '',
    exercise: 0,
    isTraining: 1,
    beforeAfterTraining: 0,
    shouldTakePictures: true,
    maxYL: 0,
    maxYR: 0,
    maxRL: 0,
    maxRR: 0,
    maxYLBefore: 50,
    maxYRBefore: 70,
    maxRLBefore: 45,
    maxRRBefore: 65,
    maxYLAfter: 44,
    maxYRAfter: 66,
    maxRLAfter: 90,
    maxRRAfter: 90,
    resetValues: function() {
        this.originScreen = '';
        this.imageName = '';
        this.exercise = 0;
        this.isTraining = 0;
        this.beforeAfterTraining = 0;
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
            'origin Screen: ', this.originScreen, 
            '\nImage Name: ', this.imageName, 
            '\nExercise: ', this.exercise, 
            '\nIsTraining: ', this.isTraining, 
            '\nBeforeAfter: ', this.beforeAfterTraining,
            '\nMaxYL: ', this.maxYL, 
            '\nMaxYR: ',this.maxYR, 
            '\nMaxRL: ',this.maxRL, 
            '\nMaxRR: ',this.maxRR,
            '\nMax Values Before: ',this.maxYLBefore,
            this.maxYRBefore,
            this.maxRLBefore,
            this.maxRRBefore,
            '\nMax Values After: ', this.maxYLAfter,
            this.maxYRAfter,
            this.maxRLAfter,
            this.maxRRAfter)
    }
}