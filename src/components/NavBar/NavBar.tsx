import React from "react";

import styles from "./Navbar.module.scss";

const items = [
  {
    title: "Tech",
    href: "/tech",
  },
  {
    title: "Business",
    href: "/business",
  },
  {
    title: "Sports",
    href: "/sports",
  },
  {
    title: "Science",
    href: "/science",
  },
  {
    title: "Health",
    href: "/health",
  },
];

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <h1>NewsCorp</h1>
      <div className={styles.navBar__pages}>
        {items.map(({ title, href }: any) => (
          <div className={styles.navBar__links} key={title}>
            <a href={href}>{title}</a>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
