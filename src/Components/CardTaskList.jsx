import React, {useState ,useRef } from "react";
import Button from "../Components/Common/Button" ; 

function CardTaskList() {
  const [checked,setChecked] = useState(false) ; 
  const [editTask,setEditTask] = useState(false) ; 
  const [taskText, setTaskText] = useState("my friend and i work together at company today .") ;
  const textRef = useRef() ; 
  const taskInput = useRef() ; 

  const handleEditTask = () =>{
      setEditTask(!editTask) ;
      taskInput.current.value = taskText ; 
  }

  const handleSubmitForm = (e) =>{
    e.preventDefault() ; 
    setTaskText(taskInput.current.value) ; 
    setEditTask(!editTask) ; 
  }

  return (
    <div className={"card-tasklist mb-2" + getClassTask(checked)}>
      <div className="card-tasklist_checkbox">
        <span onClick={() => setChecked(!checked)}>
          <i className="fa fa-check" aria-hidden="true"></i>
        </span>
      </div>
      <form  className={"card-tasklist_form" + getClassTask(editTask)} onSubmit={handleSubmitForm}>
        <input type="text" ref={taskInput}/>
        <Button text="EDIT" bg="bg-success"/>
      </form>
      <p className="card-tasklist_content" ref={textRef}>
        {taskText}
      </p>
      <div className="card-tasklist_controls">
        <i className="fa fa-pencil-square-o tasklist-edit" aria-hidden="true" onClick={() => handleEditTask()}></i>
        <i className="fa fa-trash tasklist-remove" aria-hidden="true"></i>
      </div>
    </div>
  );

  function getClassTask(state){
    return state ? " active" : "" ; 
  }

}

export default CardTaskList;
