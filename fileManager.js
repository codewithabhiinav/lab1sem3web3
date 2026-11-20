const fs = require("fs").promises;

async function createFile(fileName, content = "") {
    try {
        await fs.writeFile(fileName, content, "utf8");
        console.log(`File Created: ${fileName}`);
    } catch (error) {
        console.log(`Create Error: ${error.message}`);
        throw error;
    }
}

async function readFileContent(fileName) {
    try {
        const content = await fs.readFile(fileName, "utf8");
        console.log(`File Read: ${fileName}`);
        return content;
    } catch (error) {
        console.log(`Read Error: ${error.message}`);
        throw error;
    }
}

async function updateFile(fileName, content) {
    try {
        await fs.appendFile(fileName, content, "utf8");
        console.log(`File Updated: ${fileName}`);
    } catch (error) {
        console.log(`Update Error: ${error.message}`);
        throw error;
    }
}

async function deleteFile(fileName) {
    try {
        await fs.unlink(fileName);
        console.log(`File Deleted: ${fileName}`);
    } catch (error) {
        console.log(`Delete Error: ${error.message}`);
        throw error;
    }
}

module.exports = {
    createFile,
    readFileContent,
    updateFile,
    deleteFile
};
