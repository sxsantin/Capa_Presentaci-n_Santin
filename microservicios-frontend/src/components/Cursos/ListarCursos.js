import React, { useEffect, useState } from 'react';
import { getCursos, deleteCurso } from '../../services/cursoService';
import { Link } from 'react-router-dom';

const ListarCursos = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    fetchCursos();
  }, []);

  const fetchCursos = async () => {
    const { data } = await getCursos();
    setCursos(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Está seguro de que desea eliminar este curso?')) {
      await deleteCurso(id);
      fetchCursos();
    }
  };

  return (
    <div className="container mt-5">
      <h2>Cursos</h2>
      <Link to="/cursos/crear" className="btn btn-success mb-3">Crear Curso</Link>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Créditos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map(curso => (
            <tr key={curso.id}>
              <td>{curso.id}</td>
              <td>{curso.nombre}</td>
              <td>{curso.descripcion}</td>
              <td>{curso.creditos}</td>
              <td>
                <Link to={`/cursos/editar/${curso.id}`} className="btn btn-warning btn-sm">Editar</Link>
                <Link to={`/cursos/${curso.id}/usuarios`} className="btn btn-info btn-sm">Ver Usuarios</Link>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(curso.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarCursos;
