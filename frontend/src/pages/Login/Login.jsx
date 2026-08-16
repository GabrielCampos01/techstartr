import { useRef, useState } from "react";
import "./Login.css";
import "../../styles/Auth.css";
import { loginComEmail } from "../../services/auth";
import panda from "../../assets/panda.png";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  const [coresInvertidas, setCoresInvertidas] = useState(false);

  const [arrastando, setArrastando] = useState(false);
  const [posicaoPanda, setPosicaoPanda] = useState({
    x: 0,
    y: 0,
  });

  const inicioArraste = useRef({
    x: 0,
    y: 0,
  });

  function iniciarArraste(event) {
    event.currentTarget.setPointerCapture(event.pointerId);

    inicioArraste.current = {
      x: event.clientX,
      y: event.clientY,
    };

    setArrastando(true);
  }

  function moverPanda(event) {
    if (!arrastando) {
      return;
    }

    setPosicaoPanda({
      x: event.clientX - inicioArraste.current.x,
      y: event.clientY - inicioArraste.current.y,
    });
  }

  function finalizarArraste(event) {
    if (!arrastando) {
      return;
    }

    event.currentTarget.releasePointerCapture(event.pointerId);

    setArrastando(false);

    setPosicaoPanda({
      x: 0,
      y: 0,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setErro("");
    setCarregando(true);

    try {
      await loginComEmail(email, senha);
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      setErro("Não foi possível realizar o login.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="auth-layout">
      <section className="auth-card">
        <div className="logomarca">
          <h1 className={coresInvertidas ? "cores-invertidas" : ""}>
            <span className="tech">Tech</span>
            <span className="start">Start</span>
          </h1>

          <div
            className={`panda-wrapper ${arrastando ? "arrastando" : ""}`}
            onPointerDown={iniciarArraste}
            onPointerMove={moverPanda}
            onPointerUp={finalizarArraste}
            onPointerCancel={finalizarArraste}
            style={{
              transform: `translate(${posicaoPanda.x}px, ${posicaoPanda.y}px)`,
              transition: arrastando ? "none" : "transform 0.3s ease",
            }}
          >
            <img
              src={panda}
              alt="Logo TechStart"
              draggable="false"
            />
          </div>

          <button
            type="button"
            className={`color-switch ${coresInvertidas ? "ativo" : ""}`}
            onClick={() => setCoresInvertidas(!coresInvertidas)}
            aria-label="Inverter cores da logomarca"
          >
            <span className="switch-knob"></span>
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="usuario">Usuário</label>

          <input
            type="email"
            id="usuario"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor="senha">Senha</label>

          <input
            type="password"
            id="senha"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />

          <button type="submit" disabled={carregando}>
            {carregando ? "Entrando..." : "Entrar"}
          </button>
        </form>

        {erro && <p className="feedback error">{erro}</p>}

        <div className="auth-links">
          <p>
            Esqueceu sua senha?{" "}
            <a href="#">Esqueci minha senha</a>
          </p>

          <p>
            Novo por aqui?{" "}
            <Link to="/cadastro">Faça seu cadastro</Link>
          </p>

          <p>
            Ou então:{" "}
            <a href="#">Entrar como convidado</a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Login;