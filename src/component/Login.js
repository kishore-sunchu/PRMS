import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setSession, setUser }) {
  useEffect(() => {
    document.title = `PayrollCentral | SignIn`;
  });

  const navigate = useNavigate();
  const [Form, setForm] = useState("");

  const handleForm = (e) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/auth", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(Form),
    });
    const data = await response.json();
    if (data.status === "true" && data.user === "Admin") {
      setSession(2);
      setUser(data.fname);
      navigate("/home");
    } else if (data.status === "true" && data.user === "Employee") {
      setSession(2);
      setUser(data.fname);
      navigate("/Dashboard");
    } else {
      alert("Invalid Username and Password");
    }
  };

  return (
    <>
      <div className="bg-bgColor-100 w-screen h-screen lg:flex flex flex-wrap-reverse justify-center items-center lg:bg-backgroundDesign bg-backgroundDesignSm bg-center bg-cover bg-no-repeat">
        <div className="lg:h-4/5 lg:w-1/2 w-full h-1/2 flex justify-center items-center">
          <form
            className="bg-bgColor-200 lg:h-3/5 p-5 text-textColor-100 lg:w-3/5 w-4/5 rounded-lg lg:shadow-lg shadow-sm"
            onSubmit={handleSubmit}>
            <h1 className="text-center lg:text-4xl lg:mb-8 lg:mt-2 font-sans text-2xl">
              Sign in to your acoount
            </h1>
            <div className="flex justify-center lg:my-7 my-7">
              <input
                type="text"
                name="fname"
                onChange={handleForm}
                className="bg-transparent border-b border-primary-200 outline-none lg:p-1 lg:w-3/5 w-4/5 mx-auto lg:text-lg"
                placeholder="Username"
              />
            </div>
            <div className="flex justify-center lg:my-7 my-7">
              <input
                type="password"
                name="password"
                onChange={handleForm}
                className="bg-transparent border-b border-primary-200 outline-none lg:p-1 lg:w-3/5 w-4/5 mx-auto lg:text-lg"
                placeholder="Password"
              />
            </div>
            <div className="flex justify-center lg:my-7 my-7">
              <button
                type="submit"
                className="bg-primary-100 lg:w-3/5 w-4/5 text-lg lg:p-2 p-1 rounded-lg hover:bg-accent-100 hover:text-primary-300 outline-accent-100">
                Sign in
              </button>
            </div>
            <div className="flex justify-center lg:my-7 my-7">
              <h1 className="lg:text-xl font-serif">
                {/* <Link to="/forgetPassword"> Forget Password ?</Link> */}
                ←- Welcome to Payroll Central -→
              </h1>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
