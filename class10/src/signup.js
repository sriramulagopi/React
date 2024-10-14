import axios from "axios";

export const Signup = function({setBool1}){
    const onsubmit = async function(e){
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const city = e.target.city.value;
        const gender = e.target.gender.value;
        try{
            const respondse = await axios({
                url:"https://node-auth-jwt-w78c.onrender.com/auth/signup",
                method:"POST",
                data:{
                    name,email,password,city,gender
                }
            }).then((data)=>{
                alert("Signed up successfully");
                setBool1(true);
            })
        }
        catch(err){
            console.log(err);
        }
    }
    return <div>
        <form onSubmit={onsubmit}>
            <input type="text" placeholder="Name" name="name" required/>
            <input type="email" placeholder="Email" name="email" required/>
            <input type="password" placeholder="Password" name="password" required/>
            <input type="text" placeholder="City" name="city" required/>
            <select name="gender">
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
            </select>
            <button>Signup</button>
        </form>
    </div>
}