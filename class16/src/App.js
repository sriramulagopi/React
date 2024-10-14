import { BrowserRouter, Routes, Route } from "react-router-dom";
import MusicApp from "./musicapp.js";
import Movies from "./movies.js";
import SelectedMovieSongs from "./selectedSongs.js";
import LikedSongs from "./likedSongs.js";
import "./style.css"
const App = function () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={MusicApp}>
            <Route path="" Component={Movies} />
            <Route path="movie/:movieId" Component={SelectedMovieSongs} />
            <Route path="likedsongs" Component={LikedSongs} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
