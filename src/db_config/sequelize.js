const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo_app', 'root', '0000', {
  host: 'localhost',
  dialect: 'mysql',
});

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synchronized');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
};

syncDatabase();

module.exports = sequelize;