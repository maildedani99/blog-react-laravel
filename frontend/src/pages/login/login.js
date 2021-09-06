import React from 'react';
import { useHistory } from "react-router-dom";



const Login = () => {

    let history = useHistory();
        
              
    const  goToLanding = () => {
      history.push("/");
    }


    return (
            <div>
                <h1>soy la login page</h1>
                <input type="button" value="Volver" onClick={goToLanding} />
            </div>
    )
}
export default Login;
