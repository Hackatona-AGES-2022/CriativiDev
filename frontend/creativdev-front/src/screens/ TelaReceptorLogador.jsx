import React, { useState, useEffect, useContext } from "react";
import { getAllCategories } from "../services/category";
import { HeaderReciever } from '../containers/Header';
import { BtnSalvar, BtnFechar } from "../components/Botoes";
import { Card } from "../components/Card";
import plus from "../assets/plus.png"
import { CadastroeSolicitacaoDoacao } from "../containers/CadastroeSolicitacaoDoacao";
import { getMatchesByReceiverId } from "../services/donationSolicitation"

const TelaReceptorLogado =()=>{

    const [categories, setCategories] = useState([]);
    const [matchList, setMatchList] = useState([]);
    const [matchPerCategory, setMatchPerCategory] = useState([]);

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
        const getMatches = async () => {
          try {
            const getCategoriesResponse = await getMatchesByReceiverId(sessionUser.id);
            setMatchList(getCategoriesResponse);
          } catch (err) {
            console.log(err);
          }
        };
        getCategories();
        getMatches();
        setMatchPerCategory(categories.map(category => {
            return matchList.filter(match => match.name === category.name).length;
        }));
        console.log(matchPerCategory);
    }, []);

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
     
    }

    return(
    <div>
        <HeaderReciever/>
        <div className="container">
            <div className="row">
            <h1 class = 'd-flex justify-content-center'>Doações Recebidas</h1>

                <div className="d-flex justify-content-center pb-5">
                    <ul >
                    {matchPerCategory.flatMap((match, index) => {
                        if (match > 0) return (<li>{`${match} ${categories[index].name}`}</li>);
                    })}
                    </ul>
                </div>
                </div>
            <h1 class = 'd-flex justify-content-center'>Cadastro de doação</h1>
            <div class = 'd-flex justify-content-center'>

            <CadastroeSolicitacaoDoacao />   
            </div>
         </div>
    </div>
    
    )
}
export default TelaReceptorLogado;