import React, { useState } from "react";
import Title from "../components/Title";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Title title="Login/Sign Up" desc="Home" />
      <form className="min-h-[80vh] flex items-center">
        <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] border rounded-xl text-zinc-600 text-sm shadow-lg">
          <p className="text-2xl font-semibold">
            {state === "Sign Up" ? "Create Account" : "Login"}
          </p>
          <p>
            {state === "Sign Up"
              ? "Please sign up to book appointment"
              : "Please login to book appointment"}
          </p>
          {state === "Sign Up" ? (
            <div className="w-full">
              <p>Full Name</p>
              <input
                className="border border-zinc-300 rounded w-full p-2 mt-1"
                required
                type="text"
                value={name}
                onChange={() => setName(e.target.value)}
              />
            </div>
          ) : null}

          <div className="w-full">
            <p>Email</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              required
              type="email"
              value={email}
              onChange={() => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              required
              type="password"
              value={password}
              onChange={() => setPassword(e.target.value)}
            />
          </div>
          <button className="bg-primary text-white w-full py-2 rounded-md text-base">
            {state == "Sign Up" ? "Create Account" : "Login"}
          </button>
          {state === "Sign Up" ? (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setState("Login")}
                className="text-primary cursor-pointer underline"
              >
                Login
              </span>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="text-primary cursor-pointer underline"
              >
                Sign Up
              </span>
            </p>
          )}
        </div>
      </form>
    </>
  );
};

export default Login;
