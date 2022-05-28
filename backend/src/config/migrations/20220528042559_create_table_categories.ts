import { Knex } from 'knex';


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('categories', (table) => {
        table.increments('id').primary();
        table.string('name', 20).notNullable();
        table.integer('points', 3).notNullable();
      })
        .then(() => console.log('Table categories was created'));
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('categories')
      .then(() => console.log('Table categories was dropped'));
}

