const fs = require('fs');
const path = require('path');


function getAllJsonFilePathInFolder(folderPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        reject(err);
        return;
      }

      const jsonFiles = files.filter(file => path.extname(file).toLowerCase() === '.json');
      const filePaths = jsonFiles.map(file => path.join(folderPath, file));

      resolve(filePaths);
    });
  });
}

module.exports = { getAllJsonFilePathInFolder }