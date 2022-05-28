const path = require('path');

module.exports = {
  default: {
    client: process.env.DB_TYPE || 'pg',
    pool: {
      min: 2,
      max: 10,
    },
    connection: {
      host: process.env.DB_HOST || '0.0.0.0',
      user: process.env.DB_USER || 'criatividev',
      password: process.env.DB_PASS || 'criatividev',
      database: process.env.DB_BASE || 'criatividev',
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'config', 'migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, 'src', 'config', 'seeds'),
    },
    useNullAsDefault: true,
  },
};
