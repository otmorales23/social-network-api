const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomAssignments } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  await User.deleteMany({});


  // Create empty array to hold the students
  const users = [
    {
      username: "Ollie",
      email: "oliverwills0227@gmail.com"
    },
    {
      username: "Arthur",
      email: "arthur@email.com"
    }
  ];

  await User.collection.insertMany(users);


  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
