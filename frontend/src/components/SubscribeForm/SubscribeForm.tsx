import React, { useState } from "react";
import styles from "./SubscribeForm.module.scss";
import { Button } from "../Button";
import { emailRegex } from "@/utils/email";

export const SubscribeForm = ({
  onClickClose,
  onSuccess,
}: {
  onClickClose: () => void;
  onSuccess: () => void;
}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value: string) => {
    if (!emailRegex.test(value)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
      setEmail("");
      onSuccess();
      onClickClose();
    }
  };

  //@ts-expect-error event type unknown
  const handleEmailChange = (e) => {
    setError("");
    const value = e.target.value;
    setEmail(value);
  };

  return (
    <div className={styles.root}>
      <h3 className={styles.headerText}>
        {"Subscribe for the latest news,\n learn more and earn rewards"}
      </h3>
      <hr className={styles.line} />
      <div className={styles.signUpInput}>
        <input
          className={styles.input}
          placeholder="Email address"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <Button
          onClick={() => {
            validateEmail(email);
          }}
          disabled={!!error || !email}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
