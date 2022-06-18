import React, { useState } from 'react'
import Formulario from './components/Formulario'
import PintarCard from './components/PintarCard';


const App = () => {

  const [nombre,setNombre] = useState('');
  return (
    <>
    <div className='container'>
    <h1 className='mt-5'>Rick and Morty APP</h1>
        <Formulario setNombre={setNombre}/>
        <PintarCard nombre={nombre}/>
    </div>
    </>
  )
}

export default App
