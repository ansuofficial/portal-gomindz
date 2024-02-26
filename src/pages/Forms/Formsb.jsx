import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Button from "../../Components/Button";

const Formsb = () => {
  const [showForm, setShowForm] = useState(true);

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      {showForm && (
        <form action="" className="flex justify-center landing-page-form ">
          <div className="border py-[4rem] px-[2rem] bg-white rounded">
            <div className="flex justify-end mt-[-4rem] p-4">
              <IoClose onClick={handleCloseForm} className="cursor-pointer" />
            </div>
            <div>
              <label htmlFor="" className="block mb-2">
                Username
              </label>
              <input
                type="text"
                placeholder="enter username"
                className="p-2 rounded mb-4"
              />
            </div>
            <div>
              <label htmlFor="" className="mb-2 block">
                Password
              </label>
              <input
                type="password"
                placeholder="enter password"
                className="p-2 rounded mb-4"
              />
            </div>
            <div className="text-white font-bold flex justify-center">
              <Button
                to="./accountant"
                text={"text-white"}
                ring={"ring-white"}
                bgHover={"hover:bg-[#ff0000]"}
                color={"hover:text-white"}
              >
                Login
              </Button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default Formsb;
