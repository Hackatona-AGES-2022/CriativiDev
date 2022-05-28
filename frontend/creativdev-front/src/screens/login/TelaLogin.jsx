import Logo from "../../assets/LOGO.png"
import "./style.css";

export const TelaLogin = () => {return(
    <div className="container-fluid TelaLogin">
       <main className="minhaMain">
       <div class="minhaContainer-img">
            <img className="minha-img" src={Logo} alt="" />
        </div>
        <form className="meu-form" action="#">
            <label className="minhalabel" for="email">E-mail</label>
            <input type="email"  id="email" class="entrada" placeholder="Digite seu e-mail" />
            <label className="minhalabel" for="senha">Senha</label>
            <input type="password" id="senha" class="entrada" placeholder="Digite seu e-mail" />
            <p><a  className="meu-a"href="http://">Não possui conta ainda?</a></p>
            <input type="submit" value="Entrar" class="meu-btn submit" />
            <a href="/home"><input type="button" value="Voltar" class="meu-btn back" /> </a>
            
        </form>
       </main>
    </div>
  );
} 