import actions from "./actions";

const delay = function(s){
    return new Promise(r=>setTimeout(r,s))
}
export async function asyncIncrement(dispatch,getState){
    await delay(1000)
    dispatch({type:actions.inc_count});
    await delay(3000);
    dispatch({type:actions.inc_count});
}