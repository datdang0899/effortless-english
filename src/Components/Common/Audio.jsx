import React, { useRef ,useState } from "react";
import mp3 from "../../Assets/Audios/TheRaceAudio.mp3";

function Audio() {
  const audioEl = useRef();
  const [playing, setPlaying] = useState(false);

  const handlePlayAudio = (playing) => {
    setPlaying(!playing);
    // play audio . 
    console.log(audioEl.current.play()) ; 
  };

  return (
    <div className="audio">
      <audio ref={audioEl} preload="none">
        <source src={mp3} type="audio/wav" />
        <source src={mp3} type="audio/mpeg" />
      </audio>
      <a
        id="audio-control"
        onClick={() => handlePlayAudio(playing)}
        className={togglePlaybutton(playing)}
        aria-hidden="true"
      ></a>
    </div>
  );

  function togglePlaybutton(playing) {
    return playing ? "fa fa-pause" : "fa fa-play";
  }
}

export default Audio;
