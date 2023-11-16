export const painData = {
    painRegion: 0,
    painType: 0,
    painIntensityBefore: 0,
    painIntensityAfter: 0,
    beforeAfter: 0,
    painToString: '',
    resetValues: function() {
        this.painRegion = 0;
        this.painType = 0;
        this.painIntensityBefore = 0;
        this.painIntensityAfter = 0;
        this.beforeAfter = 0;
        this.painToString = '';
    },
    printValues: function() {
        console.log(
            this.painRegion,
            this.painType,
            this.painIntensityBefore,
            this.painIntensityAfter,
            this.painToString
            )
    }
}