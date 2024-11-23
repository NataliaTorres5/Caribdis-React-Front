import React from 'react'
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import animalQueries from '../../services/animalQueries.js';



function EditAnimal({animal}) {
    console.log(animal)
    const token = localStorage.getItem("token");


     const [openEdit, setOpenEdit] = useState(false)

     const handleClick = () => setOpenEdit(!openEdit)



    const handleUpdate = (event) => {
        event.preventDefault();
        const updateData = {
            name: event.target[0].value,
            commonName:event.target[1].value,
            image:event.target[2].value,
            category: event.target[3].value,
            description: event.target[4].value,
        }; 
        animalQueries.updateOneAnimal(token,animal._id, updateData).then((res) => {
            console.log("se actualizo el animal", res)
        } )
    }

  return (
    <>
    <button className="edita" onClick={handleClick}>
        Editar
    </button>
    {
        openEdit === true ?( 
            <form  className='form' onSubmit={handleUpdate}>
                <input type="text" name='name'   defaultValue={animal.name} placeholder="name"  />
                <input type="text"  name='commonName'  defaultValue={animal.commonName} placeholder="commonName" />
                <input type="text" name='image'  defaultValue={animal.image}  placeholder="image" />
                <select name="category" 
                 defaultValue={animal.category} id="">
                    <option value="Mamifero">Mamifero</option>
                    <option value="Ave">Ave</option>
                    <option value="Reptil">Reptil</option>
                    <option value="Peces">Peces</option>
                    <option value="Anfibios">Anfibios</option>
                    <option value="Artropodos">Artropodos</option>
                </select>
                <input type="text" name='description'  defaultValue={animal.description} placeholder="description"  />
                <div className="formButton">
                    <button>
                        Editar
                    </button>
                </div>

            </form>
        ):(null)
    }

    
    </>
  )
}

export default EditAnimal