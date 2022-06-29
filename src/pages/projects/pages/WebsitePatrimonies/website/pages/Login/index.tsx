import React, { useState, useContext, useEffect } from "react";
import { Container } from "../../styles/GlobalStyles";
import { toast } from "react-toastify";
import { Form } from "./styled";
import validator from "validator";
import Loading from "../../components/Loading";
import { AuthContext } from "../../contexts/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useContext(AuthContext);
  const [loading2, setLoading] = useState(true);

  useEffect(() => {
    const localEmail = localStorage.getItem("email");
    if (localEmail) {
      setEmail(localEmail);
    }

    setLoading(false);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErros = false;

    if (!validator.isEmail(email)) {
      formErros = true;
      toast.error("E-mail inválido");
    }
    if (password.length < 6 || password.length > 50) {
      formErros = true;
      toast.error("Senha inválida");
    }
    if (formErros) return;
    login(email, password);
  }
  if (loading) {
    return <Loading />;
  }
  if (loading2) {
    return <Loading />;
  }
  return (
    <>
      <Container>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="email">
            <input
              placeholder="E-mail"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            <input
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <button type="submit">Fazer Login</button>
        </Form>
      </Container>
    </>
  );
}
