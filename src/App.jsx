import "./App.css";
import { Banner } from "./componentes/Banner";
import { CardEvento } from "./componentes/CardEvento";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";
import { Tema } from "./componentes/Tema";

// No React, componentes são funções

const temas = [
  {
    id: 1,
    nome: "FRONT-END",
  },
  {
    id: 2,
    nome: "BACK-END",
  },
  {
    id: 3,
    nome: "DEVOPS",
  },
  {
    id: 4,
    nome: "INTELIGÊNCIA ARTIFICIAL",
  },
  {
    id: 5,
    nome: "DATA SCIENCE",
  },
  {
    id: 6,
    nome: "CLOUD",
  },
];

const eventos = [
  {
    capa: './src/assets/evento-mulheres-no-front.png',
    tema: temas[0],
    data: new Date(),
    titulo: "Mulheres no Front",
    texto: "Valorizando e impulsionando a participação feminina no desenvolvimento front-end."
  }
]

function App() {
  return (
    <>
      <main>
        <header>
          <img src="/logo.png" alt="Logo do Tecboard" />
        </header>
        <Banner></Banner>
      </main>
      <FormularioDeEvento />

      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item}></Tema>
            <CardEvento evento={eventos[0]}></CardEvento>
          </section>
        );
      })}

    </>
  );
}

export default App;
