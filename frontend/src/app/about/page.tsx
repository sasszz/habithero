"use client";

import React from "react";

import { useQuery } from "@apollo/client";
import { GET_PLAYERS } from "@/app/queries";

import styles from "./page.module.scss";
import Link from "next/link";
import { Button } from "@/components/Button";

const About = () => {
  const { loading, error, data } = useQuery(GET_PLAYERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.root}>
      <h3>Emails added to database:</h3>
      <p>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {data.players.map((player: any) => (
          <div key={player.email}>
            <h3>{player.email}</h3>
          </div>
        ))}
      </p>
      <Link href="/">
        <Button text="Back to Home" />
      </Link>
    </div>
  );
};

export default About;
