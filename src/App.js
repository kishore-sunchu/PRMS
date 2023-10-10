import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";
import HomeContent from "./component/HomeContent";
import Payroll from "./component/Payroll";
import Error from "./component/Error";
import Employee from "./component/Employees/Employee";
import AddEmployee from "./component/Employees/AddEmployee";
import ModifyEmployee from "./component/Employees/ModifyEmployee";
import RemoveEmployee from "./component/Employees/RemoveEmployee";
import ClientDashboard from "./component/Client/ClientDashboard";
import Profile from "./component/Client/Profile";
import Information from "./component/Client/Information";
import Payslip from "./component/Client/Payslip";

function App() {
  const [Session, setSession] = useState(0);
  const [Employees, setEmployees] = useState();
  const [User, setUser] = useState("");
  const [lastDate, setLastDate] = useState();
  const [userCount, setUserCount] = useState(0);
  const [salaryCount, setSalaryCount] = useState(0);
  const [Status, setStatus] = useState("Unpaid");

  useEffect(() => {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = new Date(year, month + 1, 0);
    setLastDate(day.getDate() + "/" + (month + 1) + "/" + year);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            index
            element={
              <Login
                setSession={setSession}
                setUser={setUser}
                setEmployees={setEmployees}
                Employees={Employees}
              />
            }
          />
          <Route
            path="/home"
            element={
              Session !== 0 ? (
                <Home
                  Session={Session}
                  setEmployees={setEmployees}
                  setSession={setSession}
                  User={User}
                />
              ) : (
                <Error />
              )
            }>
            {/* <Route path="/home" element={<Home/>} > */}
            <Route
              path=""
              element={
                <HomeContent
                  userCount={userCount}
                  setUserCount={setUserCount}
                  lastDate={lastDate}
                  setLastDate={setLastDate}
                  salaryCount={salaryCount}
                  setSalaryCount={setSalaryCount}
                />
              }
            />
            <Route
              path="employee"
              element={
                <AddEmployee
                  setEmployees={setEmployees}
                  userCount={userCount}
                />
              }
            />
            <Route
              path="employee/all"
              element={
                <Employee Employees={Employees} setEmployees={setEmployees} />
              }
            />
            <Route
              path="employee/modify"
              element={<ModifyEmployee setEmployees={setEmployees} />}
            />
            <Route
              path="employee/remove"
              element={<RemoveEmployee setEmployees={setEmployees} />}
            />
            <Route
              path="payroll"
              element={
                <Payroll
                  userCount={userCount}
                  salaryCount={salaryCount}
                  lastDate={lastDate}
                  Status={Status}
                  setStatus={setStatus}
                />
              }
            />
          </Route>
          <Route
            path="/Dashboard"
            element={
              Session !== 0 ? (
                <ClientDashboard
                  Session={Session}
                  setSession={setSession}
                  User={User}
                />
              ) : (
                <Error />
              )
            }>
            <Route
              path=""
              element={
                <Profile
                  User={User}
                  setEmployees={setEmployees}
                  Employees={Employees}
                />
              }
            />
            <Route
              path="information"
              element={
                <Information
                  User={User}
                  setEmployees={setEmployees}
                  Employees={Employees}
                />
              }
            />
            <Route
              path="payslip"
              element={
                <Payslip
                  Employees={Employees}
                  lastDate={lastDate}
                  Status={Status}
                  setStatus={setStatus}
                />
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
