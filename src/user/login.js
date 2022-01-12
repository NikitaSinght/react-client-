//import React, { useEffect } from 'react'
import React from 'react';
import { TextField,Button,Form,FormLayout} from '@shopify/polaris';
import { useState } from 'react';
import './AppCss.css'
const Login=()=>{
    const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [emailerror,setEmailerror]=useState("");
  const[passerror,setpasswordError]=useState("");
  
 const emailValidation = () => {
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email.match(regex)){
        return true;
    }
    return false;
}
const passwordValidation = () => {
  const passwordRegex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  console.log(password)
  if(password.match(passwordRegex)){
    
    return true;
  }
  else{
    return false;
  }
}
  const submitt=()=>{
    var res = emailValidation();
    var pass = passwordValidation();
    console.log(pass)
    if(!res){
      alert("email is not in proper format")
    }
    
    else if (!pass){
      alert("password is not in proper format")
    }
    else{
    window.alert("Email:"+ email + "  Password:" + password);
    setEmail('');
    setPassword('');
  }
}
const emailerrorFun = ()=>{
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(email===""){
    setEmailerror("email is required!");
  }
  
   else if(email.match(regex)){
        setEmailerror("");
    }
    else{
      setEmailerror("email is not valid")
    }
}
const passworderrorFun = ()=>{
  if(password ===""){
    setpasswordError("password is required!");
  }
  else{
    setpasswordError("");
  }
}
return(
    <div className = "form">
    <h1 className = "heading">Welcome to my Login Page</h1><br/>
      <Form onSubmit={submitt}> 
          <FormLayout>
            
            <div className = "textfield">
     <TextField label="Email"autoComplete="off" align="left" type="email" value= {email}
      onChange= { (newValue) => setEmail(newValue)}
     onBlur={emailerrorFun}
    />
    <span className="error">{emailerror}</span>
            <br/>
            <TextField label="Password"autoComplete="off" align="left" type="password" value = {password}
      onChange= { (newValue) => setPassword(newValue)}
      onBlur={passworderrorFun}
      />
      <span className="error">{passerror}</span>
      </div>
      <div className="submit">
            <Button submit >Submit</Button>
            </div>
            </FormLayout>
        </Form>
      </div>
)
}
export default Login;