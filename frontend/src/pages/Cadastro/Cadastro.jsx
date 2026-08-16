import "../../styles/Auth.css";
import "./Cadastro.css";
import LanguageSelect from "../../components/LanguageSelect/LanguageSelect";
import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <main className="register-layout">
      <section className="register-card">
        <div className="header-row">
          <Link className="back-link" to="/">
            Voltar
          </Link>

          <a className="login-link" href="#">
            Login
          </a>
        </div>

        <p className="section-label">Cadastro</p>

        <h1>Crie sua conta</h1>

        <p className="intro">
          Campos marcados com * são obrigatórios para entrar na plataforma.
        </p>

        <form className="register-form">
          <div className="grid">
            <label>
              Nome completo *
              <input type="text" id="name" required />
            </label>

            <label>
              Nick *
              <input type="text" id="nick" required />
            </label>
          </div>

          <div className="grid">
            <label>
              E-mail *
              <input type="email" id="email" required />
            </label>

            <label>
                Linguagem preferida
                <LanguageSelect />
            </label>
          </div>

          <div className="grid">
            <label>
              Senha *
              <input type="password" id="password" required />
            </label>

            <label>
              Confirmar senha *
              <input type="password" id="confirm-password" required />
            </label>
          </div>

          <label>
            Link do GitHub
            <input
              type="url"
              id="github"
              placeholder="https://github.com/seusuario"
            />
          </label>

          <label>
            Bio
            <textarea
              id="bio"
              rows="4"
              placeholder="Conte um pouco sobre você."
            />
          </label>

          <button type="submit" className="primary-button">
            Cadastrar
          </button>
        </form>

        <p className="feedback" aria-live="polite"></p>

        <p className="switch-auth">
          Já possui conta? <a href="#">Login</a>
        </p>
      </section>
    </main>
  );
}

export default Cadastro;