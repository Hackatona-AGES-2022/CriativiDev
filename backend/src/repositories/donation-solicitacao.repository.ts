import { Donation } from '../models/donation';
import { Solicitacao } from '../models/solicitacao'
import db from '../config/database';

const tableName = 'donations_solicitations';

export async function create(donation_id: number, solicitation_id: number) {
    const [createdDonation] = await db<Donation>(tableName)
      .insert({ donation_id, solicitation_id } as any)
      .returning('*');

    return createdDonation as Donation;
}

export async function findByReceiverId(receiver_id: number) {
  const createdDonation = await db<Solicitacao>(tableName)
    .select(['donations_solicitations.solicitation_id', 'categories.name'])
    .innerJoin('solicitacoes', 'solicitacoes.request_id', 'donations_solicitations.solicitation_id')
    .innerJoin('categories', 'categories.id', 'solicitacoes.category_id')
    .where('solicitacoes.user_id', receiver_id)
    .returning(['donations_solicitations.solicitation_id', 'categorias.name']);

  if (!createdDonation) {
      throw new Error(`Could not get solicitations from receiver ${receiver_id}`);
  }

  return createdDonation as Array<Donation>;
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