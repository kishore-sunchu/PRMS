import React, { useState } from "react";
import EmployeeNavbar from "./EmployeeNavbar";
import InfoIcon from "@mui/icons-material/Info";

export default function ModifyEmployee({ setEmployees }) {
  const [EmpId, setEmpId] = useState();
  const [FormData, setFormData] = useState({ emp_id: EmpId });
  const [EmployeeData, setEmployeeData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    emp_id: "",
    hire_date: "",
    job_title: "",
    salary: "",
    password: "",
  });

  const handleChange = (e) => {
    setEmployeeData({
      ...EmployeeData,
      [e.target.name]: e.target.value,
    });
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
  };

  const EmployeeIdChange = (e) => {
    setEmpId(Number(e.target.value));
  };

  const handleClick = async () => {
    if (EmpId !== undefined) {
      console.log("calling");
      const response = await fetch("http://localhost:5000/employeeData", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ emp_id: EmpId }),
      });
      const data = await response.json();
      if (data !== false) {
        setEmployeeData(data);
      } else {
        alert("Employee Does Not Exist");
        setEmployeeData("");
        document.getElementById("addEmployeeForm").reset();
      }
    } else {
      alert("Please Enter The Employee Id to Get The Data");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/update", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(EmployeeData),
    });
    const data = await response.json();
    if (data.status) {
      alert("Employee Details Updated successfull");
      document.getElementById("addEmployeeForm").reset();
      if (data.status === true) {
        document.getElementById("addEmployeeForm").reset();
        const response = await fetch("http://localhost:5000/employees", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
        const data = await response.json();
        setEmployees(data);
      }
    } else {
      alert(data.reason);
    }
  };

  return (
    <main className="flex justify-evenly items-center h-full w-full text-textColor-100">
      <div className="w-95% h-95% flex justify-around items-center flex-col">
        <EmployeeNavbar />
        <div className="h-80% w-95% overflow-auto">
          <section className="w-90% mx-auto h-full">
            <h1 className="text-center lg:text-4xl text-xl h-10% mt-1 text-primary-200">
              Change Information
            </h1>
            <form onSubmit={handleSubmit} id="addEmployeeForm">
              <fieldset className="lg:w-70% mb-5 w-95% pb-2 mx-auto border border-bgColor-200 flex justify-evenly items-center flex-col lg:rounded-md rounded">
                <legend className="ml-5% text-textColor-200">
                  Employee Id
                </legend>
                <div className="w-90% flex justify-around items-center lg:flex-row flex-col p-1">
                  <input
                    type="number"
                    placeholder="Employee Id"
                    name="email"
                    onChange={EmployeeIdChange}
                    value={EmpId}
                    className="bg-bgColor-200 lg:w-60% w-90% rounded outline-none border-b border-primary-200 p-2 pl-3 m-2"
                  />
                  <button
                    type="button"
                    onClick={handleClick}
                    className="lg:w-20% w-90% bg-bgColor-200 text-base py-2 rounded shadow-md">
                    Get Data
                  </button>
                </div>
                <div className="text-textColor-200 flex justify-center items-center w-80%">
                  <InfoIcon fontSize="small" className="inline mr-1" />
                  <h1 className="inline lg:text-base text-xs">
                    Enter Employee Id and Get Details
                  </h1>
                </div>
              </fieldset>
              <fieldset className="lg:w-70% mb-5 w-95% mx-auto border border-bgColor-200 flex justify-evenly items-center flex-col lg:rounded-md rounded">
                <legend className="ml-5% text-textColor-200">
                  Personal Details
                </legend>
                {/* first and last name field */}
                <div className="w-90% flex justify-around items-center lg:flex-row flex-col p-1">
                  <input
                    type="text"
                    placeholder="First name"
                    name="fname"
                    value={EmployeeData.fname}
                    onChange={handleChange}
                    className="bg-bgColor-200 lg:w-40% w-90% rounded outline-none border-b border-primary-200 p-2 pl-3 m-2"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    name="lname"
                    value={EmployeeData.lname}
                    onChange={handleChange}
                    className="bg-bgColor-200 lg:w-40% w-90% rounded outline-none border-b border-primary-200 p-2 pl-3 m-2"
                  />
                </div>
                {/* email field */}
                <div className="w-90% flex justify-around items-center lg:flex-row flex-col p-1">
                  <input
                    type="text"
                    placeholder="@gmail.com"
                    name="email"
                    value={EmployeeData.email}
                    onChange={handleChange}
                    className="bg-bgColor-200 lg:w-90% w-90% rounded outline-none border-b border-primary-200 p-2 pl-3 m-2"
                  />
                </div>
                {/* phone number field */}
                <div className="w-90% flex justify-around items-center lg:flex-row flex-col p-1">
                  <input
                    type="number"
                    placeholder="+91 9876543210"
                    name="phone"
                    value={EmployeeData.phone}
                    onChange={handleChange}
                    className="bg-bgColor-200 lg:w-90%  w-90% rounded outline-none border-b border-primary-200 p-2 pl-3 m-2"
                  />
                </div>
                {/* dob and gender field */}
                <div className="w-90% flex justify-around items-center lg:flex-row flex-col p-1">
                  <input
                    type="text"
                    placeholder="Date Of Birth"
                    onFocus={(e) => {
                      e.target.type = "date";
                    }}
                    onBlur={(e) => {
                      e.target.type = "text";
                    }}
                    name="dob"
                    onChange={handleChange}
                    value={EmployeeData.dob}
                    className="bg-bgColor-200 lg:w-50%  w-90% rounded outline-none border-b border-primary-200 p-2 pl-3 m-2"
                  />
                  <select
                    name="gender"
                    id="gender"
                    onChange={handleChange}
                    value={EmployeeData.gender}
                    className="bg-bgColor-200 lg:w-30% w-90% rounded outline-none border-b border-primary-200 p-2 pl-3 m-2">
                    <option value="default">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Female">Other</option>
                  </select>
                </div>
              </fieldset>
              <fieldset className="lg:w-70% mt-5 w-95% mx-auto border border-bgColor-200 flex justify-evenly items-center flex-col lg:rounded-md rounded">
                <legend className="ml-5% text-textColor-200">
                  Office Details
                </legend>
                {/* hire date and designation field */}
                <div className="w-90% flex justify-around items-center lg:flex-row flex-col p-1">
                  <input
                    type="text"
                    placeholder="Date Of Joining"
                    onFocus={(e) => {
                      e.target.type = "date";
                    }}
                    onBlur={(e) => {
                      e.target.type = "text";
                    }}
                    name="hire_date"
                    value={EmployeeData.hire_date}
                    onChange={handleChange}
                    className="bg-bgColor-200 lg:w-40%  w-90% rounded outline-none border-b border-primary-200 p-2 pl-3 m-2"
                  />
                  <input
                    type="text"
                    placeholder="Designation"
                    name="job_title"
                    onChange={handleChange}
                    value={EmployeeData.job_title}
                    className="bg-bgColor-200 capitalize lg:w-40% w-90% rounded outline-none border-b border-primary-200 p-2 pl-3 m-2"
                  />
                </div>
                {/* salary field */}
                <div className="w-90% flex justify-around items-center lg:flex-row flex-col p-1">
                  <input
                    type="number"
                    placeholder="Salary"
                    name="salary"
                    onChange={handleChange}
                    value={EmployeeData.salary}
                    className="bg-bgColor-200 lg:w-90%  w-90% rounded outline-none border-b border-primary-200 p-2 pl-3 m-2"
                  />
                </div>
                {/* password field */}
                <div className="w-90% flex mb-2 justify-around items-center flex-col p-1">
                  <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    value={EmployeeData.password}
                    className="bg-bgColor-200 lg:w-90%  w-90% rounded outline-none border-b border-primary-200 p-2 pl-3 m-2"
                  />
                  <div className="flex justify-start items-center w-90% text-textColor-200 lg:text-base text-xs">
                    <h1 className="inline">
                      Employee can change the password later.
                    </h1>
                  </div>
                </div>
              </fieldset>
              {/* submit or cancel button */}
              <div className="lg:w-70% w-95% my-5 mx-auto flex lg:justify-start justify-center items-center lg:flex-row-reverse flex-col p-1">
                <button
                  type="submit"
                  className="border border-bgColor-300 bg-bgColor-200 text-primary-200 hover:text-primary-200 hover:bg-bgColor-100 hover:border-primary-200 lg:w-30% w-95% lg:text-xl p-2 rounded-lg">
                  Submit
                </button>
                <button
                  type="reset"
                  className="border border-bgColor-200 hover:text-textColor-200 lg:w-30% w-95% lg:text-xl lg:mr-5 lg:mt-0 mt-2 p-2 rounded-lg">
                  Cancel
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
