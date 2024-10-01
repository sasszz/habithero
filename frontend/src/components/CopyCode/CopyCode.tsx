import React from "react";
import Image from "next/image";
import Copy from "@/app/assets/copy.svg";
import styles from "./CopyCode.module.scss";

export const CopyCode = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText("http://www.example.com/3hj6k39r");
    alert("Link copied to clipboard!");
  };

  return (
    <div className={styles.root}>
      <p className="text-sm">Share your unique link to get more points</p>
      <div className={styles.wrapper}>
        <input
          type="text"
          readOnly
          value="http://www.example.com/3hj6k39r"
          className={styles.readOnlyInput}
        />
        <button onClick={handleCopy} className={styles.copyButton}>
          <Image src={Copy} width={16} alt="Copy" />
        </button>
      </div>
    </div>
  );
};
