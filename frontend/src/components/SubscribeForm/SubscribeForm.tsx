import React, { useState } from "react";

import styles from "./SubscribeForm.module.scss";
import { Button } from "../Button";

export const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // @ts-expect-error event type
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
    }
  };

  return (
    <div className={styles.root}>
      <h3 className={styles.headerText}>
        {"Subscribe for the latest news,\n learn more and earn rewards"}
      </h3>
      <hr className="w-full border-[#D7D7D7]" />
      <div className={styles.signUpInput}>
        <input
          className={styles.input}
          placeholder="Email address"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <Button onClick={() => alert("hi")} disabled={!!error || !email} />
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};
