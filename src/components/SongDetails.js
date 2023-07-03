import { useSelector } from "react-redux";
const SongDetails =()=>{

    const selectedSong = useSelector(state=>state.selectedSong)

    return(
        <div>
             {
          selectedSong&&(
            <div >
              <h2 style={{textAlign:"center"}}>Selected Song</h2>
              <div className="selectedsong">
                <h2>
                  <span class="material-symbols-outlined">music_note</span> 
                  {selectedSong.name} - {selectedSong.duration}
                </h2>
                <h3>{selectedSong.album} - {selectedSong.author}</h3>
                <h3>{selectedSong.genere}</h3>
              </div>
            </div>
          )
        }
        </div>
    )
}
export default SongDetails