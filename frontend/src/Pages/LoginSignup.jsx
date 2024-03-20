import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData,setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const Changehandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  const login = async() => {
    console.log("Login Function Executed",formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method:'POST',
      headers:{
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    }).then((response)=> response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.error);
    }
  }

  const signup = async() => {
    console.log("Signup Function Executed",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    }).then((response)=> response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors);
    }

  }


  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" && <input name='username' value={formData.username} onChange={Changehandler} type="text" placeholder='Your Name' />}
          <input name='email' value={formData.email} onChange={Changehandler} type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={Changehandler} type="password" placeholder='Password'/>
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        <p className="loginsignup-login">
          {state === "Sign Up" ? 
            "Already have an account? " :
            "Create an account? "
          }
          <span onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")}>
            {state === "Sign Up" ? "Login Here" : "Click Here"}
          </span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" id='agree' />
          <label htmlFor="agree">By continuing, I agree to the terms of use & privacy policy.</label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
