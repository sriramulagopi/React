import {Button, Form,Input, message, Radio} from "antd";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
const Signup = function(){
    const navigate = useNavigate();
    const onFinish = function(data){
        axios({
            url:"https://node-auth-jwt-w78c.onrender.com/auth/signup",
            method:"POST",
            data,
        }).then((data)=>{
            alert("Signed up successfully");
            navigate("/login")
        }).catch((err)=>{
            alert("Requested failed try again later")
        })
    }
    return <div className="loginform">
        <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Name" name="name" rules={[{required:true,message:"Name is required"}]}>
                <Input placeholder="Name"/>
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{required:true,message:"Email is required"},{type:"text",message:"Enter valid email"}]}>
                <Input placeholder="Email"/>
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{required:true,message:"Password is required"}]}>
                <Input.Password placeholder="Password"/>
            </Form.Item>
            <Form.Item label="City" name="city" rules={[{required:true,message:"Password is required"}]}>
                <Input placeholder="City"/>
            </Form.Item>
            <Form.Item label="Gender" name="gender" rules={[{required:true,message:"Gender is required"}]}>
                <Radio.Group>
                    <Radio value="MALE">Male</Radio>
                    <Radio value="FEMALE">Female</Radio>
                </Radio.Group>
            </Form.Item>
            <Button block htmlType="submit">Signup</Button>
            <h4 style={{padding:"10px 0px"}}>Have an account ? <Link to="/login">Login</Link></h4>
        </Form>
    </div>
};
export default Signup;