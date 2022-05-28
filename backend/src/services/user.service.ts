import { convertStringToDate } from "../utils/date.utils";
import { CreateUserPayload, User } from "../models/user";
import * as repository from "../repositories/user.repository"
import ApiError from "../models/apiError";

export async function create(user: CreateUserPayload): Promise<User | ApiError>{
  const { birth_date, ...userData } = user;
  const formattedDate = convertStringToDate(user.birth_date);
  return repository.create({ birth_date: formattedDate, ...userData });
}

export async function getAll(): Promise<Array<User>>{
  return repository.findAll();
}

export async function getById(id: number): Promise<User>{
  return repository.findById(id);
}