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
              <h4>Somos uma empresa de  desenvolvedores que visa alcançar a meta de tornar a internet mais acessível para as pessoas de baixa renda e ajudar outros que precisem se desfazer de eletrônicos que estão em desuso.
              </h4>
              <h1>Nossa missão</h1>
              <h4>Através da doação, pessoas que, ao invés de vender ou até mesmo jogar fora seus eletrônicos, tem a oportunidade de receber recompensas à medida que fizerem doações para a nossa empresa.
    Essas doações serão encaminhadas para outros usuários que requisitarão doações, assim como para instituições públicas que necessitam desse apoio.</h4>
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
  
