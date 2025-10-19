# 🧩 Projeto FSD + Redux

Este projeto foi criado com o objetivo de **aprender e praticar a arquitetura FSD (Feature-Sliced Design)** integrada ao **Redux** para gerenciamento de estado global.

---

## 🚀 Objetivo

O projeto busca explorar:
- Como estruturar um front-end moderno seguindo o **Feature-Sliced Design (FSD)**;
- Como organizar **features independentes e reutilizáveis**;
- Como gerenciar estado global e assíncrono usando **Redux Toolkit**;
- Boas práticas de **escalabilidade e manutenção de código**.

---

## 🏗️ Estrutura de pastas (FSD)

A arquitetura FSD organiza o código em **camadas** e **fatias (slices)**.  
Cada feature é **isolada e independente**, o que facilita testes e evolução do projeto.

```bash
src/
│
├── app/               # Inicialização da aplicação (store, router, providers, etc.)
│   ├── store/         # Configuração do Redux
│   ├── providers/     # Contextos globais
│   └── index.tsx
│
├── pages/             # Páginas da aplicação (rotas)
│   └── Home/
│       ├── ui/        # Componentes visuais da página
│       └── index.ts
│
├── widgets/           # Blocos grandes e reutilizáveis (Navbar, Sidebar, etc.)
│
├── features/          # Funcionalidades específicas (Login, TodoList, etc.)
│   └── todo/
│       ├── model/     # Redux slice, thunks, seletores
│       ├── ui/        # Componentes visuais da feature
│       ├── lib/       # Funções auxiliares
│       └── index.ts
│
├── entities/          # Modelos de domínio (User, Product, etc.)
│
├── shared/            # Código compartilhado entre features
│   ├── ui/            # Botões, inputs, componentes genéricos
│   ├── lib/           # Helpers e utilitários
│   ├── config/        # Configurações globais
│   └── api/           # Integração com APIs
│
└── index.tsx
```

---

## ⚙️ Tecnologias principais

| Categoria | Tecnologia |
|------------|-------------|
| Framework UI | React |
| Gerenciamento de estado | Redux Toolkit |
| Linguagem | TypeScript |
| Arquitetura | Feature-Sliced Design |
| Estilização | CSS Modules / Styled Components / Tailwind (opcional) |
| Bundler | Vite ou Create React App |

---

## 🧠 Conceitos-chave

### 🔸 FSD (Feature-Sliced Design)
O **FSD** divide o app em **camadas horizontais** (shared → entities → features → widgets → pages → app)  
e em **fatias verticais** (cada feature isolada).  
Isso facilita **reutilização**, **isolamento** e **previsibilidade** do código.

### 🔸 Redux Toolkit
Usado para:
- Armazenar estado global;
- Organizar reducers e actions por feature;
- Fazer requisições assíncronas com `createAsyncThunk`.

Exemplo:
```ts
// features/todo/model/todoSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Todo {
  id: number
  text: string
  done: boolean
}

interface TodoState {
  items: Todo[]
}

const initialState: TodoState = { items: [] }

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.items.push({ id: Date.now(), text: action.payload, done: false })
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.items.find(t => t.id === action.payload)
      if (todo) todo.done = !todo.done
    },
  },
})

export const { addTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer
```

---

## 🧪 Como rodar o projeto

```bash
# 1. Instalar dependências
npm install

# 2. Rodar o ambiente de desenvolvimento
npm run dev

# 3. Build de produção
npm run build
```

---

## 🧭 Estrutura mental

```
[app]      -> inicializa tudo
  ↓
[pages]    -> define as rotas
  ↓
[widgets]  -> monta blocos grandes de UI
  ↓
[features] -> implementa ações específicas (login, todo, etc.)
  ↓
[entities] -> modela dados do domínio
  ↓
[shared]   -> código genérico (botões, utils, hooks)
```

---

## 🧩 Referências

- [Feature-Sliced Design Docs](https://feature-sliced.design/)
- [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- [React Architecture Patterns](https://react.dev/learn/thinking-in-react)

---

## 📘 Status
📅 Em aprendizado — objetivo: dominar FSD + Redux para estruturar aplicações React de forma profissional.
