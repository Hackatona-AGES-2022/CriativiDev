import db from "../config/database";
import { Solicitacao } from "../models/solicitacao";

const visibleFields = ['request_id', 'user_id', 'description', 'category_id'];

const tableName: string = 'solicitacoes';

export async function findAll(): Promise<Array<Solicitacao>>{
  const solicitacaoData = await db<Solicitacao>(tableName)
    .select(visibleFields)
    .returning(visibleFields);

  return solicitacaoData as Array<Solicitacao>;
}

export async function findById(request_id:number): Promise<Solicitacao>{
  const solicitacaoData = await db<Solicitacao>(tableName)
    .select(visibleFields)
    .where({request_id})
    .returning(visibleFields)
    .first();

  return solicitacaoData as Solicitacao;
}