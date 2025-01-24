import React, { useState } from 'react';
import axios from 'axios';

const UsuarioForm = ({ onSave }) => {
  const [form, setForm] = useState({ nombre: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:8004/api/usuarios', form);
    onSave(response.data);
    setForm({ nombre: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required />
      <label>Email:</label>
      <input type="email" name="email" value={form.email} onChange={handleChange} required />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default UsuarioForm;
