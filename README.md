# Smart Utility Toolkit

Lab Assignment 1 – Web Dev III (Node.js & Express Backend), Unit–1

This project implements the assignment requirements using only Node.js core modules.

## Requirements covered

1. CLI calculator using `process.argv`
   - addition
   - subtraction
   - multiplication
   - division
   - invalid-input handling

2. Custom reusable modules
   - `modules/isEven.js`
   - `modules/logger.js`

3. Basic HTTP server using `http`
   - `/`
   - `/about`
   - `/contact`
   - 404 for invalid routes

4. File manager using `fs`
   - create → `writeFile()`
   - read → `readFile()`
   - update → `appendFile()`
   - delete → `unlink()`

5. Random dice generator using `crypto`
   - values from 1–6
   - multiple rolls using a loop

6. Console logging for execution flow and errors.

## Run the project

### Calculator

```bash
node calculator.js add 10 5
node calculator.js subtract 10 5
node calculator.js multiply 10 5
node calculator.js divide 10 5
```

### Custom modules + file manager + dice demo

```bash
node app.js
```

### Dice generator

```bash
node dice.js
node dice.js 5
```

### HTTP server

```bash
node server.js
```

Then open:

- http://localhost:3000/
- http://localhost:3000/about
- http://localhost:3000/contact
- http://localhost:3000/anything

Stop the server with `Ctrl + C`.

## Restrictions

No external npm packages, Express.js, third-party frameworks, or database are required.
