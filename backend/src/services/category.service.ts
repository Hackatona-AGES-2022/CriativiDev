import { createApiResponse } from '../models/apiResponse';
import { createApiError } from '../models/apiError';
import * as categoryRepository from '../repositories/category.repository'

export async function getById(id: number) {
  try {
    return createApiResponse('Category found successfully', await categoryRepository.findById(id));
  } catch(err: any) {
    return createApiError(err.message, 400);
  }
}

export async function getAll() {
  return createApiResponse('Categories found successfully', await categoryRepository.findAll());
}