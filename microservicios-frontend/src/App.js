import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import ListarUsuarios from './components/Usuarios/ListarUsuarios';
import CrearUsuario from './components/Usuarios/CrearUsuario';
import EditarUsuario from './components/Usuarios/EditarUsuario';
import ListarCursos from './components/Cursos/ListarCursos';
import CrearCurso from './components/Cursos/CrearCurso';
import MatricularUsuario from './components/Cursos/MatricularUsuario';
import UsuariosMatriculados from './components/Cursos/UsuariosMatriculados';
import EditarCurso from './components/Cursos/EditarCurso';

const App = () => (
  <Router>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/usuarios" element={<ListarUsuarios />} />
        <Route path="/usuarios/crear" element={<CrearUsuario />} />
        <Route path="/usuarios/editar/:id" element={<EditarUsuario />} />
        <Route path="/cursos" element={<ListarCursos />} />
        <Route path="/cursos/crear" element={<CrearCurso />} />
        <Route path="/cursos/editar/:id" element={<EditarCurso />} />
        <Route path="/matricular" element={<MatricularUsuario />} />
        <Route path="/cursos/:id/usuarios" element={<UsuariosMatriculados />} />
      </Routes>
    </div>
  </Router>
);

export default App;
