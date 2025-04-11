import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  UserCog,
  FileText,
  GraduationCap,
  LogOut,
} from "lucide-react";
import LogoIcon from "../assets/logo.svg";

export default function About() {
  const [teachers, setTeachers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/teachers.json")
      .then((res) => res.json())
      .then((data) => setTeachers(data))
      .catch((err) => console.error("Xatolik fetch qilishda:", err));
  }, []);

  const handleLogout = () => navigate("/");
  const handleNavigate = (path) => navigate(path);

  return (
    <div className="flex h-screen w-screen font-sans bg-white">
      
      <aside className="w-[250px] bg-[#152259] text-white p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-center mb-6">
            <img src={LogoIcon} alt="Logo" className="w-20 h-20" />
          </div>
          <h1 className="text-2xl font-bold mb-6 text-center">Udemy Inter. School</h1>
          <ul className="space-y-4 text-sm">
            <li onClick={() => handleNavigate("/dashboard")} className="flex items-center gap-3 cursor-pointer hover:bg-[#1E3A8A] p-3 rounded-md">
              <LayoutDashboard size={18} /> Dashboard
            </li>
            <li onClick={() => handleNavigate("/teachers")} className="flex items-center gap-3 cursor-pointer hover:bg-[#1E3A8A] p-3 rounded-md">
              <GraduationCap size={18} /> Teachers
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:bg-[#1E3A8A] p-3 rounded-md">
              <Users size={18} /> Students
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:bg-[#1E3A8A] p-3 rounded-md">
              <CreditCard size={18} /> Billing
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:bg-[#1E3A8A] p-3 rounded-md">
              <UserCog size={18} /> Settings & Profile
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:bg-[#1E3A8A] p-3 rounded-md">
              <FileText size={18} /> Exams
            </li>
          </ul>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 text-white mt-6 hover:text-red-300">
          <LogOut size={18} /> Log out
        </button>
      </aside>

      
      <main className="flex-1 px-10 pt-10 pb-6 overflow-y-auto relative">
        <div className="flex justify-end mb-4">
          <button onClick={handleLogout} className="flex items-center gap-2 text-white mt-[20px] bg-[#04a3ff] px-5 py-2 text-sm font-medium rounded-md shadow hover:bg-[#7d9eff]">
            <LogOut size={18} /> Log out
          </button>
        </div>

        <h2 className="text-[24px] text-[#333] font-bold mb-6">Teachers Detail</h2>

        <div className="space-y-3">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className={`rounded-lg shadow text-sm p-3 flex flex-wrap gap-4 justify-between items-start ${
                index % 2 === 0 ? "bg-[#e0efff]" : "bg-white"
              }`}
            >
              <div>
                <p className="font-medium text-gray-700">Name:</p>
                <p>{teacher.name}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Subject:</p>
                <p>{teacher.subject}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Class:</p>
                <p>{teacher.class}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Email:</p>
                <p>{teacher.email}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Address:</p>
                <p>{teacher.address}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Gender:</p>
                <p>{teacher.gender}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
