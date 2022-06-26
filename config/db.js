require('dotenv').config();
const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://localhost:27017/my_test_db');
}

main().catch((err) => console.log(err));

mongoose.connection.on('error', (err) => {
  console.log(err);
});
