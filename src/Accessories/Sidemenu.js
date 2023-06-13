import { useEffect } from 'react';
import React from "react";
import { Link, useNavigate } from 'react-router-dom';

export default function Sidemenu() {
  const navigate = useNavigate();

  useEffect(() => {
    const disableBackButton = (e) => {
      e.preventDefault();
      window.history.forward();
    };

    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener('popstate', disableBackButton);

    return () => {
      window.removeEventListener('popstate', disableBackButton);
    };
  }, []);

  const handleLogout = () => {
    localStorage.setItem("auth", false);
    navigate("/");
  };

  return (
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
        </li>
        <li>
          <Link to="/spring" className="menu__item">Spring</Link>
        </li>
        <li>
          <Link to="/report" className="menu__item">Report</Link>
        </li>
        <li>
          <Link to="/" className="menu__item" onClick={handleLogout}>Logout</Link>
        </li>
      </ul>
    </div>
  )
}
