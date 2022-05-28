import React, { useState, useEffect, useContext } from "react";
import { HeaderDonator } from '../containers/Header';
import { BtnSalvar, BtnFechar } from "../components/Botoes";
import { Card } from "../components/Card";



const TelaDoadorLogado =()=>{

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

        }
     
    }

    return(
    <div className="container-fluid">
        
        <HeaderDonator/>
        <Card/>

    </div>
  
    )
}
export default TelaDoadorLogado;