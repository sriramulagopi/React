import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { playList } from "./movies";
import { useEffect, useRef, useState } from "react";

const SelectedMovieSongs = function () {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const ref1 = useRef({bool1:true});
  console.log(ref1)
  const { movieId } = useParams();
  const playSong = function (song, movieId) {
    if (song.id !== state?.song?.id) {
        ref1.current.bool1=true;
      dispatch({ type: "set_song", payload: { song, movieId ,bool1:ref1.current.bool1} });
    }
    else{
        ref1.current.bool1=ref1.current.bool1===true?false:true;
        dispatch({type:"playPause",payload:{song,movieId,bool1:ref1.current.bool1}})
    }
  };
  const selectedMovie = playList.filter((movie) => movie.id == movieId)[0]
    .songs;
  return (
    <div className="selectedSongs">
      {selectedMovie.map((song) => {
        return (
          <div key={song.id} className="song">
            <h3>{song.title}</h3>
            <button
              className="material-icons"
              onClick={() => {
                playSong(song, movieId);
              }}
            >
              {state?.song?.id == song.id && ref1.current.bool1? "pause" : "play_arrow"}
            </button>
            <button className="material-icons">favorite</button>
          </div>
        );
      })}
    </div>
  );
};
export default SelectedMovieSongs;
