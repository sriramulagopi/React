import { dec, inc } from "./store2";

export async function asyncIncrement(dispatch,getState){
    console.log(1)
    await new Promise(r=>setTimeout(r,1000));
    dispatch(inc())
    await new Promise(r=>setTimeout(r,2000));
    dispatch(dec())
}