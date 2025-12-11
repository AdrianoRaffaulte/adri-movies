import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav
      style={{
        backgroundColor: "#111",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link to="/catalogo" style={{ color: "white", textDecoration: "none" }}>
          Catálogo
        </Link>

        <Link to="/favoritos" style={{ color: "white", textDecoration: "none" }}>
          Favoritos
        </Link>
      </div>

      
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {!user && (
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
            Iniciar Sesión
          </Link>
        )}

        {user && (
          <>
            <span style={{ color: "white" }}>Hola, {user.name}</span>

            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "crimson",
                border: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                color: "white",
                cursor: "pointer",
              }}
            >
              Cerrar Sesión
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
