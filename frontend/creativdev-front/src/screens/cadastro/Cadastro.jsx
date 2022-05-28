import aleksandar from "../../assets/pexels-aleksandar-pasaric-2603464.jpg";

import "./style.css";

export const Cadastro = () => {
    return(
    <div className="meu-body">
        <div class="container-img-cadastro">
        <img className="img-cad" src={aleksandar}  alt="imagem"/>
        <div class="degrade"></div>
    </div>
    <main className="main-cadastro">
        <form className="form-cad" action="#">
            <h1>Cadastro</h1>
            <label for="">Nome</label>
            <input type="text" name="" id="" class="entrada-cad"/>
            <label for="">E-mail</label>
            <input type="text" name="" id="" class="entrada-cad"/>
            <label for="">CPF</label>
            <input type="text" name="" id="" class="entrada-cad"/>
            <label for="">CEP</label>
            <input type="text" name="" id="" class="entrada-cad"/>
            <label for="">Data Nascimento</label>
            <input type="text" name="" id="" class="entrada-cad"/>
            <label for="">Senha</label>
            <input type="text" name="" id="" class="entrada-cad"/>
            <label for="">Recebedor ou doador</label>
            <input type="radio" name="tipo_pessoa" id="" class="doador"/>
            <input type="radio" name="tipo_pessoa" id="" class="receptor"/>
            <input type="submit" value="Salvar" class="btn-cad submit-cad"/>
            <a href="/"><input type="button" value="Voltar" class="btn-cad back-cad" /></a>
        </form>
    </main>
    </div>
  );
} 
