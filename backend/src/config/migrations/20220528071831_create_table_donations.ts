import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('donations', (table) => {
        table.increments('id').primary();
        table.string('description',400).notNullable();
        table.integer('category_id').references('id').inTable('categories').notNullable();
        table.integer('user_id').references('id').inTable('users').notNullable();
      })
      .then(() => console.log('Table donations was created'));
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('donations')
      .then(() => console.log('Table donations was dropped'));
}

