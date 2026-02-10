import "./App.css";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";

// No React, componentes são funções

function App() {
  return (
    <>
      <main>
        <header>
          <img src="/logo.png" alt="Logo do Tecboard" />
        </header>
        <section>
          <img
            src="/banner.png"
            alt="Mulher se divertindo com óculos de realidade virtual"
          />
        </section>
      </main>
      <FormularioDeEvento />
    </>
  );
}

export default App;
