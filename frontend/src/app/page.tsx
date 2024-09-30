"use client";

import { useQuery } from "@apollo/client";
import { GET_PLAYERS } from "../app/queries";
import CreatePlayerForm from "./components/CreatePlayer";

export default function Home() {
  const { loading, error, data } = useQuery(GET_PLAYERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {data.players.map((player: any) => (
          <div key={player.email}>
            <h3>{player.email}</h3>
          </div>
        ))}
        <CreatePlayerForm />
      </main>
    </div>
  );
}
