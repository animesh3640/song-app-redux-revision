import {SELECTED_SONG} from '../actions/actionTypes'

let initialState = '';

const SongReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case SELECTED_SONG:
            return actions.value;
        default:
            return state;    
    }
}

export default SongReducer;