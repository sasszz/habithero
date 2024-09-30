import React from "react";
import Arrow from "@/app/assets/right_arrow.svg";
import styles from "./Button.module.scss";
import Image from "next/image";

export const Button = () => {
  return (
    <button className={styles.root}>
      <p>Sign Up</p>
      <Image src={Arrow} width={13} alt="Right Arrow" />
    </button>
  );
};
