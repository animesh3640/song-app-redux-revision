import { useSelector } from "react-redux";
import SongDetails from "./components/SongDetails";
import SongList from "./components/SongList";

function App() {
  const data = useSelector(state => state.data)
  return (
    <div className="App">

      <SongList data={data} />
      <SongDetails />

    </div>
  );
}

export default App;
