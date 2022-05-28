import { convertStringToDate } from "../utils/date.utils";
import { CreateUserPayload, User } from "../models/user";
import * as repository from "../repositories/user.repository"
import ApiError from "../models/apiError";
import ApiResponse from "../models/apiResponse";

export async function create(user: CreateUserPayload): Promise<User | ApiError>{
  const { birth_date, ...userData } = user;
  const formattedDate = convertStringToDate(user.birth_date);
  return await repository.create({ birth_date: formattedDate, ...userData });
}

export async function getAll(): Promise<ApiResponse>{
  return ApiResponse.createApiResponse(
    'Users found successfully',
    await repository.findAll()
  );
}

export async function getById(id: number): Promise<ApiResponse | ApiError>{
  try {
    return ApiResponse.createApiResponse(
      'User found successfully',
      await repository.findById(id)
    );
  } catch(err: any) {
    return ApiError.createApiError(err.message, 400);
  }
}

export async function login(email: string): Promise<User>{
  return repository.findByEmail(email);
}