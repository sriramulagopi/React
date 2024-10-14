import React ,{Component,useState} from "react";
import ReactDOM from "react-dom/client";
import App from "./weather";
// import { App } from "./weather";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>)

// ComponentDidMount syntax
// class App extends Component{
//     constructor(props){
//         super(props);
//         console.log(this);
//     }
//     render(){
//         return <h1>Component life cycle method</h1>
//     }
//     componentDidMount(){
//         console.log("ComponentDidMount trigged");
//     }
// }

// ComponentDidUpdate
// class App extends Component{
//     constructor(obj){
//         super(obj)
//         this.state={count:0};
//     }
//     render(){
//         const update = ()=>{
//             this.setState({count:this.state.count+1})
//         }
//         return <div>
//             <h1>ComponentDidUpdate {this.state.count}</h1>
//             <button onClick={update}>Click</button>
//         </div>
//     }
//     componentDidUpdate(){
//         console.log("componentDidUpdate trigged")
//     }
// }


// ComponetWillUnMount
// class App extends Component{
//     constructor(){
//         super()
//         this.state={count:0};
//     }
//     render(){
//         const update = ()=>{
//             this.setState({count:this.state.count+1})
//         }
//         return <div>
//             <h1>ComponentDidUpdate {this.state.count}</h1>
//             <button onClick={update}>Click</button>
//         </div>
//     }
//     componentWillUnmount(){
//         console.log("componentWillUnmount trigged");
//     }
// }

// const Test = function(){
//     const [state,setState]=useState(false);
//     return <div>
//         {state && <App/>}
//         <button onClick={()=>{setState(!state)}}>ComponentWillunmount</button>
//     </div>
// }
// root.render(<Test/>)//


// All three are used in this example
// class App extends Component{
//     constructor(){
//         super()
//         this.state={count:0};
//     }
//     render(){
//         const update = ()=>{
//             this.setState({count:this.state.count+1})
//         }
//         return <div>
//             <h1>ComponentDidUpdate {this.state.count}</h1>
//             <button onClick={update}>Click</button>
//         </div>
//     }
//     componentDidMount(){
//         console.log("ComponentDidMount trigged");
//     }
//     componentDidUpdate(){
//         console.log("ComponetDiUpdate trigged");
//     }
//     componentWillUnmount(){
//         console.log("componentWillUnmount trigged");
//     }
// }

// const Test = function(){
//     const [state,setState]=useState(false);
//     return <div>
//         {state && <App/>}
//         <button onClick={()=>{setState(!state)}}>ComponentWillunmount</button>
//     </div>
// }
// root.render(<Test/>)
