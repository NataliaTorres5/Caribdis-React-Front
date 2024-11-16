import axios from "axios";

const animalQueries = {

  
    /*http://caribdis-back.onrender.com/api/animal*/ //externo
    /*http://localhost:4000/api/animal/*/

    async getAllAnimals() {
        try {
            const response= await axios("http://caribdis-back.onrender.com/api/animal");
            console.log(response)
            return response.data.response
        } catch (error) {
            console.log(error, "error en allanimals");
            return []
        }
    },

    async getOneById(id){
        try {
            const response = await axios(`http://caribdis-back.onrender.com/api/animal/${id}`);
            return response.data.response
        } catch (error) {
            console.log(error);
            return 
            
        }
    }, 

    async createOneAnimal(token, data){
        console.log(data, "query create one animal")
        try{
            const response = await axios.post(`http://caribdis-back.onrender.com/api/animal`, data, {
                headers:{
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                },
            })
            console.log(response)
            return response.data.response; 
        }catch (error) {
            console.log(error)
            return ("error de creación", [])

        }
    },

    async deleteOneAnimal(token, id) {
        try{
            const response = await axios.delete(`http://caribdis-back.onrender.com/api/animal/${id}`, {}, {
                headers:{
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                },
            })
            return response.data.response
        }catch (error) {
            console.error("is not deleting ")
            return error
            
        }

    },
    async updateOneAnimal( token, id, data){
        try {
            const response = await axios.put(`http://caribdis-back.onrender.com/api/animal/${id}`, data,  {
                headers:{
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                },

            })
            return response.data.response
        } catch (error) {
            console.error("is not updating ")
            return error
            
        }


},

}
export default animalQueries