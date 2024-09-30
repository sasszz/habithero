import React from "react";
import Arrow from "@/app/assets/right_arrow.svg";
import styles from "./Button.module.scss";
import Image from "next/image";
import clsx from "clsx";

export const Button = ({
  onClick,
  disabled = false,
}: {
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      className={clsx(styles.root, disabled ? styles.disabled : styles.hover)}
      onClick={onClick}
      disabled={disabled}
    >
      <p>Sign Up</p>
      <Image src={Arrow} width={13} alt="Right Arrow" />
    </button>
  );
};
