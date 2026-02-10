import "./App.css";

// No React, componentes são funções

function FormularioDeEvento() {
  return (
    <>
      <form className="formulario-evento">
        <h2>Preencha para criar um evento:</h2>
        <fieldset>
          <label htmlFor="nome">Qual o nome do evento?</label>
          <input type="text" id="nome" placeholder="Summer dev hits"/>
        </fieldset>
      </form>
    </>
  );
}

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
