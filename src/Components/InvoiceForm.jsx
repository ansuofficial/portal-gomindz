import React from "react";

const InvoiceForm = () => {
  return (
    <form action="">
      <div className="flex items-center justify-between mb-6 gap-4">
        <label htmlFor="firstName">First Name</label>
        <input
          className="bg-transparent ring-1 px-4 py-2 rounded outline-none"
          type="text"
          id="firstName"
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="">Last Name</label>
        <input
          className="bg-transparent ring-1 px-4 py-2 rounded outline-none"
          type="text"
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="">Amount</label>
        <input
          className="bg-transparent ring-1 px-4 py-2 rounded outline-none"
          type="text"
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="">Date</label>
        <input
          className="bg-transparent ring-1 px-4 py-2 rounded outline-none"
          type="date"
        />
      </div>
      <div className="flex justify-center pt-4">
        <button
          className="bg-blue-700 rounded py-1 px-4"
          onClick={(e) => {
            e.preventDefault();
            alert("To be printed");
          }}
        >
          Print
        </button>
      </div>
    </form>
  );
};

export default InvoiceForm;
