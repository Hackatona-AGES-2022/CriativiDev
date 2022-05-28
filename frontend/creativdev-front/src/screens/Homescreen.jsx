import React from 'react';
import {HeaderReciever, HeaderDonator, HeaderLogin} from '../containers/Header'
import desenho1 from "../assets/desenho1.png"
import desenho2 from "../assets/desenho2.png"
import team from "../assets/team.png"
import kobe from "../assets/kobe.png"
import adp from "../assets/ADP-logo-1.jpg"
import ecore from "../assets/logo_e-core.png"
import eldorado from "../assets/Logo-Eldorado-Color-160.png"
import globo from "../assets/logo-globo-fundo-cinza.png"




export const Homescreen = () => {
  const styles = {
    page:{
        width:'70%',
        margin:'0 auto',
    },
    image:{
      width:'250px',
      height:'150px'
    }
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

      <hr/>

      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className='my-5'>Apoiadores:</h1>
          </div>
          <img src={adp} style={styles.image} class="img-fluid" alt="Responsive image"  position="absolute" />
          <img src={globo} style={styles.image} class="img-fluid" alt="Responsive image"  position="absolute" />
          <img src={kobe} style={styles.image} class="img-fluid" alt="Responsive image"  position="absolute" />
          <img src={eldorado} style={styles.image} class="img-fluid" alt="Responsive image"  position="absolute" />
          <img src={ecore} style={styles.image} class="img-fluid" alt="Responsive image"  position="absolute" />
        
        </div>

      </div>
      
    </div>
    );
  }
  
