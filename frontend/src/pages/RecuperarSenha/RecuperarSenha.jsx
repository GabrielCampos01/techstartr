import "../../styles/Auth.css";
import "./RecuperarSenha.css";
import { Link, useNavigate } from "react-router-dom";

function RecuperarSenha() {
  const navigate = useNavigate();

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

        <p className="section-label">Recuperação</p>

        <h1>Esqueceu sua senha?</h1>

        <p className="intro">
          Informe o e-mail cadastrado para receber um link de redefinição e
          voltar para a plataforma com segurança.
        </p>

        <form className="register-form">
          <label>
            E-mail cadastrado
            <input
              type="email"
              id="email"
              placeholder="seu@email.com"
              required
            />
          </label>

          <button type="submit" className="primary-button">
            Enviar link de recuperação
          </button>
        </form>

        <p className="feedback" aria-live="polite"></p>

        <p className="switch-auth">
          Lembrou sua senha? <Link to="/">Voltar ao login</Link>
        </p>
      </section>
    </main>
  );
}

export default RecuperarSenha;