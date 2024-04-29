import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import "./Login.css"

const Login = () => {
    
    const [credentials,setCredentials]=useState({email:"" , password:""})
    const onChange = (ele) => {
        setCredentials({...credentials,[ele.target.name]:ele.target.value})
    }
        const navigate =useNavigate();

    const handleLogin = async(e) => {
        e.preventDefault();
        
     const response = await fetch(`http://localhost:5000/sign_up/login`,{method:"POST", 
     headers:{'Content-Type':'application/json'},
    body:JSON.stringify({email:credentials.email,password:credentials.password})});
    const json = await response.json();
    console.log(json);
    if(json.success) {
        //redirect
        localStorage.setItem('token' , json.authtoken)
        navigate("/");
    }
    else
    {
        alert("Invalid Credentials");
    }

    }
  return (
    <div className="loginBody">
    
    <div className="container loginContainer" id="container loginContainer">
        <div className="form-container sign-up">
            <form>
                <h1>Create Account</h1>
                <div className="social-icons">
                    <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registeration</span>
                
                <input type="email" name="email" id="email" placeholder="Email"/>
                <input type="password" name="password" id="password" placeholder="Password"/>
                <button>Sign Up</button>
            </form>
        </div>
        <div className="form-container sign-in">
            <form onSubmit={handleLogin}>
                <h1>Sign In</h1>
                <div className="social-icons">
                    <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                    <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <span>or use your email password</span>
                <input type="email" name='email' id="email" onChange={onChange} value={credentials.email} placeholder="Email"/>
                <input type="password" name='password' onChange={onChange} id="password" value={credentials.password} placeholder="Password"/>
                <a href="#">Forget Your Password?</a>
                <button type='submit'>Sign In</button>
            </form>
        </div>
        <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-panel toggle-left">
                    <h1>Welcome Back!</h1>
                    <p>Enter your personal details to use all of site features</p>
                    <button className="hidden" id="login">Sign In</button>
                </div>
                <div className="toggle-panel toggle-right">
                    <h1>Hello, Friend!</h1>
                    <p>Register with your personal details to use all of site features</p>
                    <button className="hidden" id="register" >Sign Up</button>
                </div>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Login
