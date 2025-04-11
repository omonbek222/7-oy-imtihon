
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../src/Components/Login";
import SignUp from "../src/Components/SignUp";
import Dashboard from "../src/Components/Dashboard";
import Teachers from "../src/Components/Teachers";
import AddTeachers from "../src/Components/AddTeachers"; 
import About from "../src/Components/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/add-teachers" element={<AddTeachers />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
