import "./formulario-de-evento.estilos.css";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Input } from "../Input";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { ListaSupensa } from "../ListaSuspensa";
import { Botao } from "../Botao";

export function FormularioDeEvento({ temas }) {
  return (
    <>
      <form className="formulario-evento">
        <TituloFormulario>Preencha para criar um evento:</TituloFormulario>

        <div className="campos">
          <CampoDeFormulario>
            <Label htmlFor="nome">Qual o nome do evento?</Label>
            <Input
              type="text"
              id="nome"
              placeholder="Summer dev hits"
              name="nomeEvento"
            />
          </CampoDeFormulario>

          <CampoDeFormulario>
            <Label htmlFor="data">Data do evento</Label>
            <Input
              type="date"
              id="data"
              placeholder="XX/XX/XXXX"
              name="dataEvento"
            />
          </CampoDeFormulario>

          <CampoDeFormulario>
            <Label htmlFor="tema">Tema do evento</Label>
            <ListaSupensa itens={ temas } id="lista-suspensa" name="lista-suspensa"></ListaSupensa>
          </CampoDeFormulario>
        </div>

        <div className="container-botao">
          <Botao>
            Criar evento
          </Botao>
        </div>
      </form>
    </>
  );
}
