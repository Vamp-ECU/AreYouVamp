class VampireModel {
    constructor() {
        this.thresholds = {
            shadow: 4,
            complexion: 3,
            garlic: 3
        };
    }

    isVampire(shadow, complexion, garlic, accent) {
        const score = (shadow === 'yes' ? 0 : 4) +
                      (complexion === 'pale' ? 3 : 0) +
                      (garlic === 'no' ? 3 : 0);
        return score > 6 ? 'Yes' : 'No';
    }
}
