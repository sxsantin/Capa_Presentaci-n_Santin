import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MatricularUsuario = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [form, setForm] = useState({ usuarioId: '', cursoId: '' });

  useEffect(() => {
    const fetchData = async () => {
      const usuariosResponse = await axios.get('http://localhost:8004/api/usuarios');
      const cursosResponse = await axios.get('http://localhost:8002/api/cursos');
      setUsuarios(usuariosResponse.data);
      setCursos(cursosResponse.data);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8002/api/cursos/${form.cursoId}`, { id: form.usuarioId });
    alert('Usuario matriculado correctamente');
  };

  return (
    <div className="container mt-5">
      <h2>Matricular Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Usuario:</label>
          <select className="form-control" name="usuarioId" onChange={handleChange} required>
            <option value="">Seleccione un usuario</option>
            {usuarios.map((usuario) => (
              <option key={usuario.id} value={usuario.id}>
                {usuario.nombre} {usuario.apellido}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Curso:</label>
          <select className="form-control" name="cursoId" onChange={handleChange} required>
            <option value="">Seleccione un curso</option>
            {cursos.map((curso) => (
              <option key={curso.id} value={curso.id}>
                {curso.nombre}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Matricular</button>
      </form>
    </div>
  );
};

export default MatricularUsuario;
