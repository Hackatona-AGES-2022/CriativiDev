
import React from 'react';

export const CadastroeSolicitacaoDoacao = () => {

    const styles = {
        body: {
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },

        main: {
            width: "50%",
            height: "60%",
            paddingLeft: "30px",
            paddingTop: "30px",
            background: "rgba( 255, 255, 255, 0.35 )",
            backdropFilter: "blur( 13.5px )",
            borderRadius: "10px",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
        },
        
        btn: {
            padding: "10px",
            width: "300px",
            borderRadius: "4px",
            transition: "0.5s ease",
            cursor: "pointer",
            border: "none",
            color: "#fff",
            backgroundColor: "#FF6666",
        },
        

    }    

    return(
        <form style = {styles.main} action="">
            <label for="drop-down">Descreva o produto (especificações...)</label>
            <div class="input-group">
                <textarea class="form-control me-4" aria-label="With textarea" ></textarea>
            </div>
            <br />
            <label for="drop-down">Selecione o tipo de equipamento desejado</label>
            <select class="form-select" aria-label="Default select example" id="drop-down">
                <option selected>Selecione</option>
                <option value="1">Monitor</option>
                <option value="2">Celular</option>
                <option value="3">Tablet</option>
                <option value="4">Desktop</option>
                <option value="5">Notebook</option>
              </select>
            <br />
            <input style = {styles.btn}type="submit" value="ENVIAR" class="btn submit" />
        </form>
    )
}