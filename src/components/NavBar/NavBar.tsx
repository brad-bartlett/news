import React, { useState } from "react";
import Link from "next/link";
import NavItem from "./NavItem";

const items = [
  {
    text: "Tech",
    href: "/tech",
  },
  {
    text: "Business",
    href: "/business",
  },
  {
    text: "Sports",
    href: "/sports",
  },
  {
    text: "Science",
    href: "/science",
  },
  {
    text: "Health",
    href: "/health",
  },
];

function NavBar() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-500 shadow-md">
      <Link href={"/"}>
        <h1 className="text-white font-bold ml-2">NewsCorp</h1>
      </Link>
      <div className="flex items-center space-x-7">
        {items.map((menu, idx: any) => (
          <div
            key={menu.text}
            onClick={() => {
              setActiveIdx(idx);
            }}
          >
            <NavItem
              active={activeIdx === idx}
              text={menu.text}
              href={menu.href}
            />
          </div>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
