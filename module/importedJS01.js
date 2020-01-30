const fs = require('fs');

console.log("this msg is coming from importedJS01");

fs.readFile('./name.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
  });

