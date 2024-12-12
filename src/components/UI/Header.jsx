import React, { useState } from "react";

const Header = (props) => {

const HandelLogOut =()=>{
  console.log("hiii");
  
  localStorage.setItem("LoggedInUser"," ")
  props.changeUser("")
}


  return (
    <div className=" flex justify-between items-end   ">
      <h1 className="text-1xl font-medium ">
        Hello <br />
        <span className="text-emerald-400 text-3xl">
          {props.data ? props.data.firstName : "UserName"} 😊
        </span>
      </h1>
      <button onClick={()=>HandelLogOut()} className="bg-emerald-400 px-5 py-2 rounded-full font-medium  ">
        Log Out
      </button>
    </div>
  );
};

export default Header;
