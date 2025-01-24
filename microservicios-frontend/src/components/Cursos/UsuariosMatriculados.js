import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UsuariosMatriculados = () => {
  const { id } = useParams(); // ID del curso
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      const response = await axios.get(`http://localhost:8002/api/cursos/${id}/usuarios`);
      setUsuarios(response.data);
    };
    fetchUsuarios();
  }, [id]);

  const handleDesmatricular = async (usuarioId) => {
    if (window.confirm('¿Está seguro de que desea desmatricular a este usuario?')) {
      await axios.delete(`http://localhost:8002/api/cursos/${id}/usuarios/${usuarioId}`);
      setUsuarios(usuarios.filter(usuario => usuario.id !== usuarioId));
    }
  };

  return (
    <div className="container mt-5">
      <h2>Usuarios Matriculados</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nombre} {usuario.apellido} - {usuario.email}
            <button className="btn btn-danger btn-sm ml-2" onClick={() => handleDesmatricular(usuario.id)}>Desmatricular</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsuariosMatriculados;
