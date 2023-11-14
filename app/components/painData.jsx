export const painData = {
    painRegion: 0,
    painType: 0,
    painIntensityBefore: 0,
    painIntensityAfter: 0,
    resetValues: function() {
        this.painRegion = 0;
        this.painType = 0;
        this.painIntensityBefore = 0;
        this.painIntensityAfter = 0;
    },
    printValues: function() {
        console.log(
            this.painRegion,
            this.painType,
            this.painIntensityBefore,
            this.painIntensityAfter
            )
    }
}