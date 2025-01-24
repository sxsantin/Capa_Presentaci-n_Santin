import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCursoById, updateCurso } from '../../services/cursoService';

const EditarCurso = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [curso, setCurso] = useState({ nombre: '', descripcion: '', creditos: 0 });

  useEffect(() => {
    const fetchCurso = async () => {
      const { data } = await getCursoById(id);
      setCurso(data);
    };
    fetchCurso();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurso({ ...curso, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCurso(id, curso);
    navigate('/cursos');
  };

  return (
    <div className="container mt-5">
      <h2>Editar Curso</h2>
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
        <button type="submit" className="btn btn-success">Actualizar</button>
      </form>
    </div>
  );
};

export default EditarCurso;
