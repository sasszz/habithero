import React, { useCallback, useState } from "react";
import styles from "./Body.module.scss";
import { Button } from "@/components/Button";
import { SideBar } from "../SideBar";

export const Body = () => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);
  const [showSignUpButton, setShowSignUpButton] = useState(true);
  const handleOnClickClose = useCallback(() => setIsSidebarOpened(false), []);

  const handleSignUpSuccess = () => {
    console.log("Sign-up successful at parent level");
    setShowSignUpButton(false);
  };

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
        {showSignUpButton ? (
          <Button onClick={() => setIsSidebarOpened(true)} />
        ) : null}
        <SideBar
          opened={isSidebarOpened}
          onClickClose={handleOnClickClose}
          onSignUpSuccess={handleSignUpSuccess}
        />
      </div>
    </div>
  );
};
