function rollDice() {
    // Math.ceil(Math.random() * (1 + (maximum - minimum)))
    // Math.ceil rounds up to the nearest whole number
    return Math.ceil(Math.random() * (1 + (6 - 1))); // get a random number on a 6 sided dice
}

// This function is more accurate
function rollDice2(minimum, maximum) {
    return Math.floor(Math.random() * (1 + (maximum - minimum)) + minimum);
}

/*
for (var i = 0; i < 100; i++) {
    console.log(rollDice());
}
*/

for (var i = 0; i < 100; i++) {
    console.log(rollDice2(1, 4));
}
