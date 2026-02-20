# 🚀 Tecboard Community

Projeto desenvolvido com **Vite + React**, simulando uma plataforma de comunidade para divulgação de eventos por tema (Front-end, Back-end, DevOps, IA, Data Science, Cloud, etc).

## Acesse a página por meio desse link:
🔗 https://tecboard-react-rho.vercel.app/

O layout da aplicação foi baseado no Figma:
🔗 https://www.figma.com/design/a77BjjUnHWvxdNpXS08rAi/Node--React-e-Vite-%7C-Tecboard--Community-?node-id=0-1&p=f&t=PIQbDDGHL2aUQTRz-0

---

## 🛠️ Tecnologias Utilizadas

- ⚛️ React
- ⚡ Vite
- 🎨 CSS puro
- 🧠 Hooks (useState)
- 📦 JavaScript moderno (ES6+)

---

## 📚 Conceitos Aplicados

Este projeto foi desenvolvido com foco em reforçar conceitos fundamentais do React.

---

### 🔹 Componentização

A aplicação foi dividida em múltiplos componentes organizados em pastas separadas, mantendo a estrutura modular e organizada:

```
src/
├── componentes/
│   ├── Banner/
│   ├── CardEvento/
│   ├── CampoDeFormulario/
│   ├── FormularioDeEvento/
│   ├── Input/
│   ├── Label/
│   ├── ListaSuspensa/
│   ├── Tema/
│   ├── TituloFormulario/
│   ├── App.jsx
│   └── main.jsx
```

Cada componente possui sua própria responsabilidade, facilitando:

- Reutilização  
- Manutenção  
- Escalabilidade  
- Separação de responsabilidades  

---

### 🔹 Estado com useState

O estado principal da aplicação é o array de `eventos`:

```js
const [eventos, setEventos] = useState([...]);
```

A função `adicionarEvento` adiciona um novo evento ao estado utilizando o operador spread:

```js
setEventos([...eventos, evento]);
```

Isso garante imutabilidade e re-renderização correta da interface.

---

### 🔹 Renderização Condicional

Foi utilizada renderização condicional para exibir apenas os temas que possuem eventos cadastrados:

```js
if (!eventos.some(evento => evento.tema.id == tema.id)) {
  return null;
}
```

Aqui foi utilizado:

- `some()` → verifica se existe ao menos um evento no tema  
- `return null` → impede a renderização do tema vazio  

---

### 🔹 Manipulação de Arrays

Foram utilizados métodos importantes do JavaScript:

- `map()` → renderizar listas  
- `filter()` → filtrar eventos por tema  
- `some()` → verificar existência de eventos  

Exemplo:

```js
eventos
  .filter(evento => evento.tema.id == tema.id)
  .map((evento, index) => (
    <CardEvento evento={evento} key={index} />
  ))
```

---

## 🎨 Estilização

Toda a estilização foi feita utilizando **CSS puro**, sem bibliotecas externas.

- Estrutura organizada por componentes  
- Layout inspirado fielmente no Figma  
- Uso de classes específicas e organização modular  

---

## 📌 Funcionalidades

✔️ Cadastro de novos eventos  
✔️ Organização por temas  
✔️ Renderização dinâmica  
✔️ Exibição apenas de temas com eventos  
✔️ Layout baseado no design do Figma  

---

## 👨‍💻 Autor

Desenvolvido por **Júlio César Carvalho dos Reis**  
Estudante de Ciência da Computação 🚀