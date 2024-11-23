import { useState, useEffect, React } from "react";
import animalQueries from "../../services/animalQueries.js";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DeleteAnimal from "./DeleteAnimal.jsx";
import EditAnimal from "./EditAnimal.jsx";
import "../../styles/Animals/AnimalCard.css"

function AnimalCard(animal) {
  const user = useSelector((store) => store.user.userData);
  const role = user?.role



 console.log( animal._id,
    animal.name,
    animal.commonName,
    animal.image,
    animal.category,
    animal.description
)

  return (
    <>
        <div className="card-a">
          <div className="img-a">
            <img src={animal.image} alt={name} />
          </div>
          <div className="lowerCard-animal">
            <div className="nameInfo">
              <h2 className="common">{animal.commonName}</h2>
              <h3 className="name">{animal.name}</h3>
            </div>
            <div className="descrInfo">
              <p> {animal.category} </p>
              <p> {animal.description} </p>
            </div>
          </div>
          <div className="infoContent-animals">
          {role === "admin" ? (
            <>
             <DeleteAnimal _id={animal._id} />
             <EditAnimal animal={animal} />   
             </>

         
        ):(
            null
          )}

        </div>
        </div>

        
      </>
 
  );
}

export default AnimalCard;
