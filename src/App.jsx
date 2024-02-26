import React, { useState } from "react";
import Title from "./pages/WelcomingTitle/title";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Roles from "./pages/Roles/roles";
import Forms from "./pages/Forms/Forms";
import FormsB from "./pages/Forms/Formsb";
import Formsc from "./pages/Forms/Formsc.jsx";
import Dasboard from "./pages/Dashboard/Dasboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Allroles } from "./Data/data.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Forms />} />
        <Route path="/receiptionist" element={<Dasboard />} />
        <Route path="/accountant" element={<Dasboard />} />
        <Route path="/supervisors" element={<Dasboard />} />
      </Routes>
    </BrowserRouter>
  );
};

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleClickToShowForm = (title) => {
    setSelectedRole(title);
    setShowForm(true);
  };

  return (
    <div className="p-16">
      <Title />
      <div className="flex items-center justify-center">
        {Allroles.map((item) => (
          <div
            key={item.title}
            className="w-full text-2xl font-bold gap-[2rem] p-[4rem]"
            onClick={() => handleClickToShowForm(item.title)}
          >
            <Roles title={item.title} icon={<BsFillPersonLinesFill />} />
          </div>
        ))}
      </div>
      {showForm &&
        (selectedRole === "Receptionist" ? (
          <Forms />
        ) : selectedRole === "Accountant" ? (
          <FormsB />
        ) : (
          <Formsc />
        ))}
    </div>
  );
};

export default App;
