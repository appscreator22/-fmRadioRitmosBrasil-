import React, {useState, useRef} from "react";

import "./styles/app.scss";

import data from "./data";

//adding components
import Player from "./components/Player";
import Song from "./components/Songs";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
	//ref
	const audioRef = useRef(null);
	//state
	const [songs, setSongs] = useState(data());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	//state
	const [songInfo, setSongInfo] = useState ({
		currentTime: 0,
		duration: 0,
	});
	const [libraryStatus, setLibraryStatus] = useState(false);
	const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime:current, duration:duration});

    };


    return (
    	<div className="App">
			<Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
    	    <Song currentSong={currentSong} />
    	    <Player 
				audioRef ={audioRef}
				isPlaying={isPlaying} 
				setIsPlaying={setIsPlaying} 
				currentSong={currentSong} 
				setSongInfo={setSongInfo}
				songInfo={songInfo}
				songs={songs}
				setCurrentSong={setCurrentSong}
				setSongs={setSongs}
			/>
			<Library 
				audioRef={audioRef} 
				songs={songs} 
				setCurrentSong={setCurrentSong}
				isPlaying={isPlaying}
				setSongs={setSongs}
				libraryStatus={libraryStatus}
		    />
			<audio 
            	onTimeUpdate={timeUpdateHandler} 
            	onLoadedMetadata={timeUpdateHandler}
            	ref={audioRef} 
            	src={currentSong.audio}>
            </audio>
    	</div>
    );
}

export default App;
