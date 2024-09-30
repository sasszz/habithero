import React from "react";
import Image from "next/image";
import superHeroLogo from "@/app/assets/logo.png";
import styles from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();

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
          <button onClick={() => router.push("/about")}>About</button>
          <Link passHref href="/about">
            About
          </Link>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};
