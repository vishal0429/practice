import React from "react";
import styles from "./Button.module.scss";
import { combineClass } from "../../utils/constaint";

const Button = ({
  variant = "normal",
  size = "md",
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={combineClass(
        styles.button,
        styles[variant],
        styles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
