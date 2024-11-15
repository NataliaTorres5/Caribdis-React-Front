import axios from "axios";

const productQueries = {

    async getAllProducts() {
        try {
            const response= await axios("http://caribdis-back.onrender.com/api/product");
            console.log(response)
            return response.data.response
        } catch (error) {
            console.log(error, "error en allproducts");
            return []
        }
    },

    async getOneById(id){
        try {
            const response = await axios(`http://caribdis-back.onrender.com/api/product/${id}`);
            return response.data.response
        } catch (error) {
            console.log(error);
            return 
            
        }
    }, 

    async createOneProduct(token, data){
        console.log(data, "query create one animal")
        try{
            const response = await axios.post(`http://caribdis-back.onrender.com/api/product`, data, {
                headers:{
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                },
            })
            console.log(response)
            return response.data.response; 
        }catch (error) {
            console.log(error)
            return ("error de creación prodcuto", [])

        }
    },

    async deleteOneProduct(token, id) {
        try{
            const response = await axios.delete(`http://caribdis-back.onrender.com/api/product/${id}`, {}, {
                headers:{
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                },
            })
            return response.data.response
        }catch (error) {
            console.error("is not deleting product ")
            return error
            
        }

    },
    async updateOneProduct( token, id, data){
        try {
            const response = await axios.put(`http://caribdis-back.onrender.com/api/product/${id}`, data,  {
                headers:{
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json"
                },

            })
            return response.data.response
        } catch (error) {
            console.error("is not updating product ")
            return error
            
        }


},

}