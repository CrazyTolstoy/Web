import React from "react";
import logo from "../images/logo.png"
import telefon from "../images/telefon.png"
import web from "../images/web.png"
import oblik from "../images/oblik.png"



export default function Navbar(){

    return(
        
  <div className="omotacNavbar">
    <div className="gornjaLinija">
        <div className="gornjaLinijaTekst">
            <p id="paragrafNavbar">KONTAKTIRAJTE NAS:</p>
            <img src={telefon} id="ikonicaNavbar"/>
            <p id="paragrafNavbar">+387 55 202 905</p>
            <img src={web} id="ikonicaNavbar"/>
            <p id="paragrafNavbar">marketing@orao.aero</p>
        </div>
        <div className="gornjaLinijaSlika">
            <img src={oblik} id="oblik"/>
        </div>
    </div>
    <div className="donjaLinija">
        <img src={logo} id="logo"/>
    </div>
  </div>
    )
}