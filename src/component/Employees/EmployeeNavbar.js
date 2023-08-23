import React from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

export default function EmployeeNavbar() {
  return (
    <div className="h-15% w-95% flex justify-evenly items-center text-base">
      <Link
        className="bg-bgColor-200 w-20% h-60% lg:text-lg flex justify-center items-center rounded-lg border border-bgColor-300 text-primary-200"
        to="/home/employee/">
        <h1 className="lg:block hidden mr-1">Add Employees</h1>
        <AddIcon fontSize="medium" />
      </Link>
      <Link
        className="bg-bgColor-200 w-20% h-60% lg:text-lg flex justify-center items-center rounded-lg border border-bgColor-300 text-primary-200"
        to="/home/employee/all">
        <h1 className="lg:block hidden mr-1">All Employees</h1>
        <PersonIcon fontSize="medium" />
      </Link>
      <Link
        className="bg-bgColor-200 w-20% h-60% lg:text-lg flex justify-center items-center rounded-lg border border-bgColor-300 text-primary-200"
        to="/home/employee/modify">
        <h1 className="lg:block hidden mr-1">Change Details</h1>
        <EditIcon fontSize="medium" />
      </Link>
      <Link
        className="bg-bgColor-200 w-20% h-60% lg:text-lg flex justify-center items-center rounded-lg border border-bgColor-300 text-primary-200"
        to="/home/employee/remove">
        <h1 className="lg:block hidden mr-1">Remove Employees</h1>
        <RemoveCircleIcon fontSize="medium" />
      </Link>
    </div>
  );
}
