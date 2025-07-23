"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("about to signIn…", { username, password });
    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
      callbackUrl: "/dashboard",
    });
    console.log("signIn returned:", res);
    if (res?.ok) {
      router.push(res.url || "/dashboard");
    } else {
      setError(res?.error ?? "Unexpected error");
    }
  };


  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md space-y-4 w-80"
      >
        <h1 className="text-2xl font-bold text-center">Admin Login</h1>

        {error && (
          <div className="text-red-600 text-sm">
            {error === "CredentialsSignin"
              ? "Invalid username or password."
              : error}
          </div>
        )}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full p-2 bg-[var(--orange-primary)] text-white rounded"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
