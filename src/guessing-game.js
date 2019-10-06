class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.ceil(this.min+Math.abs(this.min-this.max)/2);
    }

    lower() {
        this.max = Math.ceil(this.min+Math.abs(this.min-this.max)/2);
    }

    greater() {
        this.min += Math.ceil(Math.abs(this.min-this.max)/2);
    }
}

module.exports = GuessingGame;
