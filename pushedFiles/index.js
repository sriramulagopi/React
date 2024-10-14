import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter,Outlet,Route,Routes} from "react-router-dom"
import "./style.css"
import {Provider} from "react-redux";
import { MoviesList } from "./MoviesList";
import { LikedSongs } from "./LikedSongs";
import { Songs } from "./Songs";
import { Player } from "./player";
import { store } from "./store";
const root = ReactDOM.createRoot(document.getElementById("root"));
const MusicApp = function(){
  return <div className="container">
    <div className="div1">
      <h1>Music App</h1>
    </div>
    <Outlet/>
    <Player/>
  </div>
}
const App = function () {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="" Component={MusicApp}>
          <Route path="" Component={MoviesList}/>
          <Route path="movie/:id" Component={Songs}/>
          <Route path="likedsongs" Component={LikedSongs}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
};
root.render(<Provider store={store}>
  <App/>
</Provider>)
