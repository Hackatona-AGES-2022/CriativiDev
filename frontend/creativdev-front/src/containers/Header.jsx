import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react";
import logo from "../assets/bell.png"

const Header =()=>{
    return(
            <nav class="navbar navbar-expand-lg navbar-light bg-white" >
            <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src={logo} alt="" width="30" height="24" />
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
                <img src={logo} alt="" width="30" height="24" />
            </a>
            </div>
            </div>
        </nav>
    )
}
export default Header;