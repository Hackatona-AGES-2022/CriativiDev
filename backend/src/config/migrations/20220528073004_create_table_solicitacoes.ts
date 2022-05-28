import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('solicitacoes', (table) => {
    table.increments('request_id').primary();
    table.integer('user_id',10).references('id').inTable('users');
    table.string('description',400).notNullable();
    table.integer('category_id',10).references('id').inTable('categories');
  })
  .then(() => console.log('Table requests was created'));
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('solicitacoes')
    .then(() => console.log('Table requests was dropped'));
}

