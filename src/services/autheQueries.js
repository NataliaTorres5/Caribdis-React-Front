import axios from "axios"; 

const apiAuth = axios.create(
    {
        baseURL: 'https://caribdis-back.onrender.com/api/user'
    }
)

const authQueries  = {
    async singInUser(data) {
        try {
            const response = await apiAuth.post("/signin",data)
            console.log(response)

            const token = response.data.response.token
            localStorage.setItem("token",token)
            return response.data.response;

        } catch (error){

            console.log(error)

            return [];
        }; 
    },

    async signInUserWithToken(token) {
        console.log(token)
        try {
          const response = await axios.post("https://caribdis-back.onrender.com/api/user/token",{}, {
      
            headers: {
              "Authorization": "Bearer " + token,
            },
          });
          
          return response.data.response;
        } catch (error) {
          console.log(error);
          return [];
        }
      },

    async registroUsuario(data) {
        try {
        const response = await axios("https://caribdis-back.onrender.com/api/user/signup", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          }, 
          data: JSON.stringify(data)
  
        });
        console.log(response);
        return response.data.response;
      } catch (error) {
        console.log(error);
        return [];
      }
    },
    async getUserById(id){ 
        try{
          const response = await axios(`https://caribdis-back.onrender.com/api/user/${id} ` )
        } catch(error){
          console.log(error, "hay error")
          
        
        }
      },
    
      async updateUser( token, data){
    
      }
}
export default authQueries;