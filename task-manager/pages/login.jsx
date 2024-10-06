import React, { useState } from "react";
import { useEffect } from "react";

const Login = () => {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleChanged = (event) => {
    setPassword(event.target.value);
  };
  useEffect;
  const handleSubmit = async (event) => {
    event.preventDefault();
    setValue([]);
    setPassword([]);
    try {
      const response = await fetch(
        "http://localhost:3000/api/sign",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
            password: "emilyspass",
          }),
          credentials: "include",
        }
      );

      if (!response.ok) {
        navigate("/");
      } else {
        alert("Error: " + response.message);
      }

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Failed:", error);
    }
  };

  console.log(value);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md flex flex-col gap-4 p-6 w-80">
        <h2 className="text-xl font-semibold text-center mb-4">Sign In</h2>

        <input
          type="email"
          id="myText"
          value={value}
          onChange={handleChange}
          placeholder="Enter your Email"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          id="myText"
          value={password}
          onChange={handleChanged}
          placeholder="Enter your Password"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
