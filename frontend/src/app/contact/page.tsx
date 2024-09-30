"use client";

import React from "react";

import styles from "./page.module.scss";
import Link from "next/link";
import { Button } from "@/components/Button";

const About = () => {

  return (
    <div className={styles.root}>
      <h3>Contact</h3>
      <Link href="/">
        <Button text="Back to Home" />
      </Link>
    </div>
  );
};

export default About;
