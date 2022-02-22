import React from "react";
import { BrowserRouter as Router, Route, Link, Routes, NavLink } from "react-router-dom";
import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import User from "./components/User";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/nosotros" className="btn btn-dark">
            Nosotros
          </Link>
          <Link to="/contacto" className="btn btn-dark">
            Contacto
          </Link>

        </div>
        <hr />
        <Routes>
          <Route path="/nosotros/:id" element= {<User />}>            
          </Route>
          <Route          
            path="/contacto"
            element={<Contacto />}
          ></Route>
          <Route            
            path="/nosotros"
            element={ <Nosotros />}
          ></Route>
          <Route path="/" element={<Inicio />}>
            
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
