import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/LOGO.png";
import { login as authClient } from "../../services/auth";
import "./style.css";

export const TelaLogin = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async () => {
    try {
      const loginResponse = await authClient(email);
      sessionStorage.setItem("user", loginResponse);
      if (loginResponse.type === "DOADOR") navigate("/doador-logado");
      else if (loginResponse.type === "RECEPTOR") navigate("/receptor-logado");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-fluid TelaLogin">
      <main className="minhaMain">
        <div class="minhaContainer-img">
          <img className="minha-img" src={Logo} alt="" />
        </div>
        <form className="meu-form" action="#">
          <label className="minhalabel" for="email">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            class="entrada"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="minhalabel" for="senha">
            Senha
          </label>
          <input
            type="password"
            id="senha"
            class="entrada"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Digite sua senha"
          />
          <p className="p-meu">
            <a className="meu-a" href="/cadastro">
              Não possui conta ainda?
            </a>
          </p>
          <input
            type="button"
            value="Entrar"
            class="meu-btn submit"
            onClick={() => handleSubmit()}
          />
          <a href="/home">
            <input type="button" value="Voltar" class="meu-btn back" />
          </a>
        </form>
      </main>
    </div>
  );
};
