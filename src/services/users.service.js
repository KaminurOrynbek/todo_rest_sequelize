const User = require('../models/User');

async function createUser(email, password, firstName, lastName) {
  await User.create({ email, password, firstName, lastName });
}

async function findUserByEmail(email) {
  return await User.findOne({ where: { email } });
}

function getAllUsers() {
  return User.findAll();
}

module.exports = { createUser, findUserByEmail, getAllUsers };