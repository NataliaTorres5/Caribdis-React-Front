import React from 'react'
import { useState, useEffect, useRef } from "react";
import animalQueries from '../../services/animalQueries.js';
import "../../styles/Animals/AnimalCard.css";

function CreateAnimal() {

    const token = localStorage.getItem("token");


     const [openEdit, setOpenEdit] = useState(false)

     const handleClick = () => setOpenEdit(!openEdit)

     const handleCreate = (event) => {
        event.preventDefault();
        const updateData = {
            name: event.target[0].value,
            commonName:event.target[1].value,
            image:event.target[2].value,
            category: event.target[3].value,
            description: event.target[4].value,
        }; 
        animalQueries.createOneAnimal(token, updateData).then((res) => {
            console.log("se actualizo el animal", res)
        } )
    }


  return (

    
        <>
<div className="createButton">
<p>Admin: Añade nuevos animales</p>
    <button className="edita" onClick={handleClick}>
        Introducir nuevo animal
    </button>
    {
        openEdit === true ?( 
            <form  className='form' onSubmit={handleCreate}>
                <input type="text" name='name'    placeholder="name"  />
                <input type="text"  name='commonName'   placeholder="commonName" />
                <input type="text" name='image'   placeholder="image" />
                <select name="category" 
                id="">
                    <option value="Mamifero">Mamifero</option>
                    <option value="Ave">Ave</option>
                    <option value="Reptil">Reptil</option>
                    <option value="Peces">Peces</option>
                    <option value="Anfibios">Anfibios</option>
                    <option value="Artropodos">Artropodos</option>
                </select>
                <input type="text" name='description'  placeholder="description"  />
                <div className="formButton">
                    <button>
                        Editar
                    </button>
                </div>

            </form>
        ):(null)
    }
</div>
    
    </>
  )
}

export default CreateAnimal