import { Button, Form,Input, message } from "antd";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from ".";
const Login = function(){
    const navigate = useNavigate()
    const {setIsUserLogin} = useContext(AuthContext);
    const [state,setState]=useState("init")
    const onFinish = function(data){
        console.log(data)
        setState("pending");
        axios({
            url:"https://node-auth-jwt-w78c.onrender.com/auth/login",
            method:"POST",
            data,
        }).then((data)=>{
            localStorage.setItem("token",data.data.token);
            setIsUserLogin(true);
            setState("success")
            navigate("/user")
        }).catch((data)=>{
            setState("failed")
        })
    }
    return <div className="loginform" >
        <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Email" name="email" rules={[{required:true,message:"Email is required"},{type:"text",message:"Enter valid email"}]}>
                <Input placeholder="Email"/>
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{required:true,message:"Password is required"}]}>
                <Input.Password placeholder="Password"/>
            </Form.Item>
            <Button block htmlType="submit" loading={state==="pending"}>Login</Button>
            <h4>Don't have an account ? <Link to="/signup">Signup</Link></h4>
        </Form>
    </div>
};
export default Login;