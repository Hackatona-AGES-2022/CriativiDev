import db from "config/database";
import { User } from "models/user";

const visibleFields = ['id', 'name', 'document', 'email', 'birth_date', 'cep', 'password'];

const tableName: string = 'users';

export async function findAll(): Promise<Array<User>>{
  const userData = await db<User>(tableName)
    .select(visibleFields)
    .returning(visibleFields);
    
  return userData as Array<User>;
}

export async function findById(id:number): Promise<User>{
  const userData = await db<User>(tableName)
    .select(visibleFields)
    .where({id})
    .returning(visibleFields)
    .first();

  return userData as User;
}