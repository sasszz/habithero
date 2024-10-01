import React, { useState } from "react";
import styles from "./SubscribeForm.module.scss";
import { Button } from "../Button";
import { emailRegex } from "@/utils/email";

import { useMutation } from "@apollo/client";
import { CREATE_PLAYER } from "@/app/queries";

export const SubscribeForm = ({
  onClickClose,
  onSuccess,
}: {
  onClickClose: () => void;
  onSuccess: () => void;
}) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  // Implement at a later time
  const refCode = "Referral Code";
  const validated = true;

  const [createPlayer] = useMutation(CREATE_PLAYER);

  // Handle form submission
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // Modify handleSubmit to remove the event argument
  const handleSubmit = async () => {
    try {
      await createPlayer({
        variables: {
          email,
          refCode,
          validated,
        },
      });
    } catch (err) {
      console.error("Error creating player:", err);
    }
  };

  const validateEmail = (value: string) => {
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
      setEmail("");
      onSuccess();
      onClickClose();
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
              handleSubmit(); // Call handleSubmit after validation passes
            }
          }}
          disabled={!!emailError || !email}
        />
      </div>
      {emailError && <p className={styles.error}>{emailError}</p>}
    </div>
  );
};
