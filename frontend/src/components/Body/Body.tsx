import React from "react";
import styles from "./Body.module.scss";
import { Button } from "@/components/Button";

export const Body = () => {
  return (
    <div className={styles.root}>
      <div className={styles.centerContent}>
        <div className={styles.centerText}>
          <h2 className={styles.headline}>{"Unleash your\n inner hero."}</h2>
          <p className={styles.tagline}>
            {
              "Unleash your potential with HabitHero™, the ultimate habit tracking app\n designed to turn everyday tasks into epic wins!"
            }
          </p>
        </div>
        <Button />
      </div>
    </div>
  );
};
