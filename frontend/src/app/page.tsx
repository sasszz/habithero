"use client";

import { useQuery } from "@apollo/client";
import { GET_PLAYERS } from "../app/queries";
import CreatePlayerForm from "./components/CreatePlayer";
import Header from "./components/Header/Header";

export default function Home() {
  const { loading, error, data } = useQuery(GET_PLAYERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
      <main>
        <Header />
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {data.players.map((player: any) => (
          <div key={player.email}>
            <h3>{player.email}</h3>
          </div>
        ))}
        <CreatePlayerForm />
      </main>
  );
}
