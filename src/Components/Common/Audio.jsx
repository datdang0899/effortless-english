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
      <a id="audio-control" className="fa fa-play" aria-hidden="true"></a>
    </div>
  );
}

export default Audio;
