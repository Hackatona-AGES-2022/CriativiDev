import React, { useState, useEffect, useContext } from "react";
import { getAllCategories } from "../services/category";
import { getUserById } from "../services/user";
import { HeaderDonator } from '../containers/Header';
import { BtnSalvar, BtnFechar } from "../components/Botoes";
import { Card } from "../components/Card";
import plus from "../assets/plus.png"
import circle from "../assets/circle-scatter-haikei.png"


const TelaDoadorLogado =()=> {

    const styles = {
        bgTable:{
            backgroundColor:'#ffe6e6',
        },
        form:{
            backgroundColor:'#ffe6e6',
            width:'70%',
            margin:'0 auto',
            padding:"30px",
        },
        labels:{
            display:"flex",
            justifyContent:"start",
        },
        teste: {
            display: "flex",
        }, 
        spacingPlusButton: {
            paddingLeft: "12px",
        },
        imgTeste:{
            position: "fixed",
            bottom: "0",
            right: "0",
            width: "450px",
        },
    }

    const [categories, setCategories] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        const sessionUser = JSON.parse(sessionStorage.getItem("user") || "{}");
        const getCategories = async () => {
          try {
            const getCategoriesResponse = await getAllCategories();
            setCategories(getCategoriesResponse);
          } catch (err) {
            console.log(err);
          }
        };
        const getUser = async () => {
          try {
            const getUserResponse = await getUserById(sessionUser.id);
            setUser(getUserResponse);
          } catch (err) {
            console.log(err);
          }
        };
        const getDonations = async () => {
            try {
              const getUserResponse = await getUserById(sessionUser.id);
              setUser(getUserResponse);
            } catch (err) {
              console.log(err);
            }
        };
        getCategories();
        getUser();
    }, []);

    return(
    <div className="container-fluid" >
        
        <HeaderDonator/>

<div className="container" style={styles.teste}>

        <div className="row">
    <div className="col-5 ">
        <div className="row ps-5">
            <div style={styles.teste}>
                <div>
        <h1>Minhas Doações</h1>
        <h4>Pontuação total: 200 pontos</h4>
        </div>
        <a class="plus-donate" href="#">        
            <img src={plus} alt="" width="50" height="38" style={styles.spacingPlusButton} />
        </a>

        </div>
            <div className="col-12"><Card/></div>
            <div className="col-12"><Card/></div>
            <div className="col-12"><Card/></div>
        </div>
    </div>
    <div className="col-6 pe-5">
        <h1>Como funciona ?</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates officia ex non deserunt debitis recusandae aut error numquam quia possimus doloremque modi sed reiciendis provident dolores temporibus, corporis minus dignissimos.</p>
        <h1>Sistema de recompensas</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eveniet exercitationem fugit fuga quibusdam nemo tempora suscipit impedit consequuntur tempore maiores, explicabo harum, omnis dolor. Quas repudiandae possimus maiores dolor.</p>
    <div className="row">
        <div className="col-12">                        
                <table className='table table-bordered table-responsive mt-4'>
                    <thead style={styles.bgTable}>
                        <tr>
                            <th className='col-1 text-center' scope='col'>Item</th>
                            <th className='col-1 text-center' scope='col'>Pontos</th>
                        </tr>
                    </thead>
                    <tbody className='text-center font-weight-bold'>
                    <tr>
    
                        <td>Monitor</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        
                        <td>Celular</td>
                        <td>70</td>
                    </tr>
                    <tr>
                        
                        <td>Tablet</td>
                        <td>70</td>
                    </tr>
                    <tr>
                        
                        <td>Desktop</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        
                        <td>Notebook</td>
                        <td>100</td>
                    </tr>
                    </tbody>
                </table></div>

</div>
    </div>
    </div>
        
    </div>
    <img src={circle} alt="" style={styles.imgTeste}/>  
    </div>



    )
}
export default TelaDoadorLogado;