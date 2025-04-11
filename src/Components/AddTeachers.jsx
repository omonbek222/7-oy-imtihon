import React, { useState } from "react";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  UserCog,
  FileText,
  GraduationCap,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import LogoIcon from "../assets/logo.svg";

export default function Teachers() {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(true);

  const handleLogout = () => {
    navigate("/");
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleAddTeacher = () => {
    setShowContent(false);
    navigate("/add-teachers");
  };

  return (
    <div className="flex h-screen w-screen font-sans bg-white">
      
      <aside className="w-[250px] bg-[#152259] text-white p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-center mb-6">
            <img src={LogoIcon} alt="Logo" className="w-20 h-20" />
          </div>
          <h1 className="text-2xl font-bold mb-6 text-center">Udemy Inter. School</h1>
          <ul className="space-y-4 text-sm">
            <li
              className="flex items-center gap-3 cursor-pointer hover:bg-[#1E3A8A] p-3 rounded-md"
              onClick={() => handleNavigate("/dashboard")}
            >
              <LayoutDashboard size={18} /> Dashboard
            </li>
            <li
              className="flex items-center gap-3 cursor-pointer bg-[#1E3A8A] p-3 rounded-md"
              onClick={() => handleNavigate("/teachers")}
            >
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
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-white mt-6 hover:text-blue-300"
        >
          <LogOut size={18} /> Log out
        </button>
      </aside>

     
      <main className="flex-1 px-10 pt-24 pb-4 overflow-y-auto relative">
        {showContent && (
          <>
           
            <div className="flex justify-between items-center mb-10 mt-[30px]">
              <h2 className="text-[24px] text-[#333] font-bold">Teachers</h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleAddTeacher}
                  className="bg-[#509CDB] text-white px-6 py-2 text-sm font-medium rounded-md shadow hover:bg-[#3b82c4]"
                >
                  + Add Teacher
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-[#509CDB] px-6 py-2 text-sm font-medium rounded-md shadow hover:bg-[#3b82c4]"
                >
                  <LogOut size={18} /> Log out
                </button>
              </div>
            </div>

            
            <div className="flex items-center bg-white rounded shadow px-4 py-3 mb-6 w-[1061px] h-[49px]">
              <span className="text-gray-500 mr-3">🔍</span>
              <input
                type="text"
                placeholder="Search for a teacher by name or email..."
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            
            <div className="p-6 rounded shadow mb-10 w-[1061px]">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Search Filters</h3>
              <div className="grid grid-cols-3 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-300 rounded px-4 py-2 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-300 rounded px-4 py-2 outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="border border-gray-300 rounded px-4 py-2 outline-none"
                />
                <input
                  type="text"
                  placeholder="Class"
                  className="border border-gray-300 rounded px-4 py-2 outline-none"
                />
                <select className="border border-gray-300 rounded px-4 py-2 outline-none">
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="number"
                  placeholder="Age"
                  className="border border-gray-300 rounded px-4 py-2 outline-none"
                />
                <textarea
                  placeholder="About"
                  className="border border-gray-300 rounded px-4 py-2 outline-none resize-none col-span-3 h-[100px] text-[16px]"
                />
              </div>
              <div className="flex justify-end mt-4">
                <button className="bg-[#509CDB]  text-white px-6 py-2 rounded hover:bg-[#3b82c4]">
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
