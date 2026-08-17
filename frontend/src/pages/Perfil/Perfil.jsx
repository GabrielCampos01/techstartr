import { useEffect, useState } from "react";

import { useAuth } from "../../contexts/AuthContext";
import {
  atualizarPerfilUsuario,
  buscarPerfilUsuario,
} from "../../services/users";

import "./Perfil.css";

function Perfil() {
  const { usuario } = useAuth();

  const [perfil, setPerfil] = useState({
    name: "",
    nick: "",
    github: "",
    language: "Java",
    bio: "",
  });

  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    async function carregarPerfil() {
      if (!usuario) {
        return;
      }

      try {
        const dados = await buscarPerfilUsuario(usuario.uid);

        if (dados) {
          setPerfil({
            name: dados.name || "",
            nick: dados.nick || "",
            github: dados.github || "",
            language: dados.language || "Java",
            bio: dados.bio || "",
          });
        }
      } catch (error) {
        console.error("Erro ao carregar perfil:", error);
        setFeedback("Não foi possível carregar seu perfil.");
      } finally {
        setCarregando(false);
      }
    }

    carregarPerfil();
  }, [usuario]);

  function atualizarCampo(event) {
    const { name, value } = event.target;

    setPerfil((estadoAtual) => ({
      ...estadoAtual,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!usuario) {
      return;
    }

    try {
      setSalvando(true);
      setFeedback("");

      await atualizarPerfilUsuario(usuario.uid, perfil);

      setFeedback("Perfil atualizado com sucesso.");
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
      setFeedback("Não foi possível atualizar seu perfil.");
    } finally {
      setSalvando(false);
    }
  }

  if (carregando) {
    return <p>Carregando perfil...</p>;
  }

  return (
    <section className="profile-page">
      <div className="profile-header">
        <p className="profile-label">Perfil</p>
        <h1>Meu perfil</h1>
      </div>

      <form className="profile-card" onSubmit={handleSubmit}>
        <div className="profile-grid">
          <label>
            Nome
            <input
              type="text"
              name="name"
              value={perfil.name}
              onChange={atualizarCampo}
            />
          </label>

          <label>
            Nick
            <input
              type="text"
              name="nick"
              value={perfil.nick}
              onChange={atualizarCampo}
            />
          </label>

          <label>
            GitHub
            <input
              type="url"
              name="github"
              value={perfil.github}
              onChange={atualizarCampo}
            />
          </label>

          <label>
            Linguagem
            <select
              name="language"
              value={perfil.language}
              onChange={atualizarCampo}
            >
              <option value="Java">Java</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="C#">C#</option>
            </select>
          </label>
        </div>

        <label>
          Bio
          <textarea
            name="bio"
            rows="5"
            value={perfil.bio}
            onChange={atualizarCampo}
          />
        </label>

        <button type="submit" disabled={salvando}>
          {salvando ? "Salvando..." : "Salvar perfil"}
        </button>

        {feedback && <p className="profile-feedback">{feedback}</p>}
      </form>
    </section>
  );
}

export default Perfil;