import { useState } from "react";
import "./App.css";
import { Banner } from "./componentes/Banner";
import { CardEvento } from "./componentes/CardEvento";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";
import { Tema } from "./componentes/Tema";

// No React, componentes são funções

function App() {
  const temas = [
    {
      id: 1,
      nome: "front-end",
    },
    {
      id: 2,
      nome: "back-end",
    },
    {
      id: 3,
      nome: "devops",
    },
    {
      id: 4,
      nome: "inteligência artificial",
    },
    {
      id: 5,
      nome: "data science",
    },
    {
      id: 6,
      nome: "cloud",
    },
  ];

  const [eventos, setEventos] = useState([
    {
      capa: "./src/assets/evento-mulheres-no-front.png",
      tema: temas[0],
      data: new Date(),
      titulo: "Mulheres no Front",
      texto:
        "Valorizando e impulsionando a participação feminina no desenvolvimento front-end.",
    },
  ]);

  function adicionarEvento(evento) {
    setEventos([...eventos, evento]);
  }

  return (
    <>
      <main>
        <header>
          <img src="/logo.png" alt="Logo do Tecboard" />
        </header>
        <Banner></Banner>
      </main>
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento} />

      <section className="container">
        {temas.map(function (item) {
          return (
            <section key={item.id}>
              <Tema tema={item}></Tema>
              <div className="eventos">
                {eventos.map(function (item, index) {
                  return <CardEvento evento={item} key={index}></CardEvento>;
                })}
              </div>
            </section>
          );
        })}
      </section>
    </>
  );
}

export default App;
