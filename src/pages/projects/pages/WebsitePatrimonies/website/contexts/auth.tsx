import React, { createContext, useState, useEffect } from "react";
import axios from "../services/axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

interface UserContext {
  authenticated: boolean;
  user: any;
  loading: boolean;
  token: string;
  name: string;
  isAdmin: boolean;
  id: string;
  login: (email: any, password: any) => Promise<void>;
  logout: () => void;
  validate: (
    token: any,
    id: any,
    is_admin: any,
    email: any
  ) => Promise<boolean>;
  changeName: (name: any) => void;
}

export const AuthContext = createContext<UserContext | null>(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  const validate = async (token, id, is_admin, email) => {
    try {
      await axios.post(
        "/user/validate",
        { id, is_admin, email },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return true;
    } catch (e) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setUser(null);
      setToken("");
      setName("");
      setIsAdmin(false);
      setId("");
      return false;
    }
  };

  useEffect(() => {
    const recoverdUser = localStorage.getItem("user");
    const recoverdEmail = localStorage.getItem("email");
    const recoverdToken = localStorage.getItem("token");
    const userr = JSON.parse(recoverdUser);
    if (recoverdUser) {
      setUser(userr);
      setName(userr.name);
      setIsAdmin(userr.is_admin);
      setId(userr.id);
      if (recoverdToken) {
        setToken(recoverdToken);
        validate(recoverdToken, userr.id, userr.is_admin, recoverdEmail);
      } else {
        setUser(null);
        setName("");
        setIsAdmin(false);
        setId("");
        setToken("");
      }
    } else {
      setUser(null);
      setName("");
      setIsAdmin(false);
      setId("");
      setToken("");
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await axios.post("/user/login", {
        email,
        password,
      });
      const loggedUser = response.data.user;
      const token = response.data.token;

      setUser(loggedUser);
      setToken(token);
      setName(loggedUser.name);
      setIsAdmin(loggedUser.is_admin);
      setId(loggedUser.id);
      localStorage.setItem("user", JSON.stringify(loggedUser));
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);

      toast.success("Login realizado com sucesso");

      router.push(`/projects/patrimonies/home`);
    } catch (er) {
      switch (er.response.data.msg) {
        case "User not found":
          toast.error("Usuário não encontrado");
          break;
        case "Invalid password":
          toast.error("Senha inválida");
          break;
        default:
          toast.error("Erro ao fazer login");
          break;
      }
      setLoading(false);
    }
  };
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken("");
    setName("");
    setIsAdmin(false);
    setId("");
  };
  const changeName = (name) => {
    setName(name);
  };
  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        user,
        loading,
        token,
        name,
        isAdmin,
        id,
        login,
        logout,
        validate,
        changeName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
