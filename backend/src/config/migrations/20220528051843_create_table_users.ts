import { table } from "console";
import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name',100).notNullable();
    table.specificType('document','char(11)').notNullable().unique();
    table.string('email',50).notNullable().unique();
    table.date('birth_date').notNullable();
    table.integer('cep',9).notNullable();
    table.string('password', 20).notNullable();
    table.string('type', 15).notNullable();
  })
  .then(() => console.log('Table users was created'));
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users')
    .then(() => console.log('Table users was dropped'));
}

