import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { playList } from "./movies";

const Footer = function () {
  const ref1 = useRef();
  const state = useSelector(state=>state);
  const [bool,setBool]=useState(false);
  let movie;
  if(state){
    movie=playList.filter(item=>item.id==state.movieId)[0];
  }
  const playPause = function(){
    setBool(!bool)
    bool?ref1.current.pause():ref1.current.play();  
  }
  useEffect(()=>{
    state?.bool1?ref1.current.play():ref1.current.pause();
  },[state?.bool1,state?.song?.id])
  return (
    <div className="player">
      <div className="div1">
        <img
          src={movie?movie.displayPicture:"https://assets.thehansindia.com/h-upload/2023/07/19/1365933-jr-ntr.webp"}
          alt="Image failed to load"
        />
        <div className="movieTitle">
          <div>
            <b>{movie?movie.name:"Devara"}</b>
            <span className="material-icons">favorite</span>
          </div>
          <p>Shilpa Rao</p>
        </div>
      </div>
      <div className="div2">
        <div className="handles">
          <span className="material-icons">skip_previous</span>
          <span className="material-icons" onClick={playPause}>{(bool || state?.bool1)?"pause":"play_arrow"}</span>
          <span className="material-icons">skip_next</span>
        </div>
        <div>
          <span>0:00</span>
          <div className="bar">
            <div className="insideBar"></div>
          </div>
          <span>0:00</span>
        </div>
      </div>
      <div className="div3">
        <audio ref={ref1} src={state?`/${state.song.fileAddress}`:"/devara/devara2.mp3"} controls></audio>
      </div>
    </div>
  );
};
export default Footer;
