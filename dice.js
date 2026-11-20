const crypto = require("crypto");

function rollDice() {
    const diceValue = crypto.randomInt(1, 7);
    console.log(`🎲 Dice Rolled: ${diceValue}`);
    return diceValue;
}

function rollMultiple(times) {
    if (!Number.isInteger(times) || times <= 0) {
        console.log("Please provide a positive integer for the number of rolls.");
        return [];
    }

    const results = [];

    for (let i = 0; i < times; i++) {
        results.push(rollDice());
    }

    return results;
}

if (require.main === module) {
    const times = Number(process.argv[2]) || 1;
    rollMultiple(times);
}

module.exports = {
    rollDice,
    rollMultiple
};
