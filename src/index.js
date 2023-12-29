const fs = require("fs/promises");
const fileName = "myfile.txt";
const fileContent = "Newton School";

const writeFile = async (fileName, fileContent) => {
  try {
    // Check if the file already exists
    await fs.access(fileName);
    console.log(`${fileName} already exists. Skipping write operation`);
  } catch (error) {
    // If the file doesn't exist, create it and write the content
    await fs.writeFile(fileName, fileContent);
    console.log(`File ${fileName} created and data written successfully!`);
  }
};

module.exports = writeFile;
