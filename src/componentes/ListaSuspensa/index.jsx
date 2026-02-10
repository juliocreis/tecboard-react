import './lista-suspensa.estilos.css'

export function ListaSupensa(props) {
    return (
        <>
        <select { ...props }>\
            <option value="notInformed">Selecione uma opção</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Full Stack</option>
        </select>
        </>
    )
}