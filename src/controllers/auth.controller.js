const { register: registerService, login: loginService } = require('../services/auth.service');
const { validateAuth } = require('../utils/validation');
const { ValidationError, UniqueConstraintError } = require('sequelize');

async function register(req, res, next) {
  try {
    const { email, password, name } = req.body;
    validateAuth(email, password);
    await registerService(email, password, name);
    res.status(200).json({ message: 'User registered successfully.' });
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(400).json({ message: error.message });
    } else if (error instanceof UniqueConstraintError) {
      res.status(409).json({ message: 'Email already in use.' });
    } else {
      next(error);
    }
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    validateAuth(email, password);
    const token = await loginService(email, password);
    res.status(200).json(token);
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(400).json({ message: error.message });
    } else {
      next(error);
    }
  }
}

module.exports = { register, login };