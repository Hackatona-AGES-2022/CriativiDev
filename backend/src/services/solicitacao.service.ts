import ApiError from "../models/apiError";
import ApiResponse from "../models/apiResponse";
import { Solicitacao } from "models/solicitacao";
import * as repository from "../repositories/solicitacao.repository"


export async function getAll(): Promise<Array<Solicitacao>>{
  return repository.findAll();
}

export async function getById(id: number): Promise<Solicitacao>{
  return repository.findById(id);
}

export async function create(solicitacao: Solicitacao): Promise<ApiResponse | ApiError>{
  try {
    return ApiResponse.createApiResponse(
      'Donation created successfully',
      await repository.create(solicitacao)
    );
  } catch(err: any) {
    return ApiError.createApiError(err.message, 500);
  }
}