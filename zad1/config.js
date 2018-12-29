class Config {
    constructor() {
        this.randomData = {
            min: 1,
            max: 10
        };
        this.minArray = [
            5,
            3,
            2,
            "bok",
            "ne",
            10
        ];
        this.string = "Danas, 17tog Septembra, bice hladnije nego juce u 20h, 16og Septembra";
    }
}

module.exports = new Config();