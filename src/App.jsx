import "./App.css";

// No React, componentes são funções

function TituloFormulario(props) {
  return (
    <>
      <h2>{props.children}</h2>
    </>
  );
}

function CampoDeFormulario({ children }) {
  return (
    <>
      <fieldset>{children}</fieldset>
    </>
  );
}

function Label({ children, htmlFor }) {
  return (
    <>
      <label htmlFor={htmlFor}>{children}</label>
    </>
  );
}

function Input(props) {
  return <input {...props} />;
}

function FormularioDeEvento() {
  return (
    <>
      <form className="formulario-evento">
        <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
        <CampoDeFormulario>
          <Label htmlFor="nome">Qual o nome do evento?</Label>
          <Input
            type="text"
            id="nome"
            placeholder="Summer dev hits"
            name="nomeEvento"
          />
        </CampoDeFormulario>
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
