import React, { createContext, useState, useEffect } from "react";

import api, { setAuthToken } from "../Services/Api";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthToken(token);
      getUser();
    }
  }, []);

  const getUser = async () => {
    try {
      const res = await api.get("/auth/user");
      setUser(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  const signUp = async (credentials) => {
    await api.post("/auth/signup", credentials);
  };
  const signIn = async (credentials) => {
    const res = await api.post("/auth/signin", credentials);
    setAuthToken(res.data.token);
    setUser(res.data.user);
  };
  const signOut = async () => {
    setUser(null);
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
