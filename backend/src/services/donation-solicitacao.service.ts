import ApiError from '../models/apiError';
import ApiResponse from '../models/apiResponse';
import * as donationSolicitacaoRepository from '../repositories/donation-solicitacao.repository';

export async function create(donation_id: number, solicitation_id: number) {
  try {
    return ApiResponse.createApiResponse(
      'Donation and solicitation link created successfully',
      await donationSolicitacaoRepository.create(donation_id, solicitation_id)
    );
  } catch(err: any) {
    return ApiError.createApiError(err.message, 500);
  }
}

export async function getByDonationId(id: number) {
  try {
    return ApiResponse.createApiResponse(
      'Donation and solicitation link found successfully',
      await donationSolicitacaoRepository.findByDonationId(id)
    );
  } catch(err: any) {
    return ApiError.createApiError(err.message, 400);
  }
}

export async function getBySolicitationId(id: number) {
  try {
    return ApiResponse.createApiResponse(
    'Donation and solicitation link found successfully',
    await donationSolicitacaoRepository.findBySolicitationId(id)
    );
  } catch(err: any) {
    return ApiError.createApiError(err.message, 400);
  }
}