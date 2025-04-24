export default function chatLogic() {
  return {
    open: false,
    message: '',
    messages: [],
    init() {
      // any init logic if needed
    },
    async send() {
      const text = this.message.trim();
      if (!text) return;

      this.messages.push({ id: crypto.randomUUID(), text, sender: 'user' });
      this.message = '';

      const headers = {
        'Content-Type': 'application/json',
        'X-API-KEY': import.meta.env.SASANA_API_KEY,
      };

      const data = {
        message: text,
        userId: crypto.randomUUID(),
        sessionId: crypto.randomUUID(),
        agentId: 'd3216ab6-e5e5-4039-a0c2-07c736dd7252',
      };

      try {
        const res = await fetch('https://sasana-be-chat-ts.sasana.ai/v3/chat', {
          method: 'POST',
          headers,
          body: JSON.stringify(data),
        });

        const json = await res.json();

        if (!res.ok) {
          this.messages.push({ id: crypto.randomUUID(), text: `❗ ${json.message}`, sender: 'bot' });
        } else {
          const reply = json?.data?.content || 'No response received.';
          this.messages.push({ id: crypto.randomUUID(), text: reply, sender: 'bot' });
        }
      } catch (err) {
        this.messages.push({ id: crypto.randomUUID(), text: '🚫 Gagal koneksi. Coba lagi nanti.', sender: 'bot' });
      }
    },
  };
}
