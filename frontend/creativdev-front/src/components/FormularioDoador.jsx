import React, { useState, useEffect, useContext } from "react";


const FormularioDoador =()=>{

    const styles = {
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
    <div className="container">
       <div className="row">
           <div className="col-12 mb-4">
               <h1>Quero Doar</h1>
            </div>
       </div>


        <form style={styles.form}>
            <div className="row">
                <div className="form-group col-12 ">
                    <div className="mb-2"> 
                        <label for="nome" style={styles.labels}>Nome Completo</label>
                        <input className="form-control" type="text" id="nome"/>
                    </div>
                    <div className="mb-2"> 
                        <label for="cpf" style={styles.labels}>CPF</label>
                        <input className="form-control" type="text" id="cpf"/>
                    </div>
                    <div className="mb-2"> 
                        <label for="dataNascimento" style={styles.labels}>Data de Nascimento</label>
                        <input className="form-control" type="date" id="dataNascimento"/>
                    </div>
                    <div className="mb-2">
                        <label for="email" style={styles.labels}>Email</label>
                        <input className="form-control" type="email" id="email"/>
                    </div>
                    <div className="mb-2">
                        <label for="cep" style={styles.labels}>Cep</label>
                        <input className="form-control" type="text" id="cep"/>
                    </div>
                    <div className="mb-2">
                        <label for="senha" style={styles.labels}>Senha</label>
                        <input className="form-control" type="password" id="senha" />
                    </div>
                
                </div>
            </div>
            
        </form>
    </div>
    )
}
export default FormularioDoador;