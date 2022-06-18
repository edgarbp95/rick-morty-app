import { useFormulario } from "../hooks/useForm"
import Swal from 'sweetalert2'
import React from 'react'


const Formulario = ({setNombre}) => {

  const [inputs, handleChange, reset] = useFormulario({
    nombre: ''
  })

  const {nombre} = inputs;

  const handleSubmit = e => {
    e.preventDefault();

    if(!nombre.trim()){
      Swal.fire({
        title: 'Error',
        text: 'Ingrese un personaje',
        icon: 'error',
        confirmButtonText: 'Volver a intentar'
    })}

    setNombre(nombre.trim().toLowerCase());

    reset();
  }

  return (
    
    <form onSubmit={handleSubmit}>
      <input
          type="text"
          value={nombre}
          onChange={handleChange}
          className="form-control mb-2"
          name="nombre"
          placeholder="Ingrese un personaje"
      />
      <button className="btn btn-buscar" type="submit">
          Buscar
      </button>
    </form>
);
}

export default Formulario
