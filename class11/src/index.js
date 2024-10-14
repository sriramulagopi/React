import React, { createContext, memo, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

// const context = createContext();
// const C1 = function () {
//   const value = useContext(context);
//   return <h1>C1 Component {value}</h1>;
// };
// const C2 = function ({ age }) {
//   const value = useContext(context)
//   return (
//     <div>
//       <h1>C2 Component {value}</h1>
//       <C3 age={age} />
//     </div>
//   );
// };
// const C3 = function ({ age }) {
//   const value = useContext(context)
//   console.log(value);
//   return <h1>C3 Component {age} {value}</h1>;
// };
// const App = function () {
//   let age = 23;
//   const [age1, setAge1] = useState(24);
//   return (
//     <div>
//       <context.Provider value={age1}>
//         <C1 />
//         <C2 age={age} />
//       </context.Provider>
//     </div>
//   );
// };
// root.render(<App />);



// const AppContext = createContext("Rajesh"); // It will return rajesh if some components inside of App component doesn't belongs to child.
// const C1 = memo(
//   function () {
//     return <h1>C1 Component</h1>;
//   }
// )
// const C2 = memo(
//   function () {
//     return (
//       <>
//         <h2>C2 Component</h2>
//         <C3 />
//       </>
//     );
//   }
// )
// const C3 = memo(
//   function () {
//     const value = useContext(AppContext);
//     return <h3>C3 Component {value}</h3>;
//   }
// )
// const App = function () {
//   const [age, setAge] = useState(23);
//   return (
//     <div>
//       <AppContext.Provider value={age}>
//         <C1 />
//         <C2 />
//       </AppContext.Provider>
//       <button onClick={()=>setAge(prev=>prev+1)}>Increment age</button>
//     </div>
//   );
// };
// root.render(<App/>)

// const AppContext = createContext("Rajesh");
// const C1 = memo(function () {
//   const value = useContext(AppContext);
//   return <h1>C1 Component{JSON.stringify(value)}</h1>;
// });
// const C2 = memo(function () {
//   const value = useContext(AppContext);
//   return (
//     <>
//       <h1>C2 Component {JSON.stringify(value)}</h1>
//       <C3 />
//     </>
//   );
// });
// const C3 = memo(function () {
//   const value = useContext(AppContext)
//   return <h1>C3 Component {JSON.stringify(value)}</h1>;
// });
// const C4 = function(){
//   const value = useContext(AppContext);
//   console.log(value)
//   return <h1>C4 Component</h1>
// }
// const App = function () {
//   const [age, setAge] = useState();
//   return (
//     <div>
//       <AppContext.Provider value={{ name: "Gopi", age: 24 }}>
//         <AppContext.Provider value={{ name: "Aravind", age: 23 }}>
//           <C1 />
//         </AppContext.Provider>
//         <C2/>
//       </AppContext.Provider>
//       <C4/>
//     </div>
//   );
// };
// root.render(<App/>)
