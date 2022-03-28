const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  // console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV == "test") {
    await mongoose.connect('mongodb://localhost:27017/testDb');
    console.log("Mongoose connected with test Database!")
  } else {
    await mongoose.connect('mongodb://localhost:27017/');
    console.log("Mongoose connected !")
  }
  
}

module.exports = main;