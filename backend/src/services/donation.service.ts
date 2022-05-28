import { Donation } from 'models/donation';
import ApiError from '../models/apiError';
import ApiResponse from '../models/apiResponse';
import * as donationRepository from '../repositories/donation.repository';

export async function create(donation: Donation) {
  try {
    return ApiResponse.createApiResponse(
      'Donation created successfully',
      await donationRepository.create(donation)
    );
  } catch(err: any) {
    return ApiError.createApiError(err.message, 500);
  }
}

export async function getById(id: number) {
  try {
    return ApiResponse.createApiResponse(
      'Donation found successfully',
      await donationRepository.findById(id)
    );
  } catch(err: any) {
    return ApiError.createApiError(err.message, 400);
  }
}

export async function getAll() {
  return ApiResponse.createApiResponse(
    'Donations found successfully',
    await donationRepository.findAll()
  );
}

export async function searchByCategory(categoryName: string) {
  return ApiResponse.createApiResponse(
    'Donations searched successfully',
    await donationRepository.searchByCategory(categoryName)
  );
}
