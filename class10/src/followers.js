// import { useEffect } from "react";
// import axios from "axios";
// export const Followers = function () {
//     const getFollowers = async function(){
//         try{
//             const token = localStorage.getItem("token");
//             const respondse = await axios({
//                 url:"https://node-auth-jwt-w78c.onrender.com/user/followers",
//                 method:"GET",
//                 headers:{
//                     Authorization:`Bearer:${token}`
//                 }
//             })
//             console.log(respondse)
//         }
//         catch(err){
//             alert("Error occured")
//         }
//     }
//     useEffect(()=>{
//         getFollowers();
//     },[])
//   return (
//     <div>
//       <h1>Followers are shown below:</h1>
//     </div>
//   );
// };