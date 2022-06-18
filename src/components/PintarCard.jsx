import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import Card from "./Card";


const PintarCard = ({nombre}) => {

    const [personajes, setPersonajes] = useState([]);

    useEffect(() =>{
        obtenerPersonajes(nombre)
    }, [nombre]);

    const obtenerPersonajes = async (nombre) => { 
        try {
            const res = await fetch(
                `https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`
            );

            const data = await res.json();
            console.log(...data.results)
            setPersonajes([...data.results])
        
        } catch (error) {
            console.log(error)
            Swal.fire({
                title: 'Error',
                text: 'Personaje no encontrado',
                icon: 'error',
                confirmButtonText: 'Volver a intentar'
            })
        } finally{
            
        }
    }


  return (
    
    <div className="row mt-2">
        {personajes.map((item)=>(
            <Card key={item.id} character={item} />
        ))}
    </div>
    
    
  )
}

export default PintarCard
