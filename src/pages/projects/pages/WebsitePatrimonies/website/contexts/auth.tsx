import React, { createContext, useState, useEffect } from "react";
import axios from "../services/axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

interface UserContext {
  authenticated: boolean;
  user: {
    id: number;
    name: string;
    email: string;
    is_admin: boolean;
  };
  loading: boolean;
  token: string;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  validate: (token: string) => Promise<boolean>;
  valid: () => Promise<boolean>;
}

export const AuthContext = createContext<UserContext | null>(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");
  const router = useRouter();

  const validate = async (token: string) => {
    try {
      const response = await axios.post(
        "/api/data/user/validate",
        {},
        { headers: { authorization: `Bearer ${token}` } }
      );
      setUser(response.data);
      setToken(token);
      return true;
    } catch (e) {
      localStorage.removeItem("token");
      setUser(null);
      setToken("");
      return false;
    }
  };

  const valid = async () => {
    setLoading(true);
    const recoverdToken = localStorage.getItem("token");
    if (recoverdToken) {
      try {
        const response = await axios.post(
          "/api/data/user/validate",
          {},
          { headers: { authorization: `Bearer ${recoverdToken}` } }
        );
        setUser(response.data);
        setToken(recoverdToken);
        setLoading(false);
        return true;
      } catch (e) {
        localStorage.removeItem("token");
        setUser(null);
        setToken("");
        setLoading(false);
        return false;
      }
    }
  };

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const response = await axios.post("/api/data/user/login", {
        email,
        password,
      });
      const loggedUser = response.data.user;
      const token = response.data.token;

      setUser(loggedUser);
      setToken(token);
      localStorage.setItem("token", token);

      toast.success("Login realizado com sucesso");

      router.push("/projects/patrimonies/home");
    } catch (er) {
      switch (er.response.data.msg) {
        case "Invalid password":
          toast.error("Senha inválida");
          break;
        case "User not found":
          toast.error("Usuário não encontrado");
          break;
        default:
          break;
      }
    }
    setLoading(false);
  };
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken("");
  };

  return (
    <AuthContext.Provider
      value={{
        authenticated: user != null ? true : false,
        user,
        loading,
        token,
        login,
        logout,
        valid,
        validate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
