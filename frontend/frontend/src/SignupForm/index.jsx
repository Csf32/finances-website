import { useState } from "react";

const SignupForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signupUsernameChange = (e) => {
        setUsername(e.target.value)
    };

    const signupPasswordChange = (e) => {
        setPassword(e.target.value)
    };

    const signupSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch("http://localhost:5173/signup", {
                
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ username, password }),
            })

           if(response.ok) {
                console.log("User registed");
                window.location.href = '../Home/index.jsx'
               
           }
        
        } catch (error) {
            console.error("Something wrong to register user ", error);


        }
    };

    return(
                
                
        <div className="d-flex position-absolute top-50 start-50 translate-middle">

            <form onSubmit= { signupSubmit }>

                <div className="">
                   
                    <input type="Username" placeholder="Username" className="" id = "username" value={ username } onChange={ signupUsernameChange }/>
                </div>

                <div className="mt">
                    <input type="password" placeholder="Password" className="" name="password" id="password" value={ password } onChange={ signupPasswordChange }/>
                </div>

                <div className="d-flex">

                    <button type ="submit" id= "button" className="button-pr mt">SIGNUP</button>

                </div>

             </form>

        </div>
    )   
    
}

export default SignupForm;