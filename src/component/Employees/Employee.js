import React, { useEffect } from "react";
import EmployeeNavbar from "./EmployeeNavbar";

export default function Employee({ Employees, setEmployees }) {
  useEffect(() => {
    document.title = `PayrollCentral | Employees | All`;
  });

  return (
    <main className="flex justify-around items-center h-full w-full text-textColor-100">
      <div className="w-95% h-95% flex justify-around items-center flex-col">
        <EmployeeNavbar />
        <div className="h-80% w-95% overflow-auto">
          <table className="table-auto w-full">
            <thead className="table-header-group w-full bg-primary-200 text-bgColor-100">
              <tr className="table-row w-full text-center">
              <th className="table-cell w-10% p-1">Employee Id</th>
                <th className="table-cell w-10% p-1">First Name</th>
                <th className="table-cell w-10% p-1">Last Name</th>
                <th className="table-cell w-10% p-1">Email</th>
                <th className="table-cell w-10% p-1">Phone</th>
                {/* <th className="table-cell w-10% p-1">Date Of Birth</th> */}
                <th className="table-cell w-10% p-1">Gender</th>
                {/* <th className="table-cell w-10% p-1">Date of Joining</th> */}
                <th className="table-cell w-10% p-1">Designation</th>
                <th className="table-cell w-10% p-1">Salary</th>
              </tr>
            </thead>
            <tbody>
              {Employees.map((items) => {
                return (
                  <tr className="text-center table-row odd:bg-bgColor-200 even:bg-bgColor-300">
                    <td className="table-cell w-10% p-1">{items.emp_id}</td>
                    <td className="table-cell w-10% p-1">{items.fname}</td>
                    <td className="table-cell w-10% p-1">{items.lname}</td>
                    <td className="table-cell w-10% p-1">{items.email}</td>
                    <td className="table-cell w-10% p-1">{items.phone}</td>
                    {/* <td  className="table-cell w-10% p-1">{items.dob}</td> */}
                    <td className="table-cell w-10% p-1">{items.gender}</td>
                    {/* <td  className="table-cell w-10% p-1">{items.hire_date}</td> */}
                    <td className="table-cell w-10% p-1">{items.job_title}</td>
                    <td className="table-cell w-10% p-1">{items.salary}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
