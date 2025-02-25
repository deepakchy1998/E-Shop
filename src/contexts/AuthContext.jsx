import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = async (credentials) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const found = users.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (found) {
      setUser({ username: found.username });
      localStorage.setItem(
        "user",
        JSON.stringify({ username: found.username })
      );
      return { success: true };
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const register = async (credentials) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const existing = users.find((u) => u.username === credentials.username);
    if (existing) {
      throw new Error("User already exists");
    }
    users.push({
      username: credentials.username,
      password: credentials.password,
    });
    localStorage.setItem("users", JSON.stringify(users));
    setUser({ username: credentials.username });
    localStorage.setItem(
      "user",
      JSON.stringify({ username: credentials.username })
    );
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
