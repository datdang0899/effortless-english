import React , { useState } from "react";
import CardTaskList from "../../Components/CardTaskList";
import Button from "../../Components/Common/Button";

function TaskList(props) {
  return (
    <div className="tasklist-section">
      <div className="tasklist-row mb-4">
        <h2 className="tasklist-heading">WORK</h2>
        <Button text="create Task" bg="bg-success">
          <i className="fa fa-plus" aria-hidden="true"></i>
        </Button>
      </div>
      <div className="tasklist-body">
        <CardTaskList />
        <CardTaskList />
        <CardTaskList />
        <CardTaskList />
        <CardTaskList />
        <CardTaskList />
      </div>
    </div>
  );
}

export default TaskList;
