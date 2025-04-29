"use client";
import { createContext, useState } from "react";

export const AuthContext = createContext({ userName: "" });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ userName: "" });

  const toggleAuthorize = () => {
    setUser(({ userName }) =>
      !!userName ? { userName: "" } : { userName: "User" }
    );
  };

  return (
    <AuthContext value={{ user, toggleAuthorize }}>{children}</AuthContext>
  );
};
