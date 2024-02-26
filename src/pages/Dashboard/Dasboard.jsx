import React from "react";
import { useState } from "react";
import { BsGraphDownArrow } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { GiProgression } from "react-icons/gi";
import DashboardNav from "../../Components/DashboardNav.jsx";
import SideBar from "../../Components/SideBar";
import Progress from "../../Components/Progress.jsx";
import Divider from "../../Components/Divider.jsx";
import Invoice from "../../Components/Invoice.jsx";
import InvoiceForm from "../../Components/InvoiceForm.jsx";
import { IoClose } from "react-icons/io5";
import { receiptionist } from "../../Data/data.js";

const Dasboard = () => {
  const [showinvoice, Setshowinvoice] = useState(false);

  const handleinvoice = () => {
    Setshowinvoice(!showinvoice);
  };

  const displayinvoice = () => {
    Setshowinvoice(!showinvoice);
  };
  return (
    <>
      <div className="py-8 px-2">
        <div className="flex gap-[12rem]">
          <SideBar>
            <div>
              <div className="w-[150%] h-screen p-12 shadow-white shadow-xl">
                <div>
                  <h1 className="text-white text-xl font-bold">Dashboard</h1>
                </div>
                <Divider />
                <ul className="text-white py-12">
                  {receiptionist.map((item, i) => {
                    return (
                      <li
                        className="mb-[2rem] cursor-pointer font-bold"
                        key={i}
                        onClick={displayinvoice}
                      >
                        {item.right}
                      </li>
                    );
                  })}
                </ul>
                <div></div>
              </div>
            </div>
          </SideBar>
          <DashboardNav>
            <div>
              <div className=" shadow-white shadow-md py-12 px-2 flex gap-8 rounded">
                <Progress>
                  <div className="w-[20vw] h-[140px] rounded-[1rem] cursor-pointer bg-gradient-to-r from-[#1f1f79] to-[#82badb] text-white p-4 recp-con delay-100 hover:ring-1 ring-slate-700 flex items-center justify-center">
                    <div className="text-[2rem]">
                      <GiProgression />
                    </div>
                  </div>
                </Progress>
                <Progress>
                  <div className="w-[270px] h-[140px] rounded-[1rem] cursor-pointer bg-gradient-to-r from-[#1f1f79] to-[#82badb] text-white p-4 recp-con delay-100 hover:ring-1 ring-slate-700  flex items-center justify-center">
                    <div className="text-[2rem]">
                      <BsGraphDownArrow />
                    </div>
                  </div>
                </Progress>
                <Progress>
                  <div className="w-[270px] h-[140px] rounded-[1rem] cursor-pointer bg-gradient-to-r from-[#1f1f79] to-[#82badb] text-white p-4 recp-con delay-100 hover:ring-1 ring-slate-700  flex items-center justify-center">
                    <div className="text-[2rem]">
                      <VscGraph />
                    </div>
                  </div>
                </Progress>
              </div>
            </div>
          </DashboardNav>
        </div>
        <div className="flex ml-[30%] absolute top-[50%] justify-center shadow-white shadow-md rounded-lg w-[50%]">
          <Invoice>
            {showinvoice && (
              <div className="flex flex-row-reverse text-white p-12">
                <div className="absolute mt-[-5%] mr-[-20%] cursor-pointer">
                  <IoClose onClick={handleinvoice} />
                </div>
                <InvoiceForm />
              </div>
            )}
          </Invoice>
        </div>
      </div>
    </>
  );
};

export default Dasboard;
