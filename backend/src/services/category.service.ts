import ApiError from '../models/apiError';
import ApiResponse from '../models/apiResponse';
import * as categoryRepository from '../repositories/category.repository'

export async function getById(id: number) {
  try {
    return ApiResponse.createApiResponse(
      'Category found successfully',
      await categoryRepository.findById(id)
    );
  } catch(err: any) {
    console.log('aqui');
    return ApiError.createApiError(err.message, 400);
  }
}

export async function getAll() {
  return ApiResponse.createApiResponse(
    'Categories found successfully',
    await categoryRepository.findAll()
  );
}