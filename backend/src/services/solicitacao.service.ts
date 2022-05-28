import ApiError from "../models/apiError";
import ApiResponse from "../models/apiResponse";
import { Solicitacao } from "models/solicitacao";
import * as solicitacaoRepository from "../repositories/solicitacao.repository"

export async function getAll(): Promise<ApiResponse>{
  return ApiResponse.createApiResponse(
    'Solicitations found successfully',
    await solicitacaoRepository.findAll(),
  );
}

export async function create(solicitacao: Solicitacao): Promise<ApiResponse | ApiError>{
  try {
    return ApiResponse.createApiResponse(
      'Solicitation created successfully',
      await solicitacaoRepository.create(solicitacao)
    );
  } catch(err: any) {
    return ApiError.createApiError(err.message, 500);
  }
}

export async function getById(id: number): Promise<ApiResponse | ApiError>{
  try {
    return ApiResponse.createApiResponse(
      'Solicitation found successfully',
      await solicitacaoRepository.findById(id)
    );
  } catch(err: any) {
    return ApiError.createApiError(err.message, 400);
  }
}
