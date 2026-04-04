"use client";

import { useState, useEffect, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import { LogIn, LogOut, User as UserIcon } from "lucide-react";
import type { User } from "@supabase/supabase-js";

export default function AuthButton() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };
    getUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    if (showDropdown) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDropdown]);

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setShowDropdown(false);
    window.location.href = "/";
  };

  if (loading) {
    return (
      <div style={{
        width: "36px", height: "36px", borderRadius: "10px",
        background: "#111827", border: "1px solid rgba(148,163,184,0.12)",
        animation: "pulse 1.5s infinite",
      }} />
    );
  }

  if (user) {
    return (
      <div ref={dropdownRef} style={{ position: "relative" }}>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          style={{
            display: "flex", alignItems: "center", gap: "8px",
            padding: "6px 12px", borderRadius: "10px",
            background: "rgba(17,24,39,0.6)",
            border: "1px solid rgba(148,163,184,0.12)",
            color: "#f1f5f9", cursor: "pointer", fontSize: "0.85rem",
          }}
        >
          {user.user_metadata?.avatar_url ? (
            <img
              src={user.user_metadata.avatar_url}
              alt=""
              style={{ width: "28px", height: "28px", borderRadius: "8px" }}
            />
          ) : (
            <UserIcon style={{ width: "16px", height: "16px" }} />
          )}
          <span className="hidden sm:inline" style={{ maxWidth: "120px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {user.user_metadata?.full_name || user.email?.split("@")[0] || "User"}
          </span>
        </button>

        {showDropdown && (
          <div className="md:absolute md:top-[calc(100%+8px)] md:right-0 mt-2 md:mt-0 relative" style={{
            minWidth: "180px", padding: "8px",
            background: "#0f172a", border: "1px solid rgba(148,163,184,0.15)",
            borderRadius: "12px", zIndex: 9999,
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}>
            <div style={{
              padding: "8px 12px", marginBottom: "4px",
              fontSize: "0.75rem", color: "#64748b",
              borderBottom: "1px solid rgba(148,163,184,0.1)",
            }}>
              {user.email}
            </div>
            <button
              onClick={handleSignOut}
              style={{
                width: "100%", display: "flex", alignItems: "center", gap: "8px",
                padding: "10px 12px", borderRadius: "8px",
                background: "none", border: "none", color: "#f87171",
                fontSize: "0.85rem", cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(248,113,113,0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
            >
              <LogOut style={{ width: "14px", height: "14px" }} /> Sign Out
            </button>
          </div>
        )}
      </div>
    );
  }

  // Not logged in — single button triggers Google sign-in directly
  return (
    <button
      onClick={handleSignIn}
      style={{
        display: "flex", alignItems: "center", gap: "8px",
        padding: "10px 20px", borderRadius: "12px",
        background: "linear-gradient(135deg, #6366f1, #4f46e5)",
        color: "#fff", fontSize: "0.85rem", fontWeight: 600,
        border: "none", cursor: "pointer",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#fff" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#fff" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#fff" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#fff" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
      Sign In
    </button>
  );
}
