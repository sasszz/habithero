"use client";

import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_PLAYER } from "../queries";

export default function CreatePlayerForm() {
  // React state to manage form inputs
  const [email, setEmail] = useState("");
  const [refCode, setRefCode] = useState("");
  const [validated, setValidated] = useState(false);

  // Apollo useMutation hook
  const [createPlayer, { data, loading, error }] = useMutation(CREATE_PLAYER);

  // Handle form submission
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();
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

  return (
    <div>
      <h1>Create Player</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Referral Code:</label>
          <input
            type="text"
            value={refCode}
            onChange={(e) => setRefCode(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Validated:</label>
          <input
            type="checkbox"
            checked={validated}
            onChange={(e) => setValidated(e.target.checked)}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Create Player"}
        </button>
      </form>

      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h2>Player Created Successfully!</h2>
          <p>ID: {data.createPlayer.id}</p>
          <p>Email: {data.createPlayer.email}</p>
          <p>Referral Code: {data.createPlayer.refCode}</p>
          <p>Validated: {data.createPlayer.validated ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
}
