import React from "react";

export default function Profile({ User, Employees }) {
  return (
    <main className="flex justify-center items-center h-full w-full text-textColor-100">
      <div className="w-90% h-95% flex justify-start items-center flex-col">
        <div className="w-full h-40% flex justify-between items-center bg-profile bg-no-repeat bg-center bg-cover">
          <div className="w-60% h-80% flex justify-center items-end">
            <div className="text-4xl text-left w-80% capitalize">
              <h1 className="text-primary-100">Welcome,</h1>
              <h1 className="text-primary-300">
                {Employees.fname + " " + Employees.lname}
              </h1>
            </div>
          </div>
          <div className="shadow shadow-bgColor-100 bg-bgColor-200 w-20% h-90% mr-5% rounded-full grid place-items-center">
            <div className="h-40% w-40% rounded-full bg-user bg-no-repeat bg-center bg-contain"></div>
          </div>
        </div>
        <div className="w-full h-60% bg-bgColor-200 flex justify-evenly items-center border-l border-r border-b border-primary-100 rounded-b-xl">
          <div className="w-40% h-1/2">
            <h1 className="text-4xl my-2 text-primary-200">
              {" "}
              Personal Details
            </h1>
            <div className="">
              <h1 className="text-lg my-1">Date of birth : 04-12-2003</h1>
              <h1 className="text-lg my-1">Email : {Employees.email}</h1>
              <h1 className="text-lg my-1">Gender : {Employees.gender}</h1>
              <h1 className="text-lg my-1">Phone : {Employees.phone}</h1>
            </div>
          </div>
          <div className="w-40% h-1/2">
            <h1 className="text-4xl my-2 text-primary-200"> Office Details</h1>
            <div>
              <h1 className="text-lg my-1">Employee Id : {Employees.emp_id}</h1>
              <h1 className="text-lg my-1">Joining Date: 01-11-2011</h1>
              <h1 className="text-lg my-1">
                Designation : {Employees.job_title}
              </h1>
              <h1 className="text-lg my-1">Salary : {Employees.salary}</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
