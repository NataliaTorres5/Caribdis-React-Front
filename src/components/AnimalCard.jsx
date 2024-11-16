import { useState, useEffect, React } from "react";
import animalQueries from "../services/animalQueries.js";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function AnimalCard() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const animalData = await animalQueries.getAllAnimals();
        setAnimals(animalData);
      } catch (error) {
        console.log(error, "error trayendo animales");
      }
    };
    fetchAnimals();
  }, []);

  return (
    <div>
      <div className="banner">
        <h2>Animals</h2>
      </div>
      <div className="filter"></div>
      <div className="cardContainer-a">
        <div className="card-a">
          <div className="img-a">
            <img src={animals.image} alt={animals.name} />
          </div>
          <div className="lowerCard">
            <div className="nameInfo">
              <h2 className="common">{animals.commonName}</h2>
              <h3 className="name">{animals.name}</h3>
            </div>
            <div className="descrInfo">
              <p> {animals.category} </p>
              <p> {animals.description} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimalCard;
