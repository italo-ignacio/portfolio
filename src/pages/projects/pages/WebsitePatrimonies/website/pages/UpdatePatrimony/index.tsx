import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { Container } from "../../styles/GlobalStyles";
import { Form, Label } from "./styled";
import Loading from "../../components/Loading";
import { AuthContext } from "../../contexts/auth";
import axios from "../../services/axios";
import { useRouter } from "next/router";
import Image from "next/image";
import Router from "next/router";

export default function UpdatePatrimony() {
  const { query } = useRouter();
  const id = query.id;
  const { token, user, valid } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [cod, setCod] = useState("");
  const [note, setNote] = useState("");
  const [details, setDetails] = useState("");
  const [url, setUrl] = useState("");
  const [userId, setUserId] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      await valid();
      try {
        if (id != undefined) {
          const response = await axios.get(`/api/data/patrimony/${id}`);
          const patrimony = response.data;
          setName(patrimony.name);
          setCod(patrimony.cod);
          setNote(patrimony.note != null ? patrimony.note : "");
          setDetails(patrimony.details != null ? patrimony.details : "");
          setUrl(patrimony.url != null ? patrimony.url : "");
          setUserId(patrimony.userId);
          setLoading(false);
        }
      } catch (er) {
        toast.error("Patrimônio não encontrado");
        setLoading(false);
        Router.push("/projects/patrimonies/home");
      }
    };
    getData();
  }, [query.id]);

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
    if (formErros) return;

    try {
      setLoading(true);
      await axios.put(
        `/api/data/patrimony/${query.id}`,
        {
          name,
          cod,
          note: note != "" ? note : null,
          details: details != "" ? details : null,
          url: url != "" ? url : null,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Patrimônio atualizado com sucesso");
      setLoading(false);
    } catch (er) {
      console.log(er);
      setLoading(false);
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {user == null ? (
        <Container>
          <Link href={`/projects/patrimonies/patrimony/${query.id}`}>
            Voltar
          </Link>
          <Label>Não é possivel atualizar o patrimônio</Label>
        </Container>
      ) : userId == user.id ? (
        <>
          <Container>
            <Link href={`/projects/patrimonies/patrimony/${query.id}`}>
              Voltar
            </Link>
            <Label>Atualizar patrimônio</Label>
            <Form onSubmit={handleSubmit}>
              <label htmlFor="image" className="image_label">
                {url != "" ? <img src={url} alt="Imagem" /> : <></>}
              </label>
              <label htmlFor="url">
                URL da imagem:
                <input
                  placeholder="URL"
                  type="text"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                  }}
                />
              </label>
              <label htmlFor="name">
                Nome:
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
                Código:
                <input
                  placeholder="Codigo do patrimônio"
                  type="text"
                  value={cod}
                  onChange={(e) => {
                    setCod(e.target.value);
                  }}
                />
              </label>

              <label htmlFor="note">
                Observações:
                <textarea
                  placeholder="Observações do patrimônio"
                  rows={4}
                  value={note}
                  onChange={(e) => {
                    setNote(e.target.value);
                  }}
                />
              </label>

              <label htmlFor="details">
                Detalhes:
                <textarea
                  placeholder="Detalhes do patrimônio"
                  rows={7}
                  value={details}
                  onChange={(e) => {
                    setDetails(e.target.value);
                  }}
                />
              </label>
              <button type="submit">Salvar dados</button>
            </Form>
          </Container>
          <div>space</div>
        </>
      ) : (
        <Container>
          <Link href={`/projects/patrimonies/patrimony/${query.id}`}>
            Voltar
          </Link>
          <Label>Não é possivel atualizar o patrimônio</Label>
        </Container>
      )}
    </>
  );
}
