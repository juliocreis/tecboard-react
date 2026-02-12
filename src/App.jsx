import "./App.css";
import { Banner } from "./componentes/Banner";
import { FormularioDeEvento } from "./componentes/FormularioDeEvento";

// No React, componentes são funções

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
    </>
  );
}

export default App;
