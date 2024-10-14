import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Login } from "./login";
import { Signup } from "./signup";
import "./style.css"
const root = ReactDOM.createRoot(document.getElementById("root"));
const App = function(){
  const [bool1,setBool1]=useState(true);
  const [bool2,setBool2]=useState(false);
  const logout = function(){
    localStorage.removeItem("token");
    setBool2(false);
  }
  if(bool2 || localStorage.getItem("token")){
    return <div>
      <h1>Your logged in user</h1>
      <button onClick={logout}>Click here logout</button>
    </div>
  }
  return(
    <div className="container">
      {bool1?<Login setBool2={setBool2}/>:<Signup setBool1={setBool1}/>}
      <button onClick={()=>{setBool1(!bool1)}}>{bool1?"Signup":"Login"}</button>
    </div>
  )
}
root.render(<App/>)