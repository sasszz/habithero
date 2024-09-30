"use client";

import React from "react";

import { useQuery } from "@apollo/client";
import { GET_PLAYERS } from "@/app/queries";

import styles from "./page.module.scss";
import Link from "next/link";

const About = () => {
  const { loading, error, data } = useQuery(GET_PLAYERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.root}>
      <Link href="/">Back to home</Link>
      <p className="text-black">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {data.players.map((player: any) => (
          <div key={player.email}>
            <h3>{player.email}</h3>
          </div>
        ))}
      </p>
    </div>
  );
};

export default About;
