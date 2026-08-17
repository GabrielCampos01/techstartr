import { NavLink } from "react-router-dom";

import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        TechStart
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink to="/perfil">
          Perfil
        </NavLink>

        <NavLink to="/historico">
          Histórico
        </NavLink>

        <NavLink to="/ranking">
          Ranking
        </NavLink>

        <NavLink to="/jogadores">
          Jogadores
        </NavLink>

        <NavLink to="/suporte">
          Suporte
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar; 