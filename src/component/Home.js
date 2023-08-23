import React, { useEffect } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
// import SummarizeRoundedIcon from "@mui/icons-material/SummarizeRounded";
import { Outlet, Link, useNavigate } from "react-router-dom";

export default function Home({ setEmployees, setSession, User }) {
  useEffect(() => {
    document.title = `PayrollCentral | Home`;
  });
  const handleClick = async () => {
    const response = await fetch("http://localhost:5000/employees", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const data = await response.json();
    setEmployees(data);
  };
  const navigate = useNavigate();

  const handleLogOut = () => {
    if (window.confirm("Are you really wanna log out "+ User +" ?")) {
      setSession(0);
      navigate("/");
    }
  };

  return (
    <>
      <div className="h-screen w-screen bg-bgColor-100 text-accent-100 flex">
        {/* sidebar */}
        <div className="border-r border-bgColor-300 bg-bgColor-100 lg:w-15% w-15% text-accent-200 h-full">
          {/* sidebar upper */}
          <Link
            to="/home/"
            className="h-10% lg:p-3 p-2 flex justify-center items-center">
            <div className="lg:block block lg:bg-logoIcon bg-logoIconSm lg:w-70% w-90%  lg:h-full bg-no-repeat bg-center bg-cover p-5"></div>
          </Link>
          {/* sidebar middle */}
          <div className="h-80% lg:p-3 p-2 flex flex-col gap-4">
            <Link
              to="/home/"
              className="lg:h-12 h-10 bg-bgColor-200 shadow lg:rounded-lg rounded  flex justify-center items-center">
              <div className="lg:w-15%">
                <HomeIcon className="text-primary-200" fontSize="medium" />
              </div>
              <div className="lg:block hidden w-70% text-primary-200">Home</div>
            </Link>
            {/* <Link
              to="/home/summary"
              className="lg:h-12 h-10 bg-bgColor-200 shadow-sm lg:rounded-lg rounded  flex justify-center items-center">
              <div className="lg:w-15%">
                <SummarizeRoundedIcon
                  className="text-primary-200"
                  fontSize="medium"
                />
              </div>
              <div className="lg:block hidden w-70% text-primary-200">
                Summary
              </div>
            </Link> */}
            <Link
              to="/home/employee"
              onClick={handleClick}
              className="lg:h-12 h-10 bg-bgColor-200 shadow-sm lg:rounded-lg rounded  flex justify-center items-center">
              <div className="lg:w-15%">
                <PersonIcon className="text-primary-200" fontSize="medium" />
              </div>
              <div className="lg:block hidden w-70% text-primary-200">
                Employees
              </div>
            </Link>
            <Link
              to="/home/payroll"
              className="lg:h-12 h-10 bg-bgColor-200 shadow-sm lg:rounded-lg rounded  flex justify-center items-center">
              <div className="lg:w-15%">
                <ReceiptLongIcon
                  className="text-primary-200"
                  fontSize="medium"
                />
              </div>
              <div className="lg:block hidden w-70% text-primary-200">
                Payroll
              </div>
            </Link>
          </div>
          {/* sidebar bottm */}
          <div className="h-10% lg:p-3 p-2">
            <div
              onClick={handleLogOut}
              className="lg:h-12 h-10 bg-bgColor-200 shadow-sm lg:rounded-lg rounded flex justify-center items-center">
              <div className="">
                <ExitToAppRoundedIcon
                  className="text-primary-200"
                  fontSize="medium"
                />
              </div>
              <div className="lg:block hidden text-lg w-70% pl-2 text-primary-200">
                Log out
              </div>
            </div>
          </div>
        </div>
        {/* navbar and content */}
        <div className="lg:w-85% w-85% h-full">
          {/* navbar */}
          <div className="lg:h-10% h-5% bg-bgColor-100 border-b border-bgColor-300 flex justify-end items-center">
            <div className="h-full lg:w-15% w-50% flex justify-center items-center">
              <h1 className="lg:text-xl my-auto capitalize text-primary-200">
                Welcome, {User}
              </h1>
            </div>
          </div>
          {/* content */}
          <div className="lg:h-90% h-95%">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}
