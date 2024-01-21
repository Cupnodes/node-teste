const { argv } = require('node:process');

const podre=false

// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});