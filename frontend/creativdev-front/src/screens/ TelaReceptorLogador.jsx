import React, { useState, useEffect, useContext } from "react";
import { HeaderReciever } from '../containers/Header';
import { BtnSalvar, BtnFechar } from "../components/Botoes";
import { Card } from "../components/Card";
import plus from "../assets/plus.png"


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
    <div className="container-fluid">
        
        <HeaderReciever/>

        <div className="container">

<div className="row">
    <div className="col-4">
        <h2>Doações Recebidas</h2>
        <ul>
            <li>1 Notebook</li>
            <li>1 Teclado</li>
            <li>1 Celular</li>
        </ul>
    </div>
    <div className="col-8">
    <form style={styles.form}>
            <h2 className="mt-4">Solicitar Doações</h2>

            <div className="row">
                <div className="form-group col-12 ">
                    <div className="mb-2"> 
                        <label for="produto" style={styles.labels}>Produto</label>
                        <input className="form-control" type="text" id="produto"/>
                    </div>
                    <div className="mb-2"> 
                        <label for="descricao" style={styles.labels}>Descrição da Solicitação</label>
                        <textarea name="descricao" id="" cols="37" rows="10"></textarea>
                    </div>
                   
                </div>
            </div>
            <div className='form-group col-12 justify-content-end align-items-end'>
                <div className='d-flex justify-content-end'>
                    <BtnSalvar/>
                    <BtnFechar/>
             </div>
            </div>
        </form></div>

</div>
    </div>
    
    </div>
    )
}
export default TelaReceptorLogado;