import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import axios from  "axios";
const root = ReactDOM.createRoot(document.getElementById("root"));
// const App = function(){
//   const [state,setState]=useState(10);
//   return <div>
//     <h1>{state}</h1>
//     <button onClick={()=>setState(state+1)}>Update Count</button>
//   </div>
// }
// root.render(<App/>)

// useEffect takes two arguments 1.Callback 2.[]
// By using useEffect we can acheive component life Cycle method.
// Here useEffect will trigger after every render because we didn't pass any dependency list.

// const App = function(){
//   const [count,setCount]=useState(0);
//   useEffect(()=>{
//     console.log("trigged")
//   });
//   return <div>
//     <h1>{count}</h1>
//     <button onClick={()=>{setCount(count+1)}}>Update Count</button>
//   </div>
// }
// root.render(<App/>)

// It will trigged if there is a change in dependency list.
// const App = function(){
//   const [count,setCount]=useState(0);
//   useEffect(()=>{
//     console.log("Trigged")
//   },[count])
//   return <div>
//     <h1>{count}</h1>
//     <button onClick={()=>setCount(count+1)}>Update Count</button>
//   </div>
// }
// root.render(<App/>)

// let x = 19;
// const App  = function(){
//   const [count,setCount]=useState(0);
//   useEffect(()=>{
//     console.log("func1");
//   },[x,count])
//   useEffect(()=>{
//     console.log("func2");
//   },[x])
//   return <div>
//     <h1>Count: {count}</h1>
//     <h2>X: {x}</h2>
//     <button onClick={()=>{setCount(count+1)}}>Update Count</button>
//     <button onClick={()=>{x++}}>Increment X</button>
//   </div>
// }
// root.render(<App/>)

// useEffect return undefined || null || function  we can expect this three, apart from that it gives an error.
// const App = function(){
//   const [count,setCount]=useState(0);
//   useEffect(function(){
//     console.log("trigged")
//     return function(){
//       console.log("Its for cleanup")
//     };
//   },[count])
//   return <div>
//     <h1>count:{count}</h1>
//     <button onClick={()=>{setCount(count+1)}}>Update Count</button>
//   </div>
// }
// const Test = function(){
//   const [bool,setBool]=useState(true);
//   return <div>
//     {bool && <App/>}
//     <button onClick={()=>{setBool(!bool)}}>Toggle</button>
//   </div>
// }
// root.render(<Test/>)

// Here setInterval will be created so many times why because whenever there is a state change the component will rerender again
// const Timer = function(){
//   const [timer,setTimer]=useState(0);
//   setInterval(()=>{
//     setTimer(timer+1);
//   },1000)
//   return <div>
//     <h1>{timer}</h1>
//   </div>
// }
// root.render(<Timer/>)

// Here actually the setInterval is running but count reference is 0 because its not returning.
// Here setInterval every time count will refer as 0;
// const Timer = function(){
//   const [count,setCount]=useState(0);
//   useEffect(()=>{
//     setInterval(()=>{
//       setCount(count+1)
//     },1000)
//   },[])
//   return <div>
//     <h1>{count}</h1>
//   </div>
// }
// root.render(<Timer/>)

// Here we are returning updated count.
// const Timer = function(){
//   const [count,setCount]=useState(0);
//   useEffect(()=>{
//     setInterval(()=>{
//       setCount(prev=>prev+1);
//     },1000)
//   },[])
//   return <div>
//     <h1>{count}</h1>
//   </div>
// }
// root.render(<Timer/> );

// const Timer = function(){
//   const [count,setCount]=useState(0);

//   useEffect(()=>{
//     let cleanup = setInterval(()=>{
//       console.log("render")
//       setCount(prev=>prev+1)
//     },1000)
//     return function(){
//       clearInterval(cleanup);
//     }
//   },[])
//   return <div>
//     <h1>{count}</h1>
//   </div>
// }
// // root.render(<Timer/>)

// const App = function(){
//   const [bool,setBool]=useState(true);
//   return <div>
//     {bool && <Timer/>}
//     <button onClick={()=>{setBool(!bool)}}>Toggle</button>
//   </div>
// }
// root.render(<App/>)

// Axios
// const Axios = function () {
//   const [data, setData] = useState(null);
//   useEffect(()=>{
//     fetch("https://api.postalpincode.in/pincode/507003")
//     .then((data) => data.json())
//     .then((data) => {
//       setData(data);
//     })
//     .catch(() => setData("error"));
//   },[])
//   if(data==="error")return <h1>Error Occured</h1>;
//   if(!data)return <h1>Loading</h1>
//   return <h1>Axios Example</h1>;
// };
// root.render(<Axios />);

// const Axios = function(){
//   const [data,setData]=useState(null);
//   useEffect(()=>{
//     axios({
//       url:"https://api.postalpincode.in/pincode/507003",
//       method:"GET",
//     }).then((data)=>{
//       console.log(data)
//       setData(data)
//     }).catch(()=>{
//       setData("Error")
//     })
//   },[])
//   if(data==="Error") return <h1>Error Occured</h1>;
//   if(!data) return <h1>Loading...</h1>
//   return <h1>Axios</h1>
// }
// root.render(<Axios/>)
