import React from "react";
import logo from "./images/logo.png"
import telefon from "./images/telefon.png"
import web from "./images/web.png"
import './LoginFiles/bootstrap.min.css';
import './LoginFiles/style.css';



export default function Navbar(){

    return(
 <div class="top">
                <div class="row">
                    <div class="col-lg-7 col-md-7">
                        <ul class="list-inline">
                        <img src={logo} id="logo"/>
                        <img src={telefon} id="ikonica"/>
                            <li class="list-inline-item">
                                POZOVITE NAS <i class="fas fa-phone"></i> +387 55 202 905
                            </li>
                        <img src={web} id="ikonica"/>
                            <li class="list-inline-item">
                                 <a href="mailto:marketing@orao.aero">marketing@orao.aero</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-5 col-md-5 text-right">
                        <ul class="top_menu list-inline">
                        </ul>
                    </div>
                </div>
        </div>     
    )
}