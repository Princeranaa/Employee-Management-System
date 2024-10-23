import React, { useState, useContext, useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashBord from "./components/Dashbord/EmployeeDashBord";
import AdminDashbord from "./components/Dashbord/AdminDashbord";
import { AuthContex } from "./Context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [useData, setuseData] = useContext(AuthContex);

  useEffect(() => {
    const loggedInUserData = localStorage.getItem("loggedInUser");
    if (loggedInUserData) {
      const userData = JSON.parse(loggedInUserData);
      setUser(userData.role);
      setLoggedInUser(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      const adminData = { role: "admin" };
      setUser(adminData.role);
      localStorage.setItem("loggedInUser", JSON.stringify(adminData));
    } else if (useData) {
      const employee = useData.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        const employeeData = { role: "employee", data: employee };
        setUser(employeeData.role);
        setLoggedInUser(employee);
        localStorage.setItem("loggedInUser", JSON.stringify(employeeData));
      } else {
        alert("Invalid credentials");
      }
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
  };

  console.log("Current User Role:", user);

  return (
    <div className="h-screen w-screen bg-[#1F1E24] overflow-y-hidden">
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashbord changeUser={setUser} />
      ) : (
        <EmployeeDashBord changeUser={setUser} data={loggedInUser} />
      )}
    </div>
  );
}

export default App;
