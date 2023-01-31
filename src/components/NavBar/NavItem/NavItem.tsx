import React from "react";
import Link from "next/link";

import styles from "./NavItem.module.scss";

interface NavItemProps {
  text: string;
  href: string;
  active: boolean;
}

const NavItem = ({ text, href, active }: NavItemProps) => {
  return (
    <Link href={href}>
      <p className={styles.navItem}>{text}</p>
    </Link>
  );
};

export default NavItem;
