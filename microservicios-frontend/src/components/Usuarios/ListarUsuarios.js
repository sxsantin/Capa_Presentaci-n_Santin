import React, { useEffect, useState } from 'react';
import { getUsuarios, deleteUsuario } from '../../services/usuarioService';
import { Link } from 'react-router-dom';

const ListarUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    const { data } = await getUsuarios();
    setUsuarios(data);
  };

  const handleDelete = async (id) => {
    await deleteUsuario(id);
    fetchUsuarios();
  };

  return (
    <div className="container mt-5">
      <h2>Usuarios</h2>
      <Link to="/usuarios/crear" className="btn btn-success mb-3">Crear Usuario</Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nombre}</td>
              <td>{usuario.email}</td>
              <td>
                <Link to={`/usuarios/editar/${usuario.id}`} className="btn btn-primary btn-sm">Editar</Link>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(usuario.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarUsuarios;
