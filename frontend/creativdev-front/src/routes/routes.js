import React from 'react';
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';


// Páginas
import { Homescreen } from '../screens/Homescreen';
import TelaDoadorLogado from '../screens/ TelaDoadorLogado';
import TelaReceptorLogado from '../screens/ TelaReceptorLogador';
import { TelaLogin } from '../screens/login/TelaLogin';
import {Cadastro} from '../screens/cadastro/Cadastro';
import { CadastroDoacao} from '../screens/CadastroDoacao';
import { CadastroSolicitacao} from '../screens/CadastroSolicitacao';


export default function Routes() {
    return (
        <BrowserRouter>
          <ReactRoutes>
            <Route exact path='/' element={<Homescreen />} />               
            <Route exact path='/doador-logado' element={<TelaDoadorLogado />} />
            <Route exact path='/receptor-logado' element={<TelaReceptorLogado />} />
            <Route exact path='/login' element={<TelaLogin />} />
            <Route exact path='/cadastro' element={<Cadastro />} />
            <Route exact path='/cadastro-doacao' element={<CadastroDoacao />} />
            <Route exact path='/cadastro-solicitacao' element={<CadastroSolicitacao />} />
          </ReactRoutes>
        </BrowserRouter>
    )
}