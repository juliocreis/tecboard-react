import "./App.css";
import { Banner } from "./componentes/Banner";
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
    nome: "FRONT-END",
  },
  {
    id: 4,
    nome: "DEVOPS",
  },
  {
    id: 5,
    nome: "INTELIGÊNCIA ARTIFICIAL",
  },
  {
    id: 6,
    nome: "CLOUD",
  },
];

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
          </section>
        );
      })}

      {/*       <section>
        <Tema tema={temas[0]}></Tema>
      </section>
      <section>
        <Tema tema={temas[1]}></Tema>
      </section>
      <section>
        <Tema tema={temas[2]}></Tema>
      </section>
      <section>
        <Tema tema={temas[3]}></Tema>
      </section>
      <section>
        <Tema tema={temas[4]}></Tema>
      </section>
      <section>
        <Tema tema={temas[5]}></Tema>
      </section> */}
    </>
  );
}

export default App;
