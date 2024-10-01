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

  const handleClose = () => {
    setIsSidebarVisible(false);
    console.log("close");
    setTimeout(() => onClickClose(), 300);
  };

  useEffect(() => {
    if (opened) {
      setIsSidebarVisible(true);
      setIsSuccessVisible(false);
    }
  }, [opened]);

  const handleSignUpSuccess = () => {
    setIsSuccessVisible(true);
    onSignUpSuccess();
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
          {isSuccessVisible ? (
            <SuccessForm onClickClose={onClickClose} />
          ) : (
            <SubscribeForm
              onSuccess={handleSignUpSuccess}
            />
          )}
        </div>
      </aside>
    </div>
  );
};
