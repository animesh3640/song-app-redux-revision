import { createStore } from "redux";
import { combineReducers } from "redux";
import SongData from './reducers/SongData'
import SongReducer from "./reducers/SongReducer";

const rootReducer = combineReducers({
    data:SongData,
    selectedSong : SongReducer
})

const store = createStore(rootReducer)

export default store;