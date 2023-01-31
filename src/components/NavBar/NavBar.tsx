import React, { useState } from "react";
import Link from "next/link";
import NavItem from "./NavItem";

import styles from "./Navbar.module.scss";

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
  const [navActive, setNavActive] = useState<boolean>(false);
  const [activeIdx, setActiveIdx] = useState<number>(-1);

  return (
    <header className={styles.navBar__wrapper}>
      <nav className={styles.navBar}>
        <Link href={"/"}>
          <h1>NewsCorp</h1>
        </Link>
        <div className={styles.nav__menu_list}>
          {items.map((menu, idx: any) => (
            <div
              key={menu.text}
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
