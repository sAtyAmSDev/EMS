import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="flex gap-5 ">
      <div className=" bg-emerald-400 px-5 py-3 rounded-xl w-[45%] ">
        <h2 className="font-bold text-3xl  ">{data.taskCounter.newTask}</h2>
        <h3 className="font-semibold text-2xl ">New Tasks</h3>
      </div>
      <div className=" bg-blue-400 px-5 py-3 rounded-xl w-[45%] ">
        <h2 className="font-bold text-3xl  ">{data.taskCounter.completed}</h2>
        <h3 className="font-semibold text-2xl ">Completed Tasks</h3>
      </div>
      <div className=" bg-red-400 px-5 py-3 rounded-xl w-[45%] ">
        <h2 className="font-bold text-3xl  ">{data.taskCounter.active}</h2>
        <h3 className="font-semibold text-2xl ">Active Tasks</h3>
      </div>
      <div className=" bg-yellow-400 px-5 py-3 rounded-xl w-[45%] ">
        <h2 className="font-bold text-3xl  ">{data.taskCounter.failed}</h2>
        <h3 className="font-semibold text-2xl ">Failed Tasks</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
