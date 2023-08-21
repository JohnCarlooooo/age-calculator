import React from "react";

interface ButtonProps {
  onClick: () => void;
}

const Button = ({ onClick }: ButtonProps) => {
  return (
    <div onClick={onClick} className="icon-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="32"
        viewBox="0 0 46 44"
      >
        <g fill="none" stroke="#FFF" strokeWidth="3">
          <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
        </g>
      </svg>
    </div>
  );
};

export default Button;
