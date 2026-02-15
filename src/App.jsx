import "./App.css";
import { Banner } from "./componentes/Banner";
import { CardEvento } from "./componentes/CardEvento";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";
import { Tema } from "./componentes/Tema";

// No React, componentes são funções

function adicionarEvento(evento) {
  eventos.push(evento);
  console.log("Eventos =>", eventos);
}

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
      <FormularioDeEvento temas={ temas } aoSubmeter={adicionarEvento}/>

      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item}></Tema>
            {eventos.map(function(item, index){
              return (
                <CardEvento evento={item} key={index}></CardEvento>
              );
            })}
          </section>
        );
      })}

    </>
  );
}

export default App;
