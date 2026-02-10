import './campo-formulario.estilos.css'

export function CampoDeFormulario({ children }) {
  return (
    <>
      <fieldset>{children}</fieldset>
    </>
  );
}
