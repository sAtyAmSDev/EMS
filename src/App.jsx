import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [LoggedInUserData, setLoggedInUserData] = useState(null);

  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const LoggedInUser = localStorage.getItem("LoggedInUser");

    if (LoggedInUser) {
      let userData = JSON.parse(LoggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const HandleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("LoggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employees");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "LoggedInUser",
          JSON.stringify({ role: "employees", data: employee })
        );
      }
    } else {
      alert("Invalid Login");
    }
  };

  return (
    <>
      {!user ? <Login HandleLogin={HandleLogin} /> : " "}
      {user == "admin" ? (
        <AdminDashboard changeUser={setUser}/>
      ) : user == "employees" ? (
        <EmployeeDashboard changeUser={setUser} data={LoggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
