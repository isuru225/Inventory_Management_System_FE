import React from "react";

type props = {
    status : string
}

const TaskStatusHeading : React.FC<props> = ({status}) => {
    return (
        <div className="task-status-container">
          <div className="task-status">
            <span className={`status-indicator ${status}`}></span>
            <span className="status-text">{status}</span>
          </div>
          <button className="add-btn">+</button>
        </div>
      );
}

export default TaskStatusHeading;