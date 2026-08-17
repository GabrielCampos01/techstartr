import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../../styles/Auth.css";
import "./Cadastro.css";

import LanguageSelect from "../../components/LanguageSelect/LanguageSelect";

import { cadastrarUsuario } from "../../services/auth";
import { criarPerfilUsuario } from "../../services/users";

function Cadastro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    nick: "",
    email: "",
    language: "Java",
    password: "",
    confirmPassword: "",
    github: "",
    bio: "",
  });

  const [feedback, setFeedback] = useState("");
  const [enviando, setEnviando] = useState(false);

  function atualizarCampo(event) {
    const { name, value } = event.target;

    setForm((estadoAtual) => ({
      ...estadoAtual,
      [name]: value,
    }));
  }

  function atualizarLinguagem(event) {
    setForm((estadoAtual) => ({
      ...estadoAtual,
      language: event.target.value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setFeedback("");

    if (form.password !== form.confirmPassword) {
      setFeedback("As senhas não coincidem.");
      return;
    }

    try {
      setEnviando(true);

      const usuario = await cadastrarUsuario(
        form.email,
        form.password,
        form.name
      );

      await criarPerfilUsuario(usuario.uid, {
        name: form.name,
        nick: form.nick,
        email: form.email,
        language: form.language,
        github: form.github,
        bio: form.bio,
      });

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setFeedback("Não foi possível criar sua conta.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <main className="register-layout">
      <section className="register-card">
        <div className="header-row">
          <button
            type="button"
            className="back-button"
            onClick={() => navigate(-1)}
          >
            Voltar
          </button>
        </div>

        <p className="section-label">Cadastro</p>

        <h1>Crie sua conta</h1>

        <p className="intro">
          Campos marcados com * são obrigatórios para entrar na plataforma.
        </p>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="grid">
            <label>
              Nome completo *
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={atualizarCampo}
                required
              />
            </label>

            <label>
              Nick *
              <input
                type="text"
                name="nick"
                value={form.nick}
                onChange={atualizarCampo}
                required
              />
            </label>
          </div>

          <div className="grid">
            <label>
              E-mail *
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={atualizarCampo}
                required
              />
            </label>

            <label>
              Linguagem preferida
              <LanguageSelect
                value={form.language}
                onChange={atualizarLinguagem}
              />
            </label>
          </div>

          <div className="grid">
            <label>
              Senha *
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={atualizarCampo}
                required
              />
            </label>

            <label>
              Confirmar senha *
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={atualizarCampo}
                required
              />
            </label>
          </div>

          <label>
            Link do GitHub
            <input
              type="url"
              name="github"
              value={form.github}
              onChange={atualizarCampo}
              placeholder="https://github.com/seusuario"
            />
          </label>

          <label>
            Bio
            <textarea
              name="bio"
              rows="4"
              value={form.bio}
              onChange={atualizarCampo}
              placeholder="Conte um pouco sobre você."
            />
          </label>

          <button
            type="submit"
            className="primary-button"
            disabled={enviando}
          >
            {enviando ? "Cadastrando..." : "Cadastrar"}
          </button>
        </form>

        <p className="feedback" aria-live="polite">
          {feedback}
        </p>

        <p className="switch-auth">
          Já possui conta? <Link to="/">Login</Link>
        </p>
      </section>
    </main>
  );
}

export default Cadastro;