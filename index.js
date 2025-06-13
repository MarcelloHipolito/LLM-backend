import express from 'express';
import dotenv from 'dotenv';
import { getLLMResponse } from './services/llmService.js';

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/perguntar', async (req, res) => {
  const { pergunta, contexto } = req.body;

  if (!pergunta || !contexto) {
    return res.status(400).json({ erro: 'Pergunta e contexto são obrigatórios.' });
  }

  try {
    const resposta = await getLLMResponse(pergunta, contexto);
    res.json({ resposta });
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: 'Erro ao consultar modelo LLM.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
