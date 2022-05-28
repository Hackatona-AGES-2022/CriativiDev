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
            <h2>Sobre o projeto</h2>
            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
        </div>
        </div>
        <hr />
        <div class = "d-flex justify-content-center mt-7"> 
        <div class="ps-5  mt-5">
            <h2>Seu papel na sociedade e auxiliando a internet a ser um mundo melhor</h2>
            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h5>
            </div>
            <img src={desenho2} class="img-fluid" alt="Responsive image" width="700" height="700" position="absolute" />
        </div>
      </div>
    );
  }
  
