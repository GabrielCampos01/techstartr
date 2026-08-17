import { Navigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ children }) {
  const { usuario, carregandoAuth } = useAuth();

  if (carregandoAuth) {
    return null;
  }

  if (!usuario) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;