import { CampoDeFormulario } from "../CampoDeFormulario";
import { Input } from "../Input";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";

export function FormularioDeEvento() {
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