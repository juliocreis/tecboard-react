import './titulo-formulario.estilos.css'

export function TituloFormulario(props) {
  return (
    <>
      <h2>{props.children}</h2>
    </>
  );
}