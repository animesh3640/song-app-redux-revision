import React from "react"
import { useDispatch } from "react-redux";
import {selected_song} from '../redux/actions/actionCreator'
const SongList = ({ data }) => {
    
    const dispatch = useDispatch();
    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Songs List</h2>
            <div className="song-list">
                {
                    data.map((song, index) => (
                        <div className="song" key={index}
                            onClick={() => { dispatch(selected_song(song)) }}
                        >
                            {song.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default SongList;