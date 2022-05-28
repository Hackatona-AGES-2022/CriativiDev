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

    
    </div>
    )
}
export default TelaReceptorLogado;