import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Login from "./pages/Login";
import Favoritos from "./pages/Favoritos";
import Navbar from "./components/Navbar";

import PrivateRoute from "./router/PrivateRoute";
import PublicRoute from "./router/PublicRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />

        {/*publica*/}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        {/*privada */}
        <Route
          path="/favoritos"
          element={
            <PrivateRoute>
              <Favoritos />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
