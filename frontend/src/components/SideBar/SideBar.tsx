import { useEffect, useState } from "react";
import styles from "./SideBar.module.scss";
import Image from "next/image";
import Close from "@/app/assets/close.svg";
import clsx from "clsx";
import { SubscribeForm } from "@/components/SubscribeForm";
import SuccessForm from "../SuccessForm/SuccessForm";

export const SideBar = ({
  opened,
  onClickClose,
  onSignUpSuccess,
}: {
  opened: boolean;
  onClickClose: () => void;
  onSignUpSuccess: () => void;
}) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClose = () => {
    setIsSidebarVisible(false);
    console.log("close");
    setTimeout(() => onClickClose(), 300);
  };

  useEffect(() => {
    if (opened) {
      setIsSidebarVisible(true);
      setIsSuccessVisible(false);
      setIsTransitioning(false);
    }
  }, [opened]);

  const handleSignUpSuccess = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsSuccessVisible(true);
      setIsTransitioning(false);
      onSignUpSuccess();
    }, 300);
  };

  return (
    <div
      className={clsx(styles.wrapper, {
        [styles.visible]: opened,
      })}
    >
      <aside
        className={clsx(styles.sidebar, {
          [styles.opened]: isSidebarVisible,
        })}
      >
        <div className={styles.content}>
          <button onClick={handleClose} className={styles.closeButton}>
            <Image src={Close} width={22} alt="Close" />
          </button>
          <div
            className={clsx(styles.formWrapper, {
              [styles.transitioning]: isTransitioning, // Apply animation class during transition
            })}
          >
            {isSuccessVisible ? (
              <SuccessForm onClickClose={onClickClose} />
            ) : (
              <SubscribeForm onSuccess={handleSignUpSuccess} />
            )}
          </div>
        </div>
      </aside>
    </div>
  );
};
