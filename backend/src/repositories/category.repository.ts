import { Category } from 'models/category';
import db from '../config/database';

const tableName = 'categories';

export async function create(category: Category): Promise<Category> {
    const [createdCategory] = await db<Category>(tableName)
      .insert(category)
      .returning('*');

    return createdCategory as Category;
}

export async function findById(id: number): Promise<Category> {
  const createdCategory = await db<Category>(tableName)
    .select('*')
    .where({ id })
    .returning('*')
    .first();

  if (!createdCategory) {
      throw new Error(`Category with id ${id} does not exist`);
  }

  return createdCategory as Category;
}

export async function findByName(tr: any, name: string): Promise<Category> {
  const createdCategory = await db<Category>(tableName)
    .transacting(tr)
    .select('*')
    .where({ name })
    .returning('*')
    .first();

  if (!createdCategory) {
      throw new Error(`Category with name ${name} does not exist`);
  }

  return createdCategory as Category;
}

export async function findAll(): Promise<Array<Category>> {
  const createdCategory = await db<Category>(tableName)
    .select('*')
    .returning('*');

  return createdCategory as Array<Category>;
}