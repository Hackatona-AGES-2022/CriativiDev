
import React from 'react';
import { HeaderReciever } from '../containers/Header'
import { CadastroeSolicitacaoDoacao } from '../containers/CadastroeSolicitacaoDoacao'


export const CadastroSolicitacao = () => {
    return(
        <>
            <HeaderReciever class/>
            <h1 class = 'd-flex justify-content-center'>Cadastro de solicitação de doação</h1>
            <div class = 'd-flex justify-content-center'>

            <CadastroeSolicitacaoDoacao />   
            </div>
        </>

    )
}