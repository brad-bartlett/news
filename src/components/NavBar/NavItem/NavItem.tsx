import React from "react";
import Link from "next/link";

interface NavItemProps {
  text: string;
  href: string;
  active: boolean;
}

const NavItem = ({ text, href, active }: NavItemProps) => {
  return (
    <Link href={href}>
      <p className="text-white">{text}</p>
    </Link>
  );
};

export default NavItem;
