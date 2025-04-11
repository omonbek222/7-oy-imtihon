
import React, { useState } from "react";
import {
  Bell,
  LayoutDashboard,
  Users,
  GraduationCap,
  FileText,
  CreditCard,
  UserCog,
  LogOut,
} from "lucide-react";
import InsonIcon from "../assets/inson.svg";
import LogoIcon from "../assets/logo.svg";
import BankIcon from "../assets/bank.svg";
import ShapkaIcon from "../assets/shapka.svg";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("Dashboard");

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen w-screen font-sans bg-[#F1F3F6]">
     
      <aside className="w-[250px] bg-[#152259] text-white p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-center mb-6">
            <img src={LogoIcon} alt="Logo" className="w-20 h-20" />
          </div>
          <h1 className="text-2xl font-bold mb-6 text-center">Udemy Inter. School</h1>
          <ul className="space-y-4 text-sm">
            <li
              onClick={() => setActivePage("Dashboard")}
              className={`flex items-center gap-3 cursor-pointer p-3 rounded-md ${
                activePage === "Dashboard" ? "bg-[#1E3A8A]" : "hover:bg-[#1E3A8A]"
              }`}
            >
              <LayoutDashboard size={18} /> Dashboard
            </li>
            <li
              onClick={() => {
                setActivePage("Teachers");
                navigate("/teachers");
              }}
              className={`flex items-center gap-3 cursor-pointer p-3 rounded-md ${
                activePage === "Teachers" ? "bg-[#1E3A8A]" : "hover:bg-[#1E3A8A]"
              }`}
            >
              <GraduationCap size={18} /> Teachers
            </li>
            <li
              onClick={() => setActivePage("Students")}
              className={`flex items-center gap-3 cursor-pointer p-3 rounded-md ${
                activePage === "Students" ? "bg-[#1E3A8A]" : "hover:bg-[#1E3A8A]"
              }`}
            >
              <Users size={18} /> Students
            </li>
            <li
              onClick={() => setActivePage("Billing")}
              className={`flex items-center gap-3 cursor-pointer p-3 rounded-md ${
                activePage === "Billing" ? "bg-[#1E3A8A]" : "hover:bg-[#1E3A8A]"
              }`}
            >
              <CreditCard size={18} /> Billing
            </li>
            <li
              onClick={() => setActivePage("Settings")}
              className={`flex items-center gap-3 cursor-pointer p-3 rounded-md ${
                activePage === "Settings" ? "bg-[#1E3A8A]" : "hover:bg-[#1E3A8A]"
              }`}
            >
              <UserCog size={18} /> Settings & Profile
            </li>
            <li
              onClick={() => setActivePage("Exams")}
              className={`flex items-center gap-3 cursor-pointer p-3 rounded-md ${
                activePage === "Exams" ? "bg-[#1E3A8A]" : "hover:bg-[#1E3A8A]"
              }`}
            >
              <FileText size={18} /> Exams
            </li>
          </ul>
        </div>
        <button onClick={handleLogout} className="flex items-center gap-2 text-white mt-6 hover:text-red-300">
          <LogOut size={18} /> Log out
        </button>
      </aside>

      
      <main className="flex-1 p-10 overflow-y-auto relative">
       
        <div className="flex justify-between items-center gap-6 mb-6 relative">
          <div className="absolute left-[calc(50%-200px)] transform -translate-x-1/2 text-[#424242] font-medium text-[16px]">
            <p>Learn  how to launch faster <br /> watch our webinar for tips from our experts and get a limited time offer.</p>
          </div>
          <div className="flex items-center gap-4 absolute right-10">
            <div className="flex items-center gap-2">
              <img src={InsonIcon} alt="Inson Icon" className="w-6 h-6" />
              <button onClick={handleLogout} className="flex items-center gap-2 text-white font-medium bg-[#509CDB] px-4 py-2 rounded-md shadow hover:opacity-90">
                <LogOut size={18} /> Log out
              </button>
            </div>
            <div className="relative">
              <Bell className="text-gray-600 hover:text-[#152259]" size={28} />
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </div>
            </div>
          </div>
        </div>

        
        <div className="absolute top-[150px] left-[168px] mb-10">
          <h2 className="text-[36px] font-bold text-[#4F4F4F] mb-2">
            Welcome to your dashboard, Udemy school
          </h2>
          <p className="text-gray-500 text-sm relative left-[50px] top-[23px]">
            Uyo/school/@teachable.com
          </p>
        </div>

        
        <div className="absolute top-[247px] mt-[20px] left-[218px] text-[#4F4F4F] text-[24px] font-semibold flex items-center gap-2">
          <img src={InsonIcon} alt="Inson Icon" className="w-6 h-6" />
          Add other admins
        </div>

        <div className="absolute ml-[30px] top-[295px] left-[218px] w-[480px] text-[#4F4F4F] text-[14px] font-semibold">
          <p className="mt-4">
            Create rich course content and coaching products for your students.<br />
            When you give them a pricing plan, they’ll appear on your site!
          </p>
        </div>

       
        <div className="absolute top-[390px] mt-[20px] left-[218px] text-[#4F4F4F] text-[24px] font-semibold flex items-center gap-2">
          <img src={BankIcon} alt="Bank Icon" className="w-6 h-6" />
          Add classes
        </div>
        <div className="absolute ml-[30px] top-[438px] left-[218px] w-[480px] text-[#4F4F4F] text-[14px] font-semibold">
          <p className="mt-4">
            Create rich course content and coaching products for your students.<br />
            When you give them a pricing plan, they’ll appear on your site!
          </p>
        </div>

       
        <div className="absolute top-[533px] mt-[20px] left-[218px] text-[#4F4F4F] text-[24px] font-semibold flex items-center gap-2">
          <img src={ShapkaIcon} alt="Shapka Icon" className="w-6 h-6" />
          Add students
        </div>
        <div className="absolute ml-[30px] top-[581px] left-[218px] w-[480px] text-[#4F4F4F] text-[14px] font-semibold">
          <p className="mt-4">
            Create rich course content and coaching products for your students.<br />
            When you give them a pricing plan, they’ll appear on your site!
          </p>
        </div>
      </main>
    </div>
  );
}