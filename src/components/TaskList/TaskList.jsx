import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

function TaskList({ data }) {
  // console.log(data)
  return (
    <div
      id="tasklist"
      className="h-[55%] w-full py-5 mt-10 flex items-start gap-5 overflow-x-auto"
    >
      {data.tasks.map((element, idx) => {
        if (element.active) {
          return <AcceptTask key={idx} data={element} />;
        }
        if (element.newTask) {
          return <NewTask key={idx} data={element} />;
        }
        if (element.completed) {
          return <CompleteTask key={idx} data={element} />;
        }
        if (element.failed) {
          return <FailedTask key={idx} data={element} />;
        }
        return null; // Handle the case where none of the conditions match
      })}
    </div>
  );
}

export default TaskList;
