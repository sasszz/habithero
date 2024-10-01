import React, { useState } from "react";
import styles from "./SubscribeForm.module.scss";
import { Button } from "../Button";

import { useMutation } from "@apollo/client";
import { CREATE_PLAYER } from "@/app/queries";
import { emailRegex } from "@/app/utils/email";
import { generateReferralCode } from "@/app/utils/referralcode";

export const SubscribeForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  // Implement at a later time
  const refCode = generateReferralCode();
  const validated = true;

  const [createPlayer] = useMutation(CREATE_PLAYER);

  const handleSubmit = async () => {
    console.log("handleSubmit");
    try {
      await createPlayer({
        variables: {
          email,
          refCode,
          validated,
        },
      });
      console.log("after await");
      setEmail("");
      onSuccess();
    } catch (err) {
      console.error("Error creating player:", err);
    }
  };

  const validateEmail = (value: string) => {
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
      return false;
    } else {
      setEmailError("");
    }
  };

  //@ts-expect-error event type unknown
  const handleEmailChange = (e) => {
    setEmailError("");
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
            if (!emailError && email) {
              handleSubmit();
            }
          }}
          disabled={!!emailError || !email}
        />
      </div>
      {emailError && <p className={styles.error}>{emailError}</p>}
    </div>
  );
};
