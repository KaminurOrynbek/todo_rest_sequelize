const User = require('../models/User');

async function createUser(email, password, name) {
  try {
    await User.create({ email, password, name });
  } catch (error) {
    throw new Error(error.message);
  }
  
}

async function findUserByEmail(email) {
  return await User.findOne({ where: { email } });
}

function getAllUsers() {
  return User.findAll();
}

module.exports = { createUser, findUserByEmail, getAllUsers };