import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.trim(),
          password: password.trim(),
        })
        
      });

      const data = await res.json();
      console.log("Login javobi:", data);

      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        alert("Xato: " + (data.message || "Login muvaffaqiyatsiz"));
      }
    } catch (err) {
      alert("Tarmoq xatosi yoki server javob bermadi");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-[420px] p-10 shadow-lg rounded-2xl bg-white mt-10">
        <h2 className="text-[32px] font-bold text-[#4F4F4F] mb-1 text-center">
        Welcome, Log into you account
        </h2>
        <p className="text-sm text-gray-500 mb-8 text-center">
        It is our great pleasure to have you on board! 
        </p>

        <div className="mb-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-500"
            required
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-[#4F46E5] text-white p-3 rounded-lg text-base font-semibold hover:bg-[#4338CA] transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
