"use client";

import { Body } from "@/components/Body";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Body />
    </main>
  );
}
