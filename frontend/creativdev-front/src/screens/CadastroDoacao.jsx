import React from 'react';
import { HeaderDonator } from '../containers/Header'
import { CadastroeSolicitacaoDoacao } from '../containers/CadastroeSolicitacaoDoacao'


export const CadastroDoacao = () => {
    return(
        <>
            <HeaderDonator class/>
            <h1 class = 'd-flex justify-content-center'>Cadastro de doação</h1>
            <div class = 'd-flex justify-content-center'>

            <CadastroeSolicitacaoDoacao />   
            </div>
        </>

    )
}