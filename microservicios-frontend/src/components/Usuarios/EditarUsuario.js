import React, { useEffect, useState } from 'react';
import { getUsuarioById, updateUsuario } from '../../services/usuarioService';
import { useNavigate, useParams } from 'react-router-dom';

const EditarUsuario = () => {
  const { id } = useParams();
  const [usuario, setUsuario] = useState({ nombre: '', email: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsuario = async () => {
      const { data } = await getUsuarioById(id);
      setUsuario(data);
    };
    fetchUsuario();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUsuario(id, usuario);
    navigate('/usuarios');
  };

  return (
    <div className="container mt-5">
      <h2>Editar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" name="nombre" value={usuario.nombre} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={usuario.email} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Actualizar</button>
      </form>
    </div>
  );
};

export default EditarUsuario;
