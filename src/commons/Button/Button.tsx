import React from "react";
import styles from "./Button.module.scss";

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
    <a className={styles.button} href={href} onClick={handleClick}>
      {text}
    </a>
  ) : (
    <button className="Button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
