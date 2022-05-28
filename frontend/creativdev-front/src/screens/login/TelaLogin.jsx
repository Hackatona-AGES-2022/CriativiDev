import Logo from "../../assets/LOGO.png"
import "./style.css";

export const TelaLogin = () => {return(
    <div className="TelaLogin">
       <div class="container-img">
            <img src={Logo} alt="" />
        </div>
        <form action="#">
            <label  for="email">E-mail</label>
            <input type="email"  id="email" class="entrada" placeholder="Digite seu e-mail" />
            <label for="senha">Senha</label>
            <input type="password" id="senha" class="entrada" placeholder="Digite seu e-mail" />
            <p><a href="http://">Não possui conta ainda?</a></p>
            <input type="submit" value="Entrar" class="btn submit" />
            <input type="button" value="Voltar" class="btn back" /> 
        </form>
    </div>
  );
} 