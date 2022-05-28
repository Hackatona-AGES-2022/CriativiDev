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

export default function Routes() {
    return (
        <Router>
            <Switch>
            <Route exact path='/'>
                                <Redirect to='/home' />
            </Route>
                <Route exact path='/home' component={Homescreen} />
                <Route exact path='/login-doador' component={TelaDoadorLogado} />

               
            </Switch>
        </Router>
    )
}