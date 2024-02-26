import "./roles.css";

const Roles = ({ title, icon }) => {

  return (
    <>
      <div className="w-[100%] h-[200px] rounded-[1rem] cursor-pointer bg-gradient-to-r from-[#1f1f79] to-[#82badb] text-white p-4 recp-con delay-100 hover:ring-1 ring-slate-700">
        <h3>{title}</h3>
        <div className="xl: text-[4rem] flex justify-center py-[2.5rem] px-4 recp-content">
          {icon}
        </div>
      </div>
    </>
  );
};

export default Roles