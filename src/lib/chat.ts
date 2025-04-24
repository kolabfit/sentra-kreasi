import { marked } from 'marked';

declare global {
  interface Window {
    sendMessage: () => void;
  }
}

function appendMessage(text: string, sender: string) {
  const chatMessages = document.getElementById('chat-messages');
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('fade-in', 'mb-1', 'p-2', 'rounded', 'max-w-full', 'break-words');

  if (sender === 'user') {
    msgDiv.classList.add('bg-green-100', 'text-right', 'ml-auto', 'dark:bg-green-800', 'dark:text-white');
    msgDiv.textContent = 'You: ' + text;
  } else {
    msgDiv.classList.add('bg-green-100', 'text-left', 'mr-auto', 'dark:bg-gray-700', 'dark:text-white');
    msgDiv.innerHTML = 'Chatbot: ' + marked.parse(text);
  }

  chatMessages?.appendChild(msgDiv);
  if (chatMessages) {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

export function initChat() {
  window.sendMessage = function () {
    const input = document.getElementById('message-input') as HTMLInputElement;
    const message = input.value.trim();
    if (!message) return;

    appendMessage(message, 'user');
    input.value = '';

    const headers = {
      'Content-Type': 'application/json',
      'X-API-KEY': import.meta.env.VITE_SASANA_API_KEY,
    };

    const data = {
      message,
      userId: crypto.randomUUID(),
      sessionId: crypto.randomUUID(),
      agentId: 'd3216ab6-e5e5-4039-a0c2-07c736dd7252',
    };

    fetch('https://sasana-be-chat-ts.sasana.ai/v3/chat', {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    })
      .then((res) => res.json().then((json) => ({ ok: res.ok, json })))
      .then(({ ok, json }) => {
        if (!ok) {
          appendMessage(`❗ Error: ${json.message}`, 'bot');
          appendMessage(`❗ Error Code: ${json.error}`, 'bot');
          appendMessage(`❗ Error Status: ${json.statusCode}`, 'bot');
          return;
        }

        const reply = json?.data?.content || 'No response received.';
        appendMessage(reply, 'bot');
      })
      .catch((err) => {
        console.error(err);
        appendMessage('🚫 Failed to connect. Please check your internet or try again later.', 'bot');
      });
  };
}
