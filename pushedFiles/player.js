import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Player = function () {
  const [bool,setBool]=useState(false);
  let { songs, id, img,name,bool:bool1 } = useSelector((state) => {
    return state;
  });
  console.log(bool1)
  let song;
  const ref1 = useRef();
  if(songs){
    song = songs.filter((item)=>item.id==id)[0].fileAddress;
    // bool1 ? ref1.current.pause() : ref1.current.play();
  }
  const playPause = function () {
    bool ? ref1.current.pause() : ref1.current.play();
    setBool(!bool);
  };
  return (
    <div className="player">
      <div className="div1">
        <img
          src={img}
          alt="Image failed to load"
        />
        <div className="title">
          <div>
            <h3>{name}</h3>
            <span className="material-icons">favorite</span>
          </div>
          <p>Song by Shilpa Rao</p>
        </div>
      </div>
      <div className="div2">
        <div>
          <span className="material-icons">skip_previous</span>
          <span className="material-icons" onClick={playPause}>
            {(bool && bool1) ? "pause" : "play_arrow"}
          </span>
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
      <audio ref={ref1} src={`/${song}`} controls></audio>
    </div>
  );
};
