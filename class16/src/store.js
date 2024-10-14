import {legacy_createStore as createStore} from "redux";
const reducer = (state,action)=>{
    switch(action.type){
        case "set_song":{
            return action.payload;
        }
        case "playPause":{
            return action.payload;
        }
    }
}
const store = createStore(reducer);
export default store;