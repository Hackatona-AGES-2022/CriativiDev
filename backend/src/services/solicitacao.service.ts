import { Solicitacao } from "models/solicitacao";
import * as repository from "../repositories/solicitacao.repository"


export async function getAll(): Promise<Array<Solicitacao>>{
  return repository.findAll();
}

export async function getById(id: number): Promise<Solicitacao>{
  return repository.findById(id);
}