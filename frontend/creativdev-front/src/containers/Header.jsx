import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react";
import bell from "../assets/bell.png";
import logo from "../assets/LOGO.png";


    export const HeaderDonator = () => {return(
        <nav class="navbar navbar-expand-lg navbar-light bg-white" >
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="" width="240" height="70" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-5 mb-2 me-5 mb-lg-0 mx-auto justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Minhas Doações</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Realizar Doações</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Sobre</a>
                    </li>
                    </ul>
                <a class="navbar-brand" href="#">
                    <img src={bell} alt="" width="30" height="24" />
                </a>
                </div>
            </div>
        </nav>
        
        )
    }


    export const HeaderReciever = () => {return(
        <nav class="navbar navbar-expand-lg navbar-light bg-white" >
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="" width="240" height="70" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-5 mb-2 mb-lg-0 mx-auto justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Doações Recebidas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Solicitar Doações</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Sobre</a>
                    </li>
                    </ul>
                    <a class="navbar-brand" href="#">
                    <img src={bell} alt="" width="30" height="24" />
                </a>
                </div>
            </div>
        </nav>
        )
    }

    export const HeaderLogin = () => {return(
        <nav class="navbar navbar-expand-lg navbar-light bg-white" >
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logo} alt="" width="240" height="70" />
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-5 mb-2 mb-lg-0 mx-auto justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Sobre</a>
                    </li>
                    </ul>
                    <a href="/login-doador"><button type="button" class="btn btn-dark me-4 py-2 px-4" >Login</button></a>
                    <a href="/cadastro"><button type="button" class="btn btn-dark me-4 py-2 px-4" >Register</button></a>
                    <a class="navbar-brand" href="#">
                    <img src={bell} alt="" width="30" height="24" />
                </a>
                </div>
            </div>
        </nav>

        )
    }
    

