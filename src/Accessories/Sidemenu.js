import React from "react";
import { Link } from 'react-router-dom';

export default function Sidemenu(){

    return(
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
                <span></span>
            </label>

            <ul className="menu__box">
                <li>
                    <Link to="/table-page" className="menu__item">Unos podataka</Link>
                </li>
                <li>
                    <Link to="/graphic-page" className="menu__item">Graficki prikaz</Link>
                </li>
                <li>
                    <Link to="/api-page" className="menu__item">API</Link>
                </li> <li>
                    <Link to="/api-page" className="menu__item">API</Link>
                </li>
            </ul>
        </div>
    )
}
