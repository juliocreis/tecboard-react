import "./formulario-de-evento.estilos.css";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Input } from "../Input";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { ListaSupensa } from "../ListaSuspensa";
import { Botao } from "../Botao";
import { Textarea } from "../Textarea";

export function FormularioDeEvento({ temas, aoSubmeter }) {

  function aoFormSubmetido(formData) {
    const evento = {
      capa: formData.get('capaEvento'),
      tema: temas.find(function (itens) {
        return itens.id == formData.get('lista-suspensa')
      }),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento'),
      texto: formData.get('descricaoEvento')
    };

    aoSubmeter(evento);
  }

  return (
    <>
      <form className="formulario-evento" action={aoFormSubmetido}> 
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
            <Label htmlFor="nome">Endereço da imagem de capa do evento</Label>
            <Input
              type="text"
              id="capa-evento"
              placeholder="https://..."
              name="capaEvento"
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
            <ListaSupensa
              itens={temas}
              id="lista-suspensa"
              name="lista-suspensa"
            ></ListaSupensa>
          </CampoDeFormulario>
          
          <CampoDeFormulario>
            <Label htmlFor="descricao">Descrição do evento</Label>
            <Textarea id="descricao" placeholder="Valorizando e impulsionando..." name="descricaoEvento">

            </Textarea>
          </CampoDeFormulario>
        </div>

        <div className="container-botao">
          <Botao>Criar evento</Botao>
        </div>
      </form>
    </>
  );
}
