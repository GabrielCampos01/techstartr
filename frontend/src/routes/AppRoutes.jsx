import { Route, Routes } from "react-router-dom";
import RecuperarSenha from "../pages/RecuperarSenha/RecuperarSenha";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";
import Painel from "../pages/Painel/Painel";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/recuperar-senha" element={<RecuperarSenha />} />
      <Route path="/painel" element={<Painel />} />
    </Routes>
  );
}

export default AppRoutes;