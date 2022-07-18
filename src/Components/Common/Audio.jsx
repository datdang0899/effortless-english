import React , { useRef }from "react";
import mp3 from "../../Assets/Audios/TheRaceAudio.mp3" ; 
function Audio() {
   const audioEl = useRef() ; 

   const handlePlayAudio = () =>{
    
   }
  return (
    <div className="audio">
      <audio ref={audioEl} preload="none">
        <source src={mp3} type="audio/wav" />
        <source src={mp3} type="audio/mpeg" />
      </audio>
      <a id="audio-control">
        <i class="fa fa-play" aria-hidden="true"></i>
      </a>
    </div>
  );
}

export default Audio;
