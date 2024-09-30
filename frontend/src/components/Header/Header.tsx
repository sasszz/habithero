import React from "react";
import Image from "next/image";
import superHeroLogo from "@/app/assets/logo.png";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Image
            src={superHeroLogo}
            width={50}
            height={50}
            alt="Superhero Logo"
          />
          <h1 className={styles.headerText}>HabitHero™</h1>
        </div>
        <div className={styles.links}>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};
