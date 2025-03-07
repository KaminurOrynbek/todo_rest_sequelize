const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'error',
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.json()
  ),
  transports: [
    new transports.File({ filename: 'error.log' }),

    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
  ],
});

module.exports = logger;
