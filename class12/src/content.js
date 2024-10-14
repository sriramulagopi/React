import { useContext } from "react"
import { AppContext, colors } from ".";
export const Content = function(){
    const {colors1,theme,colors2} =useContext(AppContext)
    return <div className="content">
        <i class="fa-brands fa-react"></i>
        <h1>React</h1>
        <h5>The library for web and native user interfaces</h5>
        <div className="buttons">
            <button style={colors1}>Learn React</button>
            <button style={colors2}>API Reference</button>
        </div>
    </div>
}