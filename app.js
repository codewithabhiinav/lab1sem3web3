const isEven = require("./modules/isEven");
const logger = require("./modules/logger");
const fileManager = require("./fileManager");
const dice = require("./dice");

logger("Application started.");

const sampleNumber = 10;
console.log(`Is ${sampleNumber} even? ${isEven(sampleNumber)}`);

console.log("\n--- File Manager Demo ---");
fileManager.createFile("test.txt", "Hello Node.js\n")
    .then(() => fileManager.readFileContent("test.txt"))
    .then((content) => {
        console.log("File Content:", content.trim());
        return fileManager.updateFile("test.txt", "Learning fs Module\n");
    })
    .then(() => fileManager.readFileContent("test.txt"))
    .then((content) => {
        console.log("Updated Content:", content.trim());
        return fileManager.deleteFile("test.txt");
    })
    .then(() => {
        console.log("\n--- Dice Demo ---");
        dice.rollMultiple(5);
        logger("Application finished.");
    })
    .catch((error) => {
        console.log("Application Error:", error.message);
    });
