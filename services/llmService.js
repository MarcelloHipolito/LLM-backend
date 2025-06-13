import axios from 'axios';

export async function getLLMResponse(pergunta, contexto) {
  const promptFinal = `Contexto: ${contexto}\nUsuário: ${pergunta}\nAssistente:`;

  const response = await axios.post(
    'https://openrouter.ai/api/v1/chat/completions',
    {
      model: 'mistralai/mistral-7b-instruct',
      messages: [
        { role: 'system', content: `Você é um assistente especializado no seguinte contexto: ${contexto}` },
        { role: 'user', content: pergunta }
      ]
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
      }
    }
  );

  return response.data.choices[0].message.content;
}
