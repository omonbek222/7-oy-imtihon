import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!email || !login || !password) {
      alert("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    console.log("Sign up info:", { email, login, password });

    
    navigate("/dashboard");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white">
      <div className="w-[400px] p-10 shadow-lg rounded-2xl bg-white">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2 text-center">
          Welcome, Sign up
        </h2>
        <p className="text-sm text-gray-500 mb-8 text-center">
          It is our great pleasure to have you on board!
        </p>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Create your Login"
          className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create your Password"
          className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white p-3 rounded-lg text-base font-medium hover:bg-blue-700 transition"
        >
          Sign up
        </button>

        <button
          onClick={() => navigate("/login")}
          className="w-full mt-4 text-blue-600 hover:underline text-sm text-center"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default SignUp;
