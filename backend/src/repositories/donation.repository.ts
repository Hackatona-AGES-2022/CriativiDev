import { Donation } from 'models/donation';
import db from '../config/database';
import * as categoryRepository from './category.repository';

const tableName = 'donations';

export async function create(donation: Donation): Promise<Donation> {
    const [createdDonation] = await db<Donation>(tableName)
      .insert(donation)
      .returning('*');

    return createdDonation as Donation;
}

export async function findById(id: number): Promise<Donation> {
  const createdDonation = await db<Donation>(tableName)
    .select('*')
    .where({ id })
    .returning('*')
    .first();

  if (!createdDonation) {
      throw new Error(`Donation with id ${id} does not exist`);
  }

  return createdDonation as Donation;
}

export async function searchByCategory(categoryName: string): Promise<Array<Donation>> {
  return await db.transaction(async (tr) => {
    const foundCategory = await categoryRepository.findByName(tr, categoryName);
    const createdCategory = await db<Donation>(tableName)
        .transacting(tr)
        .select('*')
        .where({ category_id: foundCategory.id })
        .returning('*');

    return createdCategory as Array<Donation>;
  });
}

export async function findAll(): Promise<Array<Donation>> {
  const createdCategory = await db<Donation>(tableName)
    .select('*')
    .returning('*');

  return createdCategory as Array<Donation>;
}