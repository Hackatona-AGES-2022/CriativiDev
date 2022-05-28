import ApiResponse from "../models/apiResponse";
import * as solicitacaoRepository from "../repositories/solicitacao.repository"
import ApiError from "../models/apiError";


export async function getAll(): Promise<ApiResponse>{
  return ApiResponse.createApiResponse(
    'Solicitation created successfully',
    await solicitacaoRepository.findAll(),
  );
}

export async function getById(id: number): Promise<ApiResponse | ApiError>{
  try {
    return ApiResponse.createApiResponse(
      'Category found successfully',
      await solicitacaoRepository.findById(id)
    );
  } catch(err: any) {
    return ApiError.createApiError(err.message, 400);
  }
}