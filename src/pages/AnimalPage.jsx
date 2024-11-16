import{useEffect, useState, React} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AnimalCard from "../components/AnimalCard";
import animalQueries from "../services/animalQueries";


function AnimalPage() {
  const [animalInfo, setAnimalInfo] =useState([])
  const params = useParams();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.userData);
  const userID = user.id
  let token = localStorage.getItem("token");
  const [openTab, setOpenTab]= useState(false);
  const handleClick = () => setOpenTab(!openTab);

  const role = (role) => {
    if (role === "admin") return "Administrador";
    if (role === "user") return "Usuario";
  };

  const [newAnimal, setNewAnimal] = useState({
    name: "",
    commonName: "",
    description: "",
    image: "",
  });

  const handleCreate = (event) => {
    const {name, value} = event.target;
    setNewAnimal((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    }

    const handleSubmit = (event) => {
      event.preventDefault();
      const data ={
   
        image:  event.target[0].value,
        commonName:  event.target[1].value,
        name: event.target[2].value,
        description: event.target[3].value,
        category: event.target[4].value,
      }
      console.log(data)

      animalQueries.createOneAnimal(token, data). then((res) => {
        if(data){
          console.log(res, "animal was created")
        }else{
          console.log("animal was not created")
        }
      })
}

useEffect(() => {
  animalQueries.getOneById(params.id).then(setNewAnimal)
}, [params.id])
  return (
    <>
    <div>
        {animalInfo.length > 0 && ( // Use && for conditional rendering
          animalInfo.map((animal) => ( // Use a descriptive variable for each animal
            <AnimalCard key={animal.id} {...animal} />
          ))
        )}
      </div>

    </>
  );
}
 
export default AnimalPage;
