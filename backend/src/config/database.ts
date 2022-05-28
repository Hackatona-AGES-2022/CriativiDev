import knex from 'knex';

const config = require('../../knexfile');

const db = knex(config.default);

export default db;