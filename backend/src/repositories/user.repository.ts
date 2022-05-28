import ApiError from "../models/apiError";
import db from "../config/database";
import { User } from "../models/user";

const uniqueViolationCode = '23505';

const fields = ['id', 'name', 'document', 'email', 'birth_date', 'cep', 'password', 'type'];
const tableName: string = 'users';

export async function create(user: User): Promise<User | ApiError>{
  try {
    const [userData] = await db<User>(tableName)
      .insert(user)
      .returning(fields);
      
    return userData as User;
  } catch (err: any) {
    let errorMessage;
    let errorCode;
    if (err.code === uniqueViolationCode && err.detail.includes('document')) {
      errorMessage = `Another user with document ${user.document} already exists`;
      errorCode = 400;
    } else if (err.code === uniqueViolationCode && err.detail.includes('email')) {
      errorMessage = `Another user with email ${user.email} already exists`;
      errorCode = 400;
    } 
    return ApiError.createApiError(errorMessage || err.message, errorCode || 500);
  }
}

export async function findAll(): Promise<Array<User>>{
  const userData = await db<User>(tableName)
    .select(fields)
    .returning(fields);
    
  return userData as Array<User>;
}

export async function findById(id: number): Promise<User>{
  const userData = await db<User>(tableName)
    .select(fields)
    .where({id})
    .returning(fields)
    .first();

  if (!userData) {
    throw new Error(`User with id ${id} does not exist`);
  }

  return userData as User;
}

export async function findByEmail(email: string): Promise<User>{
  const userData = await db<User>(tableName)
    .select(fields)
    .where({ email })
    .returning(fields)
    .first();

  if(!userData) {
    throw new Error(`User with email ${email} does not exist`);
  }

  return userData as User;
}