import React, { useState, useEffect, useContext } from "react";
import { HeaderReciever } from '../containers/Header';
import { BtnSalvar, BtnFechar } from "../components/Botoes";
import { Card } from "../components/Card";
import plus from "../assets/plus.png"
import { CadastroeSolicitacaoDoacao } from "../containers/CadastroeSolicitacaoDoacao";

const TelaReceptorLogado =()=>{

    const styles = {
        bgTable:{
            backgroundColor:'#ffe6e6',
        },
        form:{
            backgroundColor:'#ffe6e6',
            width:'70%',
            margin:'0 auto',
            padding:"30px",
        },
        labels:{
            display:"flex",
            justifyContent:"start",
        },
        teste: {
            display: "flex",
        }, 
        spacingPlusButton: {
            paddingLeft: "12px",
        },
     
    }

    return(
    <div>
        <HeaderReciever/>
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-center pb-5">
                    <h2>Doações Recebidas</h2>
                    <ul>
                        <li>1 Notebook</li>
                        <li>1 Teclado</li>
                        <li>1 Celular</li>
                    </ul>
                </div>
                </div>
            <h1 class = 'd-flex justify-content-center'>Cadastro de doação</h1>
            <div class = 'd-flex justify-content-center'>

            <CadastroeSolicitacaoDoacao />   
            </div>
         </div>
    </div>
    
    )
}
export default TelaReceptorLogado;