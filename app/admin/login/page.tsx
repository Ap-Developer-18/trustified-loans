"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const json = await res.json();

      if (json.success) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(json.error || "Invalid password");
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-sand flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-surface border border-border shadow-[0_25px_60px_-15px_rgba(0,71,65,0.08)] rounded-3xl p-8"
      >
        <div className="mb-8 text-center">
          <h1 className="font-serif text-3xl font-bold text-cyprus mb-2">Admin Access</h1>
          <p className="text-muted text-sm font-medium">
            Enter your password to access the Trustified Loans dashboard.
          </p>
        </div>

        <div className="relative mb-2">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            className="w-full bg-sand/50 border border-border rounded-2xl pl-5 pr-12 py-4 text-sm font-medium text-cyprus placeholder:text-muted/60 focus:outline-none focus:bg-white focus:border-cyprus focus:ring-2 focus:ring-cyprus/20 transition-all"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-cyprus transition-colors"
            tabIndex={-1}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {error && <p className="mb-4 text-xs font-semibold text-red-500 text-center">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-4 rounded-2xl bg-cyprus text-sand px-5 py-4 text-sm font-bold tracking-wide transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {loading ? "Authenticating..." : "Login to Dashboard"}
        </button>
      </form>
    </div>
  );
}