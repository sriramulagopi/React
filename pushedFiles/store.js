import {legacy_createStore as createStore,combineReducers} from "redux";
import { playList } from "./MoviesList";
const songsReducer = (state=playList,action)=>{
    if(action.type==="set_song"){
        return {songs:action.payload,id:action.id,img:action.img,name:action.name,bool:action.bool};
    }
    return state;
}
export const store = createStore(songsReducer);


