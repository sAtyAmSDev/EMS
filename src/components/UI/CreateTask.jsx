import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskAsign, setTaskAsign] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDiscripton, setTaskDiscripton] = useState("");
  const [newtaskCreate, setNewtaskCreate] = useState([]);
  const HandelCreatTask = (e) => {
    e.preventDefault();
    console.log(taskTitle, taskDate, taskAsign, taskCategory, taskDiscripton);
    setNewtaskCreate({
      taskTitle,
      taskDate,
      taskCategory,
      taskDiscripton,
      active: false,
      completed: false,
      failed: false,
      newTask: true,
    });

    if (!userData || !userData) {
      console.error("User data or employees list is missing.");
      return;
    }

    console.log("User Data:", userData);
    const data = userData;

    data.forEach((element) => {
      if (taskAsign == element.firstName) {
        element.tasks.push(newtaskCreate);
        element.taskCounter.newTask += 1;
      }
    });
    setUserData(data);

    setTaskAsign("");
    setTaskCategory("");
    setTaskDate("");
    setTaskDiscripton("");
    setTaskTitle("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => HandelCreatTask(e)}
        className="flex items-start justify-between bg-[#29282896] p-5 gap-5"
      >
        <div className="flex flex-col gap-3 w-[45%] ">
          <div>
            <h2>Task Titlet</h2>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="bg-transparent border-emerald-400   border rounded-[6px] px-2 py-1 w-full outline-none placeholder:text-gray-400 "
              type="text"
              placeholder="Make a Task"
            />
          </div>
          <div>
            <h2>Date</h2>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="bg-transparent border-emerald-400 border rounded-[6px] px-2 py-1 w-full outline-none placeholder:text-gray-400 "
              type="date"
              placeholder="DD/MM/YYYY"
            />
          </div>
          <div>
            <h2>Asign to</h2>
            <input
              value={taskAsign}
              onChange={(e) => setTaskAsign(e.target.value)}
              className="bg-transparent border-emerald-400 border rounded-[6px] px-2 py-1 w-full outline-none placeholder:text-gray-400 "
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h2>Category</h2>
            <input
              value={taskCategory}
              onChange={(e) => setTaskCategory(e.target.value)}
              className="bg-transparent border-emerald-400 border rounded-[6px] px-2 py-1 w-full outline-none placeholder:text-gray-400 "
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 w-[45%] ">
          <div>
            <h3>Discripton</h3>
            <textarea
              value={taskDiscripton}
              onChange={(e) => setTaskDiscripton(e.target.value)}
              className=" w-full bg-transparent border-emerald-400 border rounded-[6px] px-2 py-1 outline-none h-[180px] "
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <button className="bg-emerald-400 px-5 py-3 rounded-xl font-medium">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
