import React, { createContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route, Link, useNavigate, useParams} from "react-router-dom";
// import { Navbar } from "./navbar";
// import { Content } from "./content";
// import "./style.css"
const root = ReactDOM.createRoot(document.getElementById("root"));
// export const AppContext = createContext();
// export const colors = {
//   light:{  background:"#000",color:"#fff",},
//   dark:{
//     background:"#fff",color:"#000"
//   }
// }
// const App = function () {
//   const [theme, setTheme] = useState("light");
//   const [icon,setIcon]=useState("fa-regular");
//   const [colors1,setColors1]=useState({background:"#3998B6",color:"#fff"})
//   const [colors2,setColors2]=useState({background:"#fff",color:"#000"})
//   const toggleTheme = function(){
//     setColors1(colors1.color==="#fff"?{background:"#037aa2a4",color:"#000"}:{background:"#3998B6",color:"#fff"})
//     setColors2(colors2.color==="#000"?{background:"#000",color:"#fff"}:{background:"#fff",color:"#000"})
//     setTheme(theme==="light"?"dark":"light");
//     setIcon(icon==="fa-regular"?"fa-solid":"fa-regular")
//   }
//   useEffect(()=>{
//     Object.assign(document.body.style,colors[theme])
//   },[theme])
//   return (
//     <div className="App">
//       <AppContext.Provider value={{theme,toggleTheme,icon,colors1,colors2}}>
//         <Navbar />
//         <Content />
//       </AppContext.Provider>
//       {/* <button onClick={toggle}></button> */}
//     </div>
//   );
// };
// root.render(<App/>)

// const Wrapper = function({children}){
//   console.log(children)
//   return <div className="Wrapper">
//     {children}
//   </div>
// }
// const App1  = function(){
//   return <div className="App1">
//     <Wrapper>
//       <h1>Child One</h1>
//       <h2>Child two</h2>
//     </Wrapper>
//   </div>
// }
// root.render(<App1 />);
// const Gym = function(){
//   return <h1>Gym section</h1>
// }
// const Projects = function(){
//   return <h1>Projects section</h1>
// }

// const App2 = function(){
//   return <div>
//     <BrowserRouter>
//     <Routes>
//       <Route path="home" element={<h1>Home screen</h1>}/>
//       <Route path="test" element={<h1>Test screen</h1>}/>
//       <Route path="gym" element={<Gym/>}/>
//       <Route path="projects" Component={Projects}/>
//     </Routes>
//     </BrowserRouter>
//   </div>
// }
// root.render(<App2/>);


// const Home = function(){
//   return <div>
//     <h1>Home Screen</h1>
//     <Link to="/help">Navigate to help</Link><br/>
//     <Link to="help">Navigate to inside of home help</Link>
//   </div>
// }
// const Help = function(){
//   const navigate = useNavigate();
//   return <div>
//     <h1>Help Screen</h1>
//     <button onClick={()=>navigate("/home")}>Navigate to home Screen</button>
//   </div>
// }
// const Test = function(){
//   return <div>
//     <h1>Test screen</h1>
//   </div>
// }
// const App = function(){
//   return <div>
//     <h1>This is commom every page</h1>
//     <BrowserRouter>
//     <Routes>
//       <Route path="home" element={<Home/>}/>
//       <Route path="help" element={<Help/>}/>
//       <Route path="test" element={<Test/>}/>
//     </Routes>
//     </BrowserRouter>
//   </div>
// }
// root.render(<App/>)


// const Blinkit = function(){
//   return <h1>Blinkit Milk products</h1>
// }
// const Home = function(){
//   const navigate = useNavigate();
//   return <div>
//     <h1>Home Page</h1>
//     <button onClick={()=>{true && navigate("/prd/milk/prn/1002")}}>Navigate to blinkit</button>
//   </div>
// }
// const Test = function(){
//   return <h1>Test Screen</h1>
// }
// const Gym = function(){
//   return <h1>Gym Section</h1>
// }
// const App = function(){
//   return <div>
//     <BrowserRouter>
//     <Routes>
//       <Route path="home" Component={Home}/>
//       <Route path="prd/:productID/prn/:productName" Component={Blinkit}/>
//       <Route path="test/prd" Component={Test}/>{/* After test it must be prd not anything else (test/prd)*/}
//       <Route path="gym/:productId" Component={Gym}/>{/* After gym what ever it would be (gym/102) or (gym/milk) */}
//     </Routes>
//     </BrowserRouter>
//   </div>
// }
// root.render(<App/>)


// const Home = function(){
//   const navigate = useNavigate()
//   const params = useParams();
//   console.log(params)
//   return <div>
//     <h1>Home Screen</h1>
//     <button onClick={()=>{navigate("/milkName/milk/milkId/8327")}}>Navigate to milk section</button>
//   </div>
// }
// const Product = function(){
//   const param = useParams();
//   console.log(param);
//   return <h1>Product Details</h1>
// }
// const Entry = function(){
//   const navigate = useNavigate();
//   return <div>
//     <h1>Entry Screen</h1>
//     <button onClick={()=>{navigate("/home")}}>Home Screen</button>
//   </div>
// }
// const App = function(){
//   return <div>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" Component={Entry}/>
//       <Route path="home" Component={Home}/>
//       <Route path="milkName/:prn/milkId/:prd" Component={Product}/>
//     </Routes>
//     </BrowserRouter>
//   </div>
// }
// root.render(<App/>)