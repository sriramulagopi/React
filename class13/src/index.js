import React, { lazy, Suspense, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
  Link,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

// const App = function(){
//   const [toggle,setToggle]=useState(true);
//   console.log(1)
//   const result = useMemo(()=>{
//     console.log("trigged")
//     let sum = 0;
//     for (let i=1;i<100+1;i++){
//       sum+=i
//     }
//     return sum;
//   },[toggle])

//   return <div>
//     <h1>{result}</h1>
//     <button onClick={()=>setToggle(!toggle)}>click</button>
//   </div>
// }
// root.render(<App/>)

// const App = function(){
//   const Sections = function(){
//     const {pathname} = useLocation();
//     return <div>
//       {pathname!=="/mypage/section2" && <h1>Sections Page</h1>}
//       <Outlet/>
//     </div>
//   }
//   return <div>
//     <BrowserRouter>
//     <Routes>
//       <Route path="home" element={<h1>Home Screen</h1>}/>
//       <Route path="admin" element={<div><h1>Admin's root screen</h1>
//         <Outlet/>
//       </div>}>
//       <Route path="login" element={<h1>Login screen</h1>}/>
//       <Route path="signup" element={<h1>Signup screen</h1>}/>
//       </Route>
//       <Route path="mypage" Component={Sections}>
//         <Route path="section1" element={<h1>Section1</h1>}/>
//         <Route path='section2' element={<h1>Section2</h1>}/>
//       </Route>
//     </Routes>
//     </BrowserRouter>
//   </div>
// }
// root.render(<App/>)

// const Home = function(){
//   return <div className="homeSection">
//     <div>
//       <Link className="link" to="/home/gym">Gym</Link>
//       <Link className="link" to="/home/modules">Moudles</Link>
//     </div>
//     <div>
//       <Outlet/>
//     </div>
//   </div>
// }
// const App = function () {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="home" Component={Home}>
//             <Route path="gym" element={<h1>Gym Section</h1>}/>
//             <Route path="modules" element={<h1>Modules Section</h1>}/>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };
// root.render(<App/>)

// const Login = lazy(() =>
//   import("./login")
// );
// const Signup = lazy(() =>
//   import("./signup")
// );
// const AdminSreen = function () {
//   return (
//     <div className="usersLogin">
//       <div>
//         <Link to="/admin/login">Login</Link>
//         <Link to="/admin/signup">Signup</Link>
//       </div>
//       <div>
//         <Outlet />
//       </div>
//     </div>
//   );
// };
// const App = function () {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="admin" Component={AdminSreen}>
//             <Route
//               path="login"
//               element={
//                 <Suspense fallback={<p>Loading...</p>}>
//                   <Login />
//                 </Suspense>
//               }
//             />
//             <Route
//               path="signup"
//               element={
//                 <Suspense fallback={<p>Loading...</p>}>
//                   <Signup />
//                 </Suspense>
//               }
//             />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };
// root.render(<App />);
