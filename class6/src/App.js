// import { useState } from "react"
// First Topic
// export const App = function(){
//     const [count,setCount]= useState(0);
//     const Incre = function(){
//         setCount(count+19);
//         setCount(count-9);
//         setCount(count+10);
//     }
//     const Decre = function(){
//         setCount(count-1)
//     }
//     return <div>
//         <button onClick={Decre}>Decrement</button>
//         <h2>Count: {count}</h2>
//         <button onClick={Incre}>Increment</button>
//     </div>
// }

import { useState } from "react"

// export const App = function(){
//     const [count,setCount]=useState(0);
//     const Incre = function(){
//         setCount(curr=>curr+19);
//         setCount(curr=>curr-9);
//         setCount(curr=>curr+10);
//     }
//     const Decre = function(){
//         setCount(curr=>curr-1);
//     }
//     return <div>
//         <button onClick={Decre}>Decrement</button>
//         <h1>Count:{count}</h1>
//         <button onClick={Incre}>Increment</button>
//     </div>
// }

// export const App = function(){
//     const [count,setCount]=useState(10);
//     const Incre = function(){
//         setCount((curr)=>{return curr+19});
//         setCount(count+10);
//         setCount(curr=>curr+20);
//     }
//     const Decre = function(){
//         setCount(curr=>curr-1);
//     }
//     return <div>
//         <button onClick={Decre}>Decrement</button>
//         <h1>Count:{count}</h1>
//         <button onClick={Incre}>Increment</button>
//     </div>
// }

// Lazy Intialization
// const findSum = function(n){
//     console.log("trigged every time")
//     let sum = 0;
//     for (let i=1;i<=n;i++){
//         sum+=i
//     }
//     return sum;
// }
// const Card = function({n}){
//     const [count,setCount]=useState(findSum(n));
//     return <div>
//         <button onClick={()=>{setCount(count-1)}}>Decrement</button>
//         <h1>Count: {count}</h1>
//         <button onClick={()=>{setCount(count+1)}}>Increment</button>
//     </div>
// }

// export const App = function(){
//     return <div>
//         <Card n={10}/>
//     </div>
// }


// const findSum = function(n){
//     console.log("Not trigged every time")
//     let sum = 0;
//     for (let i=1;i<=n;i++){
//         sum+=i
//     }
//     return sum;
// }
// const Card = function({n}){
//     const [count,setCount]=useState(()=>{
//         console.log("Not trigged every time")
//         return findSum(n);
//     });
//     return <div>
//         <button onClick={()=>{setCount(count-1)}}>Decrement</button>
//         <h1>Count: {count}</h1>
//         <button onClick={()=>{setCount(count+1)}}>Increment</button>
//     </div>
// }

// export const App = function(){
//     return <div>
//         <Card n={10}/>
//     </div>
// }



// State Uplifting
// const Incre = function({setCount}){
//     return <button onClick={()=>{setCount(curr=>curr+1)}}>Increment</button>
// }
// const Decre = function({setCount}){
//     return <button onClick={()=>{setCount(curr=>curr-1)}}>Decrement</button>
// }
// export const App = function(){
//     const [count,setCount]=useState(0);
//     return <div>
//         <Decre setCount={setCount}/>
//         <h1>Count: {count}</h1>
//         <Incre setCount={setCount}/>
//     </div>
// }