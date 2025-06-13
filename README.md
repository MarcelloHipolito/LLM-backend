# 🧠 Backend LLM com OpenRouter

Este backend em Node.js fornece uma rota de API para realizar consultas a um modelo LLM (Large Language Model) via [OpenRouter.ai](https://openrouter.ai/), retornando respostas com base em um contexto fornecido.

## 🚀 Como rodar

### 1. Instale as dependências

```bash
npm install
```

### 2. Configure sua chave de API do OpenRouter

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
OPENROUTER_API_KEY=sk-or-xxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Você pode gerar uma chave gratuita em: [https://openrouter.ai/keys](https://openrouter.ai/keys)

### 3. Inicie o servidor

```bash
node index.js
```

O backend será executado em:  
📡 `http://localhost:3000`

## 🧪 Testando a API

Você pode fazer um POST em:

```
POST /api/perguntar
```

Com o seguinte corpo JSON:

```json
{
  "contexto": "jurídico",
  "pergunta": "O que é habeas corpus?"
}
```

A resposta será semelhante a:

```json
{
  "resposta": "Habeas corpus é uma ação constitucional..."
}
```

## 📚 Tecnologias utilizadas

- Node.js
- Express
- Axios
- dotenv
- OpenRouter API
