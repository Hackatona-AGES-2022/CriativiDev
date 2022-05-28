import { Donation } from 'models/donation';
import db from '../config/database';

const tableName = 'donations_solicitations';

export async function create(donation_id: number, solicitation_id: number) {
    const [createdDonation] = await db<Donation>(tableName)
      .insert({ donation_id, solicitation_id } as any)
      .returning('*');

    return createdDonation as Donation;
}

export async function findBySolicitationId(solicitation_id: number) {
  const createdDonation = await db<Donation>(tableName)
    .select('*')
    .where({ solicitation_id } as any)
    .returning('*')
    .first();

  if (!createdDonation) {
      throw new Error(`Linked donation for solicitation id ${solicitation_id} does not exist`);
  }

  return createdDonation as Donation;
}

export async function findByDonationId(donation_id: number) {
    const createdDonation = await db<Donation>(tableName)
      .select('*')
      .where({ donation_id } as any)
      .returning('*')
      .first();
  
    if (!createdDonation) {
        throw new Error(`Linked solicitation for donation id ${donation_id} does not exist`);
    }
  
    return createdDonation as Donation;
}