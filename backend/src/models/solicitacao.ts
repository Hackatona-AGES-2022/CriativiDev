export interface Solicitacao {
  request_id?: number,
  user_id: number,
  description: string,
  category_id: number
}

export interface CreateSolicitacaoPayload {
  user_id: number,
  description: string,
  category_id: number
}