import { APIKey } from "~/lib/chat";

document.addEventListener('DOMContentLoaded', () => {
  const chatMessages = document.getElementById('chat-messages');
  const messageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-button');
  const url = 'https://sasana-be-chat-ts.sasana.ai/v3/chat';

  function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('fade-in', 'mb-1', 'p-2', 'rounded', 'max-w-full', 'break-words');

    if (sender === 'user') {
      msgDiv.classList.add('bg-green-100', 'text-right', 'ml-auto', 'dark:bg-green-800', 'dark:text-white');
      msgDiv.textContent = 'You: ' + text;
    } else {
      msgDiv.classList.add('bg-green-100', 'text-left', 'mr-auto', 'dark:bg-gray-700', 'dark:text-white');
      msgDiv.innerHTML = 'Chatbot: ' + text;
    }

    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  async function sendMessage() {
    const message = messageInput.value.trim();
    if (!message) return;

    appendMessage(message, 'user');
    messageInput.value = '';

    const data = {
      message,
      userId: crypto.randomUUID(),
      sessionId: crypto.randomUUID(),
      agentId: 'd3216ab6-e5e5-4039-a0c2-07c736dd7252',
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': APIKey,
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();
      const reply = json?.data?.content || 'No response received.';
      appendMessage(reply, 'bot');
    } catch (err) {
      appendMessage('🚫 Failed to connect. Please try again later.', 'bot');
    }
  }

  sendButton.addEventListener('click', sendMessage);
});
