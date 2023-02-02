import React from "react";
interface ButtonProps {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, href }) => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    event.preventDefault();
    if (onClick) {
      onClick(event as React.MouseEvent<HTMLButtonElement>);
    }
  };

  return href ? (
    <a
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4  rounded"
      href={href}
      onClick={handleClick}
    >
      {text}
    </a>
  ) : (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4  rounded"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
