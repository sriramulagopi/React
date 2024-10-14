import axios from "axios";
import { useState } from "react";
export const Login = function({setBool2}){
    const onsubmit = async function(e){
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        try{
            axios({
                url:"https://node-auth-jwt-w78c.onrender.com/auth/login",
                method:"POST",
                data:{
                    email,password
                }
            }).then((data)=>{
                localStorage.setItem("token",data.data.token);
                setBool2(true);
            })
        }
        catch(err){
            console.log(err);
        }
        // console.log(Email,Password);
    }
    return <div>
        <form onSubmit={onsubmit}>
            <input type="email" placeholder="Email" name="email" required/>
            <input type="password" placeholder="password" name="password" required/>
            <button>Login</button>
        </form>
    </div>
}