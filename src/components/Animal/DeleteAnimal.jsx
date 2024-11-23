import React from 'react'
import { useSelector } from "react-redux";
import animalQueries from '../../services/animalQueries.js';


function DeleteAnimal(_id) {

const token = localStorage.getItem("token");

const handleDelete = () => {
    animalQueries.deleteOneAnimal(token, _id).then((res) => {
      console.log("se borro el animal", res);
    });
  };

  return (
    <button  onClick={handleDelete}>Borrar animal</button>
  )
}

export default DeleteAnimal