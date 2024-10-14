import { Outlet } from "react-router-dom";
import Footer from "./footer.js"
const MusicApp = function(){
    return <div className="musicapp">
        <div className="top">Header</div>
        <div className="middle">
            <Outlet/>
        </div>
        <div className="bottom">
            <Footer/>
        </div>
    </div>
}
export default MusicApp;