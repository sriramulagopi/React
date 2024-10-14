import { useParams } from "react-router-dom";
import { playList } from "./MoviesList";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export const Songs = function () {
  const bool = true
  const dispatch = useDispatch();
  const {id:id1} = useSelector(state=>state)
  const send = function (id,songs,img,name) {
    dispatch({ type:"set_song",payload:songs,id:id,img:img,name:name,bool:bool});
  };
  const { id } = useParams();
  let songs1 = playList.filter((movie) => movie.id == id)[0];
  let {name,displayPicture,songs} = songs1;
  return (
    <div className="songs">
      {songs.map((song) => {
        return (
          <div key={song.id} className="song">
            <h3>{song.title}</h3>
            <button
              className="material-icons"
              onClick={() => {
                send(song.id.toString(),songs,displayPicture,name);
              }}
            >
            {(song.id==id1)?"pause":"play_arrow"}</button>
            <button className="material-icons">favorite</button>
          </div>
        );
      })}
    </div>
  );
};
