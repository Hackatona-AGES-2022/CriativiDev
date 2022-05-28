import { User } from "models/user";
import * as repository from "../repositories/user.repository"


export async function getAll(): Promise<Array<User>>{
  return repository.findAll();
}

export async function getById(id: number): Promise<User>{
  return repository.findById(id);
}