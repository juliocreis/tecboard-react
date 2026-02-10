import "./formulario-de-evento.estilos.css";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Input } from "../Input";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";

export function FormularioDeEvento() {
  return (
    <>
      <form className="formulario-evento">
        <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
        <div className="campo">
          <CampoDeFormulario>
            <Label htmlFor="nome">Qual o nome do evento?</Label>
            <Input
              type="text"
              id="nome"
              placeholder="Summer dev hits"
              name="nomeEvento"
            />
          </CampoDeFormulario>
        </div>

        <div className="campo">
          <CampoDeFormulario>
            <Label htmlFor="nome">Data do evento</Label>
            <Input
              type="date"
              id="data"
              placeholder="XX/XX/XXXX"
              name="dataEvento"
            />
          </CampoDeFormulario>
        </div>
      </form>
    </>
  );
}
