import React from "react";
import { NavLink } from "react-router-dom";
function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Jeu
          </NavLink>
        </li>
        <li>
          <NavLink to="/parametres" className={({ isActive }) => (isActive ? "active" : "")}>
            Paramètres
          </NavLink>
        </li>
        <li>
          <NavLink to="/historique" className={({ isActive }) => (isActive ? "active" : "")}>
            Historique
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;