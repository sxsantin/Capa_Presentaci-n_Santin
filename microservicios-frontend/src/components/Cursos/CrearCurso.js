import React, { useState } from 'react';
import { createCurso } from '../../services/cursoService';
import { useNavigate } from 'react-router-dom';

const CrearCurso = () => {
  const [curso, setCurso] = useState({ nombre: '', descripcion: '', creditos: 0 });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurso({ ...curso, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCurso(curso);
    navigate('/cursos');
  };

  return (
    <div className="container mt-5">
      <h2>Crear Curso</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" name="nombre" value={curso.nombre} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea className="form-control" name="descripcion" value={curso.descripcion} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Créditos</label>
          <input type="number" className="form-control" name="creditos" value={curso.creditos} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Crear</button>
      </form>
    </div>
  );
};

export default CrearCurso;
