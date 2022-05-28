import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

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
        <Router>
            <Switch>
            <Route exact path='/'>
                                <Redirect to='/home' />
            </Route>
                <Route exact path='/home' component={Homescreen} />               
                <Route exact path='/doador-logado' component={TelaDoadorLogado} />
                <Route exact path='/receptor-logado' component={TelaReceptorLogado} />
                <Route exact path='/login-doador' component={TelaLogin} />
                <Route exact path='/cadastro' component={Cadastro} />
                <Route exact path='/cadastro-doacao' component={CadastroDoacao} />
                <Route exact path='/cadastro-solicitacao' component={CadastroSolicitacao} />

            </Switch>
        </Router>
    )
}