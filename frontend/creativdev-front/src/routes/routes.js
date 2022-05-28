import React from 'react';
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';


// Páginas
import { Homescreen } from '../screens/Homescreen';
import TelaDoadorLogado from '../screens/ TelaDoadorLogado';
import TelaReceptorLogado from '../screens/ TelaReceptorLogador';
import { TelaLogin } from '../screens/login/TelaLogin';
import {Cadastro} from '../screens/cadastro/Cadastro';


export default function Routes() {
    return (
        <BrowserRouter>
          <ReactRoutes>
            <Route exact path='/' element={<Homescreen />} />               
            <Route exact path='/doador-logado' element={<TelaDoadorLogado />} />
            <Route exact path='/receptor-logado' element={<TelaReceptorLogado />} />
            <Route exact path='/login' element={<TelaLogin />} />
            <Route exact path='/cadastro' element={<Cadastro />} />
          </ReactRoutes>
        </BrowserRouter>
    )
}