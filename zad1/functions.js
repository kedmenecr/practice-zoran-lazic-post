class Functions {
    constructor() {
    }
    getRandom(min, max) {
        if (typeof min === "number" && typeof max === "number") {
            console.log(Math.floor((Math.random() * (max - min) + min)));
        } else {
            console.log("The input is not valid")
        }
    }

    minIntegerFromArray(array) {
        let min = array[0]
        if (array.every(function (i) { return typeof i !== "number" })) {
            console.log("there are no numbers")
        } else {
            array.forEach(item => {
                if (typeof item === "number") {
                    if (min > item) {
                        min = item
                    }
                }
            })
        }
        console.log(min)
        return min
    }

    minIntegerFromString(string) {
        
        var reg = /\d/;
        let intArray = []
        const splitted = string.split(" ");
        splitted.forEach(item => {
            let result = item.match(reg);
            console.log(result)
        })

    }
}

module.exports = new Functions();