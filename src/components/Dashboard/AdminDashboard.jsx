import React from "react";
import Header from "../UI/Header";
import CreateTask from "../UI/CreateTask";
import AllTask from "../UI/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="  h-screen py-5 px-10 gap-5 flex flex-col">
      <Header changeUser={props.changeUser}/>
      <CreateTask />
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
