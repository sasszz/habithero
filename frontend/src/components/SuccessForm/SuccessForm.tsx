import React from "react";
import styles from "./SuccessForm.module.scss";
import Token from "@/app/assets/token.svg";
import BlueToken from "@/app/assets/bluetoken.svg";
import Email from "@/app/assets/email.svg";
import Image from "next/image";
import { Button } from "../Button";
import { CopyCode } from "../CopyCode";

const SuccessForm = () => {
  return (
    <div className={styles.root}>
      <h3 className={styles.headerText}>{"Great job!\n Your progress:"}</h3>
      <div className={styles.pointsEarnedGroup}>
        <div className={styles.pointsContainer}>
          <p className={styles.pointsText}>5</p>
          <Image src={Token} width={22} alt="Tokens" />
        </div>
        <p className={styles.pointsEarned}>Points earned</p>
      </div>
      <CopyCode />
      <div className={styles.plusTenGroup}>
        <Image src={BlueToken} width={22} alt="Tokens" />
        <p>+10 points for every friend that signs up</p>
      </div>
      <div className={styles.inboxGroup}>
        <Image src={Email} width={22} alt="Email" />
        <p className={styles.inboxText}>
          {
            "Keep an eye on your inbox for updates and\n more ways to earn points."
          }
        </p>
      </div>
      <hr className={styles.line} />
      <div>
        <Button onClick={() => alert("hello")} text="Close" />
      </div>
    </div>
  );
};

export default SuccessForm;
