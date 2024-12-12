import React from "react";
import Header from "../UI/Header";
import TaskListNumber from "../UI/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <div>
      <div className="bg-[#1c1c1c]  h-screen p-10 gap-10 flex flex-col">
        <Header data={props.data} changeUser={props.changeUser} />
        <TaskListNumber data={props.data} />
        <TaskList data={props.data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
