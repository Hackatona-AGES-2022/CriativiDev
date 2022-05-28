import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import aleksandar from "../../assets/pexels-aleksandar-pasaric-2603464.jpg";
import { registerUser } from "../../services/user";

import "./style.css";

export const Cadastro = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [document, setDocument] = useState("");
  const [cep, setCep] = useState("");
  const [birth_date, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = async () => {
    try {
      const payload = { name, document, email, birth_date, cep, password, type };
      const response = await registerUser(payload);
      if (response.type === "DOADOR") navigate("/doador-logado");
      else if (response.type === "RECEPTOR") navigate("/receptor-logado");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="meu-body">
      <div class="container-img-cadastro">
        <img className="img-cad" src={aleksandar} alt="imagem" />
        <div class="degrade"></div>
      </div>
      <main className="main-cadastro">
        <form className="form-cad" action="#">
          <h1>Cadastro</h1>
          <label for="">Nome</label>
          <input
            type="text"
            name=""
            id=""
            class="entrada-cad"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label for="">E-mail</label>
          <input
            type="text"
            name=""
            id=""
            class="entrada-cad"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="">CPF</label>
          <input
            type="text"
            name=""
            id=""
            class="entrada-cad"
            value={document}
            onChange={(e) => setDocument(e.target.value)}
          />
          <label for="">CEP</label>
          <input
            type="text"
            name=""
            id=""
            class="entrada-cad"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <label for="">Data Nascimento</label>
          <input
            type="text"
            name=""
            id=""
            class="entrada-cad"
            value={birth_date}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <label for="">Senha</label>
          <input
            type="text"
            name=""
            id=""
            class="entrada-cad"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label for="">Recebedor ou doador</label>
          <input
            type="radio"
            name="tipo_pessoa"
            id=""
            class="doador"
            onChange={(_) => setType("DOADOR")}
          />
          <input
            type="radio"
            name="tipo_pessoa"
            id=""
            class="receptor"
            onChange={(_) => setType("RECEPTOR")}
          />
          <input type="submit" value="Salvar" class="btn-cad submit-cad" onClick={() => handleSubmit()}/>
          <a href="/">
            <input type="button" value="Voltar" class="btn-cad back-cad" />
          </a>
        </form>
      </main>
    </div>
  );
};
