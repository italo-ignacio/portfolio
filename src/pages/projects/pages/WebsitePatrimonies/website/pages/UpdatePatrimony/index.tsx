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

export default function UpdatePatrimony() {
  const router = useRouter();
  const { query } = useRouter();
  const { token } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [cod, setCod] = useState("");
  const [note, setNote] = useState("");
  const [details, setDetails] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/patrimony/${query.id}`);
        const patrimony = response.data;
        setName(patrimony.name);
        setCod(patrimony.cod);
        setNote(patrimony.note);
        setDetails(patrimony.details);
        setUrl(patrimony.url);
        setLoading(false);
      } catch (er) {
        toast.error("Patrimônio não encontrado");
        router.push("/projects/patrimonies/home");
        setLoading(false);
      }
    };
    getData();
  }, [query.id, router]);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErros = false;
    if (name.length < 2 || name.length > 255) {
      formErros = true;
      toast.error("Nome deve ter entre 2 e 255 caracteres");
    }
    if (formErros) return;

    try {
      setLoading(true);
      await axios.put(
        `/patrimony/${query.id}`,
        {
          name,
          cod,
          note,
          details,
          url,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Patrimônio atualizado com sucesso");
      setLoading(false);
    } catch (er) {
      switch (er.response.data.msg) {
        case "Token expired or invalid":
          toast.error("Permissão negada");
          break;
        case "Permission required":
          toast.error("Permissão negada");
          break;
        case "Code already exists":
          toast.error("Código já existe");
          break;
        default:
          console.log(er.response.data);
          toast.error("Erro ao atualizar");
          break;
      }

      setLoading(false);
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Container>
        <Link href={`/projects/patrimonies/patrimony/${query.id}`}>Voltar</Link>
        <Label>Atualizar patrimônio</Label>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="image" className="image_label">
            {url != "" ? (
              <img src={url} alt="Imagem" />
            ) : (
              <Image
                src="/projects/patrimonies/not_found.jpg"
                width={400}
                height={400}
              />
            )}
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
  );
}
