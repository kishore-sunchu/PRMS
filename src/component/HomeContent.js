import React, { useEffect } from "react";
import InfoIcon from "@mui/icons-material/Info";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PaymentIcon from "@mui/icons-material/Payment";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ElderlyIcon from "@mui/icons-material/Elderly";
import GroupsIcon from "@mui/icons-material/Groups";

export default function HomeContent({
  setUserCount,
  userCount,
  lastDate,
  salaryCount,
  setSalaryCount,
}) {
  const handleLoad = async () => {
    const response = await fetch("http://localhost:5000/countUser", {
      method: "POST",
    });
    const data = await response.json();
    setUserCount(data.count);
    setSalaryCount(data.salary);
  };

  useEffect(() => handleLoad);

  return (
    <>
      <main className="flex justify-center items-center h-full w-full text-textColor-100">
        <div className="w-90% h-95% flex justify-around items-center flex-col">
          <div className="lg:h-30% h-70% w-95% border-l border-primary-100 flex justify-around items-center lg:flex-row flex-col bg-bgColor-200 rounded-md">
            <div className="lg:w-20% w-90% lg:h-60% h-20% text-primary-200 lg:rounded">
              <div className="lg:h-25% h-25% flex justify-start items-center lg:text-2xl text-base text-textColor-100">
                Total Employees
              </div>
              <div className="lg:h-60% h-50% flex justify-start items-center lg:text-3xl text-xl">
                <CountUp end={userCount} start={1} duration={2}></CountUp>
              </div>
              <div className="lg:h-15% h-25% flex justify-start items-center text-sm text-textColor-200">
                <InfoIcon fontSize="small" className="mr-1" />
                Active Employees of the month
              </div>
            </div>
            <div className="lg:w-20% w-90% lg:h-60% h-20% text-primary-200 lg:rounded">
              <div className="h-25% flex justify-start items-center lg:text-2xl text-base text-textColor-100">
                Employee's Net Pay
              </div>
              <div className="lg:h-60% h-50%  flex justify-start items-center lg:text-3xl text-xl">
                ₹{" "}
                <CountUp
                  end={salaryCount}
                  start={1}
                  duration={2}
                  redraw={true}></CountUp>
              </div>
              <div className="lg:h-15% h-25%  flex justify-start items-center text-sm text-textColor-200">
                <InfoIcon fontSize="small" className="mr-1" />
                final monthly net pay
              </div>
            </div>
            <div className="lg:w-20% w-90% lg:h-60% h-20% text-primary-200 lg:rounded">
              <div className="h-25% flex justify-start items-center lg:text-2xl text-base text-textColor-100">
                Payment Date
              </div>
              <div className="lg:h-60% h-50%  flex justify-start items-center lg:text-3xl text-xl">
                {lastDate}
              </div>
              <div className="lg:h-15% h-25%  flex justify-start items-center text-sm text-textColor-200">
                <InfoIcon fontSize="small" className="mr-1" />
                Pay Employees on this day
              </div>
            </div>
            <div className="lg:w-20% w-90% lg:h-60% h-20% text-primary-200 lg:rounded">
              <div className="h-30%  flex justify-start items-center lg:text-2xl text-base text-textColor-100">
                Pay here <ArrowDownwardIcon className="ml-1" />
              </div>
              <div className="h-70%  flex lg:justify-start items-center text-bgColor-200 text-base">
                <Link to={"/home/payroll"} className="h-60% lg:w-80% w-full">
                  <button className="bg-primary-100 h-full lg:w-80% w-full rounded shadow-lg shadow-bgColor-200 text-textColor-100">
                    View Details & Pay
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:h-50% lg:flex hidden h-25% w-95% border-l border-r border-primary-100  justify-around items-center lg:flex-row flex-col bg-bgColor-100 rounded-md">
            <div className="h-90% lg:w-1/2 w-90% flex justify-between flex-col">
              <h1 className="h-10% lg:text-2xl text-base">Expensives :</h1>
              <ul className="lg:h-85% h-75%  w-90% mx-auto overflow-y-scroll">
                <li className="lg:h-30% w-85% my-2 mx-auto bg-bgColor-300 rounded">
                  <div className="flex justify-around h-full items-center flex-row">
                    <div className="lg:w-15% lg:h-70% h-90% flex justify-center rounded bg-primary-200 items-center">
                      <PaymentIcon
                        fontSize="large"
                        className="text-bgColor-200"
                      />
                    </div>
                    <div className="w-60% h-80%  text-primary-300">
                      <h1 className="lg:text-lg text-base">Employee Salary</h1>
                      <h1 className="lg:text-sm text-sm">1 Month ago</h1>
                    </div>
                    <div className="w-15% text-primary-300">₹{salaryCount}</div>
                  </div>
                </li>
                <li className="lg:h-30% w-85% my-2 mx-auto bg-bgColor-300 rounded">
                  <div className="flex justify-around h-full items-center flex-row">
                    <div className="lg:w-15% lg:h-70% h-90% flex justify-center rounded bg-primary-200 items-center">
                      <CurrencyRupeeIcon
                        fontSize="large"
                        className="text-bgColor-200"
                      />
                    </div>
                    <div className="w-60% h-80%  text-primary-300">
                      <h1 className="lg:text-lg text-base">Taxes</h1>
                      <h1 className="lg:text-sm text-sm">2 Weeks ago</h1>
                    </div>
                    <div className="w-15% text-primary-300">₹12000</div>
                  </div>
                </li>
                <li className="lg:h-30% w-85% my-2 mx-auto bg-bgColor-300 rounded">
                  <div className="flex justify-around h-full items-center flex-row">
                    <div className="lg:w-15% lg:h-70% h-90% flex justify-center rounded bg-primary-200 items-center">
                      <HealthAndSafetyIcon
                        fontSize="large"
                        className="text-bgColor-200"
                      />
                    </div>
                    <div className="w-60% h-80%  text-primary-300">
                      <h1 className="lg:text-lg text-base">Health Insurance</h1>
                      <h1 className="lg:text-sm text-sm">2 days ago</h1>
                    </div>
                    <div className="w-15% text-primary-300">₹66000</div>
                  </div>
                </li>
                <li className="lg:h-30% w-85% my-2 mx-auto bg-bgColor-300 rounded">
                  <div className="flex justify-around h-full items-center flex-row">
                    <div className="lg:w-15% lg:h-70% h-90% flex justify-center rounded bg-primary-200 items-center">
                      <ElderlyIcon
                        fontSize="large"
                        className="text-bgColor-200"
                      />
                    </div>
                    <div className="w-60% h-80%  text-primary-300">
                      <h1 className="lg:text-lg text-base">
                        Retirement Contributions
                      </h1>
                      <h1 className="lg:text-sm text-sm">3 days ago</h1>
                    </div>
                    <div className="w-15% text-primary-300">₹32000</div>
                  </div>
                </li>
                <li className="lg:h-30% w-85% my-2 mx-auto bg-bgColor-300 rounded">
                  <div className="flex justify-around h-full items-center flex-row">
                    <div className="lg:w-15% lg:h-70% h-90% flex justify-center rounded bg-primary-200 items-center">
                      <GroupsIcon
                        fontSize="large"
                        className="text-bgColor-200"
                      />
                    </div>
                    <div className="w-60% h-80%  text-primary-300">
                      <h1 className="lg:text-lg text-base">Union Dues</h1>
                      <h1 className="lg:text-sm text-sm">3 days ago</h1>
                    </div>
                    <div className="w-15% text-primary-300">₹25000</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="h-90% w-40% grid grid-rows-2 grid-cols-1">
              <div className="w-60% h-80% m-auto">
                <div className="h-60% text-3xl grid place-content-center">
                  <CountUp
                    end={1154280}
                    start={1}
                    duration={2}
                    className="text-center"></CountUp>
                </div>
                <div className="h-40%  bg-bgColor-200 rounded-b border-t border-primary-200 grid place-content-center lg:text-xl text-center">
                  ₹ Current Balance
                </div>
              </div>
              <div className="w-60% h-80% m-auto">
                <div className="h-60% text-3xl grid place-content-center">
                  <CountUp
                    end={561020}
                    start={1}
                    duration={2}
                    className="text-center"></CountUp>
                </div>
                <div className="h-40%  bg-bgColor-200 rounded-b border-t border-primary-200 grid place-content-center lg:text-xl text-center">
                  ₹ Total Deductions
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
