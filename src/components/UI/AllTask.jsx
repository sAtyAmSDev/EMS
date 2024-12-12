import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5">
      <div className="bg-[#29282896]  flex flex-col gap-2">
        <div className="bg-red-400 px-4 py-3 rounded-lg flex justify-between items-center ">
          <h2 className="w-1/5 text-lg  font-semibold ">Employee Name</h2>
          <h3 className="w-1/5 text-lg  font-semibold ">New Task</h3>
          <h5 className="w-1/5 text-lg  font-semibold ">Active Task</h5>
          <h5 className="w-1/5 text-lg  font-semibold ">Completed Task</h5>
          <h5 className="w-1/5 text-lg  font-semibold ">Failed Task</h5>
        </div>

        <div className="flex flex-col gap-3">
          {userData.map((elem,idx) => {
            return (
              <div key={idx} className="border-emerald-600 border px-5 py-3 rounded-lg flex justify-between items-center ">
                <h2 className="w-1/5 text-lg  font-semibold  ">{elem.firstName}</h2>
                <h3 className="w-1/5 text-lg  font-semibold  text-emerald-400 ">{elem.taskCounter.newTask}</h3>
                <h5 className="w-1/5 text-lg  font-semibold text-red-400 ">{elem.taskCounter.active}</h5>
                <h5 className="w-1/5 text-lg  font-semibold text-blue-400 ">{elem.taskCounter.completed}</h5>
                <h5 className="w-1/5 text-lg  font-semibold text-yellow-400 ">{elem.taskCounter.failed}</h5>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllTask;
