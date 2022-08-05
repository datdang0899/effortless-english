import React from "react";
import Button from "../../Components/Common/Button";

function LessonContent(props) {
  return (
    <div className="lesson-content">
      <div className="lesson-content_heading">
        <h2>the race</h2> <Button text="translate" bg="btn-info"/>
      </div>
      <p>
        It's 5 o'clock and Allen is riding his motorcycle in San Francisco. He
        is riding down Van Ness street and comes to a stop light. A red Ferrari
        pulls up next to him. The driver's wearing dark sun glasses. He looks
        over at Allen. Allen looks at him and realizes that the driver is Tom
        Cruise! Tom sneers at Allen. He says, "When the light turns green, let's
        race". Allen says, "Allright, you're on!" Tom says, "I'm gonna smoke
        you, sucka!" Allen says, "You wish. I'm gonna beat you and your
        sorry-ass car". Allen and Tom wait at the light. They rev their engines.
        Suddenly, the light turns green. Allen and Tom take off! They zoom down
        Van Ness at top speed. Tom is winning. But suddenly, blue and red lights
        appear behind Tom-- its the police. They pull him over. Allen zooms past
        Tom, laughing. He yells, "Better luck next time!" Allen is the winner!
      </p>
    </div>
  );
}

export default LessonContent;
