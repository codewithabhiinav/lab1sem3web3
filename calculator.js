const operation = process.argv[2];
const a = Number(process.argv[3]);
const b = Number(process.argv[4]);

if (!operation || Number.isNaN(a) || Number.isNaN(b)) {
    console.log("Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>");
    process.exit(1);
}

let result;

switch (operation.toLowerCase()) {
    case "add":
        result = a + b;
        break;
    case "subtract":
        result = a - b;
        break;
    case "multiply":
        result = a * b;
        break;
    case "divide":
        if (b === 0) {
            console.log("Error: Division by zero is not allowed.");
            process.exit(1);
        }
        result = a / b;
        break;
    default:
        console.log("Error: Invalid operation.");
        console.log("Available operations: add, subtract, multiply, divide");
        process.exit(1);
}

console.log(`Result: ${result}`);
