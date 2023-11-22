import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
  <nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
    <div className='container-fluid'>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/" exact>Главная</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">О нас</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)