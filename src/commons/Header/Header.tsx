import React from "react";

interface HeaderProps {
  text: string;
}

function Header({ text }: HeaderProps) {
  return <h1 className="font-bold text-3xl my-4">{text}</h1>;
}

export default Header;
