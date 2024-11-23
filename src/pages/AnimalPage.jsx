import{useEffect, useState, React} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AnimalCard from "../components/Animal/AnimalCard";
import animalQueries from "../services/animalQueries";
import CreateAnimal from "../components/Animal/CreateAnimal";
import "../styles/Animals/AnimalCard.css"


function AnimalPage() {

  const user = useSelector((store) => store.user.userData);
  const role = user?.role 

  const [animals, setAnimals] =useState([])

  
  useEffect(() => {
    animalQueries.getAllAnimals().then((data) =>{
      setAnimals(data)
  })
  }, []);

  
  
  return (
    <>

    <div className="pag-Animals-full">
    
       <div className="banner-animals">
      
        <h2>Animales</h2>
        <p>Quieres saber sobre los animales que tenemos en el acuario?</p>
        <p>Conocelos!</p>

        
      </div>

     
      <div className="createAnimals-button">
      {role === "admin" ? (   <CreateAnimal/>) :  null }
   
      </div>

      <div className="filter"></div>
    <div className="container-animals">
        {animals?.length > 0 && ( // Use && for conditional rendering
          animals.map((animal) => ( // Use a descriptive variable for each animal
            <AnimalCard key={animal.id} {...animal} />
          ))
        )}
      </div>
      </div>

    </>
  );
}
 
export default AnimalPage;

/*

const params = useParams();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.userData);
  const userID = user?.id
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
*/ 
