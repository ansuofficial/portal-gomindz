import { Link } from "react-router-dom";

const Button = ({ to, text, children, ring, color, bgHover }) => {
  return (
    <Link to={to}>
      <button
        className={`${bgHover} ${text} ${color} font-bold ring-1 ${ring} p-2 px-4 duration-300 ease-out`}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
