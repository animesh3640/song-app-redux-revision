
import { SELECTED_SONG } from "./actionTypes";

export const selected_song=(song)=>{
    return{
        type:SELECTED_SONG,
        value:song
    }
}
