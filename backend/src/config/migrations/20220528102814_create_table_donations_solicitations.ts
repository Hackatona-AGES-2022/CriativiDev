import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('donations_solicitations', (table) => {
      table.integer('solicitation_id').references('request_id').inTable('solicitacoes').notNullable();
      table.integer('donation_id').references('id').inTable('donations').notNullable();
      table.primary(['solicitation_id', 'donation_id']);
    })
    .then(() => console.log('Table donations_solicitations was created'));
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('donations_solicitations')
    .then(() => console.log('Table donations_solicitations was dropped'));
}

