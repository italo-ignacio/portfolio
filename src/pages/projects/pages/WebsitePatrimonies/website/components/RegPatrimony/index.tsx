import React, { useState } from "react";
import axios from "../../services/axios";
import { Container } from "./styled";
import { Form } from "./styled";
import Loading from "../../components/Loading";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

interface UserInterface {
  user: {
    id: number;
    name: string;
    email: string;
    is_admin: boolean;
  };
}
export default function RegPatrimony({ user }: UserInterface) {
  const [name, setName] = useState("");
  const [cod, setCode] = useState("");
  const [showCadPatrimony, setShowCadPatrimony] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: any) {
    e.preventDefault();

    let formErros = false;
    if (name.length < 2 || name.length > 255) {
      formErros = true;
      toast.error("Nome deve ter entre 2 e 255 caracteres");
    }
    if (cod.length < 1 || cod.length > 10) {
      formErros = true;
      toast.error("Código deve ter entre 1 e 10 caracteres");
    }
    if (formErros) {
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post("/api/data/patrimony", {
        name,
        cod,
        owner: user.name,
        userId: user.id,
      });

      router.replace(
        `/projects/patrimonies/updatePatrimony/${response.data.id}`
      );
    } catch (er) {
      console.log(er);
      setLoading(false);
    }
  }

  const handleclick = () => {
    setShowCadPatrimony(!showCadPatrimony);
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <button onClick={handleclick} className="btn_reg">
        Cadastrar patrimônio
      </button>
      {showCadPatrimony ? (
        <Container className="reg_container">
          <Form onSubmit={handleSubmit}>
            <label htmlFor="name">
              <input
                placeholder="Nome do patrimônio"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </label>
            <label htmlFor="cod">
              <input
                placeholder="Código do patrimônio"
                type="text"
                value={cod}
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />
            </label>
            <button type="submit">Cadastrar</button>
          </Form>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}
