export interface User{
  id: number;
  name: string;
  document: string;
  email: string;
  birth_date: Date;
  cep: string;
  password: string;
  type: UserType;
}

export enum UserType{
  DOADOR = 'DOADOR',
  RECEPTOR = 'RECEPTOR'
}