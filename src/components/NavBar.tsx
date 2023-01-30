import React from "react";

import styles from "./Navbar.module.scss";

const items = [
  {
    title: "US",
    href: "/us",
  },
  {
    title: "International",
    href: "/international",
  },
  {
    title: "Sports",
    href: "/sports",
  },
];

function NavBar() {
  return (
    <nav className={styles.navBar}>
      <h1>NewsCorp</h1>
      <ul className={styles.navBar__pages}>
        {items.map(({ title, href }: any) => (
          <li key={title}>
            <a href={href}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
