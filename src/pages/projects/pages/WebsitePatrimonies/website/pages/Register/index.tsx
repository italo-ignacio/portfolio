import React, { useState, useContext, useEffect } from "react";
import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";
import { toast } from "react-toastify";
import validator from "validator";
import axios from "../../services/axios";
import { useRouter } from "next/router";
import { AuthContext } from "../../contexts/auth";
import Loading from "../../components/Loading";

export default function Register() {
  const { authenticated, token, logout, user, valid } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    valid();
    if (!authenticated) {
      setLoading(false);
      return;
    }
    setEmail(user.email);
    setName(user.name);
    setLoading(false);
  }, [authenticated]);

  async function handleSubmit(e: any) {
    e.preventDefault();
    let formErros = false;
    if (name.length < 2 || name.length > 255) {
      formErros = true;
      toast.error("Nome deve ter entre 2 e 255 caracteres");
    }
    if (!validator.isEmail(email)) {
      formErros = true;
      toast.error("E-mail inválido");
    }
    if (!authenticated || password.length > 1) {
      if (password.length < 6 || password.length > 50) {
        formErros = true;
        toast.error("Senha deve ter entre 6 e 50 caracteres");
      }
    }
    if (formErros) return;
    console.log(authenticated);
    if (authenticated) {
      try {
        setLoading(true);
        await axios.put(
          `/api/data/user/${user.id}`,
          {
            name,
            email,
            password: password != "" ? password : null,
          },
          { headers: { authorization: `Bearer ${token}` } }
        );
        logout();

        setTimeout(() => {
          toast.success("Conta atualizada com sucesso");
          toast.warning("Refaça o login para validar seu token");
        }, 100);
        router.push("/projects/patrimonies/login");
      } catch (error) {
        setTimeout(() => {
          toast.warning("Refaça o login para validar seu token");
        }, 500);
        setLoading(false);
      }
    } else {
      try {
        setLoading(true);
        await axios.post("/api/data/user", {
          name,
          email,
          password,
        });

        setTimeout(() => {
          toast.success("Conta criada com sucesso");
          toast.warning("Faça o login para validar seu token");
        }, 100);
        setLoading(false);
        router.push("/projects/patrimonies/login");
      } catch (er) {
        toast.error("E-mail já existe");
        setLoading(false);
      }
    }
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Container>
        <h1>{authenticated ? "Editar dados" : "Registrar"}</h1>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Nome:
            <input
              placeholder="Seu nome"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label htmlFor="email">
            E-mail:
            <input
              placeholder="Seu e-mail"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            Senha:
            <input
              placeholder="Sua senha"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <button type="submit">
            {authenticated ? "Salvar dados" : "Criar minha conta"}
          </button>
        </Form>
      </Container>
    </>
  );
}
