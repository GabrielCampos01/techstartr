import { useState } from "react";
import { FaJava, FaJs, FaPython } from "react-icons/fa";
import { SiSharp } from "react-icons/si";

import "./LanguageSelect.css";

const linguagens = [
  {
    nome: "Java",
    icone: FaJava,
    cor: "#f89820",
    exemplo: (
      <>
        <span className="code-class">System</span>
        <span className="code-default">.</span>
        <span className="code-property">out</span>
        <span className="code-default">.</span>
        <span className="code-function">println</span>
        <span className="code-default">(</span>
        <span className="code-string">"Olá, mundo!"</span>
        <span className="code-default">);</span>
      </>
    ),
  },
  {
    nome: "JavaScript",
    icone: FaJs,
    cor: "#f7df1e",
    exemplo: (
      <>
        <span className="code-object">console</span>
        <span className="code-default">.</span>
        <span className="code-function">log</span>
        <span className="code-default">(</span>
        <span className="code-string">"Olá, mundo!"</span>
        <span className="code-default">);</span>
      </>
    ),
  },
  {
    nome: "Python",
    icone: FaPython,
    cor: "#3776ab",
    exemplo: (
      <>
        <span className="code-function">print</span>
        <span className="code-default">(</span>
        <span className="code-string">"Olá, mundo!"</span>
        <span className="code-default">)</span>
      </>
    ),
  },
  {
    nome: "C#",
    icone: SiSharp,
    cor: "#512bd4",
    exemplo: (
      <>
        <span className="code-class">Console</span>
        <span className="code-default">.</span>
        <span className="code-function">WriteLine</span>
        <span className="code-default">(</span>
        <span className="code-string">"Olá, mundo!"</span>
        <span className="code-default">);</span>
      </>
    ),
  },
];

function LanguageSelect() {
  const [aberto, setAberto] = useState(false);
  const [linguagemSelecionada, setLinguagemSelecionada] = useState(
    linguagens[0]
  );

  return (
    <div className="language-select">
      <button
        type="button"
        className="language-select-trigger"
        onClick={() => setAberto(!aberto)}
      >
        <span>{linguagemSelecionada.nome}</span>
      </button>

      {aberto && (
        <div className="language-select-options">
          {linguagens.map((linguagem) => {
            const Icone = linguagem.icone;

            return (
              <button
                type="button"
                className="language-select-option"
                key={linguagem.nome}
                onClick={() => {
                  setLinguagemSelecionada(linguagem);
                  setAberto(false);
                }}
              >
                <span
                    className="language-name"
                    style={{ color: linguagem.cor }}
                    >
                    {linguagem.nome}
                </span>

                <code className="language-example">
                  {linguagem.exemplo}
                </code>

                <Icone
                  className="language-icon"
                  style={{ color: linguagem.cor }}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default LanguageSelect;