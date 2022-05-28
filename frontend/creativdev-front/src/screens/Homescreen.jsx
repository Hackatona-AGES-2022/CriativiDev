import React from 'react';
import {HeaderReciever, HeaderDonator, HeaderLogin} from '../containers/Header'
import hands from "../assets/two_hands.png";
import desenho1 from "../assets/desenho1.png"
import desenho2 from "../assets/desenho2.png"


export const Homescreen = () => {return(
      <div className="Homescreen">
        <HeaderLogin />
        <div class = "d-flex justify-content-center">
            <img src={desenho1} class="img-fluid" alt="Responsive image" width="700" height="700" position="absolute" />
            <div class="pe-5 mt-5">
              <h1>DoaTech</h1>
              <h4>
                Em novembro de 2020, mais de 2 milhões de crianças com idade entre 6 e 10 anos não tiveram acesso a educação no Brasil.
                No total foram 5,1 milhões de crianças e adolescentes até 17 anos que tiveram o seu direito à educação negado. Segundo 
                uma pesquisa produzida em parceria pelo UNICEF e CENPEC Educação.
              </h4>
              <h1>Nossa missão</h1>
              <h4>
                Tornar a informação via tecnologia, um dierito de todos.
              </h4>
            </div>
      </div>
        <hr />
        <div class = "d-flex justify-content-center mt-7"> 
        <div class="ps-5  mt-5">
        <h1>Como o doaTech funciona</h1>
            <h4>
              Um doador cadastra um eletrônico em nosso sistema, através desse cadastro consigmos achar algúem que possui 
              necessidade.<br></br>
              O doador também ganha recompensas com essas doações.<br></br>
              No fim todos saem ganhando. =) 
            </h4>
        </div>
        <img src={desenho2} class="img-fluid" alt="Responsive image" width="700" height="700" position="absolute" />
        </div>
      </div>
    );
  }
  
