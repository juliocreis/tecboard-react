import './lista-suspensa.estilos.css'

export function ListaSupensa( { itens, ...rest}) {
    return (
        <>
        <select {...rest} className='lista-suspensa' defaultValue="">\
            <option value="" disabled>Selecione uma opção</option>
            {itens.map(function (itens) {
                return (
                    <>
                    <option key={itens.id} value={itens.id}>{itens.nome}</option>
                    </>
                )
            })}
        </select>
        </>
    )
}