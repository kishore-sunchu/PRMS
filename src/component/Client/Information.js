import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Information({ setEmployees, Employees }) {
  const [FormData, setFormData] = useState({ emp_id: Employees.emp_id });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
    setEmployees({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/update", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(FormData),
    });
    const data = await response.json();
    if (data.status) {
      alert("Employee Details Updated successfull");
      navigate("/Dashboard/")
    } else {
      alert(data.reason);
    }
  };
  return (
    <main className="flex justify-evenly items-center h-full w-full text-textColor-100">
      <div className="w-95% h-95% flex justify-around items-center flex-col">
        <div className="h-80% w-95% overflow-auto">
          <section className="w-90% mx-auto h-full">
            <h1 className="text-center lg:text-4xl text-xl h-10% mt-1 text-primary-200">
              Change Information
            </h1>
            <form onSubmit={handleSubmit} id="addEmployeeForm">
              <fieldset className="lg:w-70% mb-5 w-95% mx-auto border border-bgColor-200 flex justify-evenly items-center flex-col lg:rounded-md rounded">
                <legend className="ml-5% text-textColor-200">
                  Personal Details
                </legend>
                {/* email field */}
                <div className="w-90% flex justify-around items-center lg:flex-row flex-col p-1">
                  <input
                    type="text"
                    placeholder="@gmail.com"
                    name="email"
                    value={Employees.email}
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
                    value={Employees.phone}
                    onChange={handleChange}
                    className="bg-bgColor-200 lg:w-90%  w-90% rounded outline-none border-b border-primary-200 p-2 pl-3 m-2"
                  />
                </div>
                {/* password field */}
                <div className="w-90% flex justify-around items-center lg:flex-row flex-col p-1">
                  <input
                    type="number"
                    placeholder="+91 9876543210"
                    name="password"
                    value={Employees.password}
                    onChange={handleChange}
                    className="bg-bgColor-200 lg:w-90%  w-90% rounded outline-none border-b border-primary-200 p-2 pl-3 m-2"
                  />
                </div>
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
              </fieldset>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
