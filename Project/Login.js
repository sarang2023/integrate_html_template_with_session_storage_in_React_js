import React from "react";
import axios from "axios";
function Login()
{
 const baseURL = "https://shivaconceptdigital.com/api/loginmobile.php";
 
 const [username, setUsername] = React.useState("");
 const [password, setPassword] = React.useState("");
 const handelInput =(e)=>{
    switch (e.target.id) {
      case "username":setUsername(e.target.value)
        break;
        case "password":setPassword(e.target.value)
          break;
        default:break;
    }
}
const changeSubmit =(e)=>{
    alert(username + " ," + password) 
    axios
    .post(baseURL, {
      email: username,
      pwd: password,
     
    })
    .then((response) => {
        console.log(response.data);
        if(response.data.status == "0")
        {
          sessionStorage.setItem("uid",username)
           window.location='dashboard';
        }
        else
        {
            console.log(response.data);
           window.location = '/login';
        }
    }); 
    e.preventDefault()  
   }
 
   return(
       <>      
          

          <div class="form-group">
                            <input type="email" id='username'onChange={handelInput} aria-describedby="emailHelp" placeholder="Enter email" required/>
                        </div>
                        <div class="form-group">
                            <input type="password" id='password'  onChange={handelInput} placeholder="Password" required/>
                        </div>


                        <button type="submit" class="btn btn-primary"onClick={changeSubmit}>Submit</button>



           
       
        
          
       </>
   );
}
export default Login;
