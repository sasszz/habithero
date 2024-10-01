"use client";

import React from "react";

import { useQuery } from "@apollo/client";
import { GET_PLAYERS } from "@/app/queries";

import styles from "./page.module.scss";
import Link from "next/link";
import { Button } from "@/components/Button";

const About = () => {
  const { loading, error, data } = useQuery(GET_PLAYERS, {
    pollInterval: 1000, // Poll every 1 second
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log({ data });

  return (
    <div className={styles.root}>
      <div className={styles.centerTextBlock}>
        <h3 className={styles.title}>
          {"5 most recent\n emails added to database:"}
        </h3>
        <p>
          {data.players
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((player: any, index: number) => ({
              ...player,
              originalIndex: index,
            }))
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .filter((player: any) => player.email.length > 1)
            .slice(-5)
            .reverse()
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((player: any) => (
              <div className={styles.listEntry} key={player.email}>
                <p className="font-bold">{player.originalIndex}</p>
                <p>{player.email}</p>
              </div>
            ))}
        </p>
      </div>
      <Link href="/">
        <Button text="Back to Home" />
      </Link>
    </div>
  );
};

export default About;
