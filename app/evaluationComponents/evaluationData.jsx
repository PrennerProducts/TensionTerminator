export const evaluationData = {
    originScreen: '', //Name des Screens, von dem aus die Evaluierung gestartet wurde
    imageName: '', //Dateiname fuer Kontrollfoto
    exercise: 0, //Bewegungsuebung: 0 = Drehung, 1 = Neigung
    isTraining: 1, //Mit/Ohne Training
    beforeAfterTraining: 0, //Vor/Nach Training
    shouldTakePictures: true, //Zum Deaktivieren der Foto-Logik
    //Maximale Winkel
    maxYL: 0,    maxYR: 0,    maxRL: 0,    maxRR: 0,
    //Maximale Winkel VOR Training
    maxYLBefore: 0,    maxYRBefore: 0,    maxRLBefore: 0,    maxRRBefore: 0,
    //Maximale Winkel NACH Training
    maxYLAfter: 0,    maxYRAfter: 0,    maxRLAfter: 0,    maxRRAfter: 0,
    //Werte zuruecksetzen
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
    //Ausgabe auf Konsole
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