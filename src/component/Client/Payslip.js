import React, { useEffect } from "react";
export default function Payslip({ lastDate,Employees, Status }) {
  useEffect(() => {
    document.title = `PayrollCentral | Payroll`;
  });
  return (
    <main className="flex justify-center items-center h-full w-full text-textColor-100 overflow-scroll">
      <div className="w-90% h-95% flex lg:justify-around justify-start items-center flex-col py-2 overflow-auto">
        <div className="lg:w-60% w-90% h-80% lg:h-full lg:p-2 flex justify-start items-center flex-col border border-bgColor-300 rounded bg-payroll bg-no-repeat bg-center bg-cover ">
          <div className="w-full h-70%">
            <div className="flex justify-evenly items-center lg:text-2xl h-30% w-full">
              <div className="w-1/2">
                <h1>PayrollCentral</h1>
                <p className="text-xs lg:block hidden">
                  214, Navsari Main Road, opp.
                </p>
                <p className="text-xs lg:block hidden">
                  Swami Narayan Temple, Harinagar, Udhna
                </p>
              </div>
              <div className="w-40% text-right mr-5">Payslip</div>
            </div>
            <div className="flex justify-end items-center text-sm h-10% w-full">
              <table className="text-xs lg:w-30% w-70%">
                <tr>
                  <th>Pay Date</th>
                  <th>Pay Type</th>
                  <th>Payroll No.</th>
                </tr>
                <tr>
                  <td className="text-center">{lastDate}</td>
                  <td className="text-center">Monthly</td>
                  <td className="text-center">#1101251</td>
                </tr>
              </table>
            </div>
            <div className="w-full lg:text-base text-sm h-60% lg:pl-5 pl-2">
              <div className="table">
                <div className="table-row">
                  <div className="table-cell">Employee</div>
                  <div className="table-cell">
                    : {Employees.fname + " " + Employees.lname}
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-cell">Total Pay</div>
                  <div className="table-cell">: ₹ {Employees.salary}</div>
                </div>
                <div className="table-row">
                  <div className="table-cell">First Day of Month </div>
                  <div className="table-cell">: 01/8/2023</div>
                </div>
                <div className="table-row">
                  <div className="table-cell">Last Day of Month</div>
                  <div className="table-cell">: {lastDate}</div>
                </div>
                <div className="table-row">
                  <div className="table-cell">Total Days</div>
                  <div className="table-cell">: 31</div>
                </div>
                <div className="table-row">
                  <div className="table-cell">Working Days</div>
                  <div className="table-cell">: 22</div>
                </div>
                <div className="table-row">
                  <div className="table-cell">Status</div>
                  <div className="table-cell">: {Status}</div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
