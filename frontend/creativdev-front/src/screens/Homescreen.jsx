import React from 'react';
import {HeaderReciever, HeaderDonator, HeaderLogin} from '../containers/Header'
import hands from "../assets/two_hands.png";
import desenho1 from "../assets/desenho1.png"
import desenho2 from "../assets/desenho2.png"
import team from "../assets/team.png"


export const Homescreen = () => {
  const styles = {
    page:{
        width:'70%',
        margin:'0 auto',
    },
}
  
  
  return(
      <div className="Homescreen">
        <HeaderLogin />
      <div className="container-fluid " style={styles.page}>

        <div class = "d-flex justify-content-center">
            <img src={desenho1} class="img-fluid" alt="Responsive image" width="700" height="700" position="absolute" />
            <div class="pe-5 mt-5">
              <h1>DoaTech</h1>
              <p>
              Com a ajuda da nossa plataforma os usuários podem doar seus equipamentos antigos e tem a oportunidade de receber recompensas à medida que fizerem doações.</p>
            <p>
             Essas doações serão encaminhadas para pessoas em vulnerabilidade social que requisitarem doações, assim como para instituições públicas que necessitam desse apoio.
              </p>
              <br/>
              <h1>Nossa missão</h1>
              <p>
                Tornar a informação via tecnologia um direito de todos.
              </p>
            </div>
        </div>
        <hr />
        <div class = "d-flex justify-content-center mt-7"> 
        <div class="ps-5  mt-5">
        <h1>Como o doaTech funciona</h1>
            <p>
              Um doador cadastra um eletrônico em nosso sistema, através desse cadastro consigmos achar algúem que possui 
              necessidade.<br></br>
              O doador também ganha recompensas com essas doações.<br></br>
              No fim todos saem ganhando. =) 
            </p>
        </div>
        <img src={desenho2} class="img-fluid" alt="Responsive image" width="700" height="700" position="absolute" />
        </div>

        <hr/>

      <div class = "d-flex justify-content-center">
            <img src={team} class="img-fluid" alt="Responsive image" width="700" height="700" position="absolute" />
            <div class="pe-5 mt-5">
              <h1>Quem Somos </h1>
              <p>
              Somos uma empresa de  desenvolvedores que visa alcançar a meta de tornar a internet mais acessível para as pessoas de baixa renda e ajudar pessoas que precisem se desfazer de eletrônicos que estão em desuso.
              </p>
             
            </div>
      </div>

      </div>
      
    </div>
    );
  }
  
