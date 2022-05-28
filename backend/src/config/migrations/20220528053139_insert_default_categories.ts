import { Knex } from "knex";

const defaultCategories = [
    { name: 'PERIFERICO', points: 20 },
    { name: 'MONITOR', points: 50 },
    { name: 'CELULAR', points: 70 },
    { name: 'TABLET', points: 70 },
    { name: 'DESKTOP', points: 100 },
    { name: 'NOTEBOOK', points: 100 }
]

export async function up(knex: Knex): Promise<void> {
    return knex('categories')
      .insert(defaultCategories)
      .then(() => console.log('Default categories were inserted'));
}


export async function down(knex: Knex): Promise<void> {
    return knex('categories')
      .whereIn('name', defaultCategories.map((category) => category.name))
      .del()
      .then(() => console.log('Default categories deleted from table'));
}

