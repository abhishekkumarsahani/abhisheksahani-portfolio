import { useEffect, useRef, useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [connected, setConnected] = useState(false);

  const socketRef = useRef(null);
  const chatEndRef = useRef(null);
  const hasConnectedOnce = useRef(false);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    socketRef.current = new WebSocket(
      "wss://localhost:7230/api/chat/connect"
    );

    socketRef.current.onopen = () => {
      setConnected(true);
      hasConnectedOnce.current = true;

      addMessage(
        "bot",
        "👋 Welcome to BEWELL! How can I help you today?"
      );
    };

    socketRef.current.onmessage = (event) => {
      addMessage("bot", event.data);
    };

    socketRef.current.onerror = () => {
      // ❗ Ignore errors before first successful connection
      if (!hasConnectedOnce.current) return;

      addMessage(
        "system",
        "⚠️ Connection error. Please try again."
      );
    };

    socketRef.current.onclose = () => {
      setConnected(false);

      // ❗ Ignore initial auto-close (React StrictMode)
      if (!hasConnectedOnce.current) return;

      addMessage(
        "system",
        "🔌 Disconnected from BEWELL server."
      );
    };

    return () => socketRef.current?.close();
  }, []);

  const addMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }]);
  };

  const sendMessage = () => {
    if (!input.trim() || !connected) return;

    socketRef.current.send(input);
    addMessage("user", input);
    setInput("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        BEWELL Chat Support
        <span style={styles.status}>
          {connected ? "🟢 Online" : "🔴 Offline"}
        </span>
      </div>

      <div style={styles.chatBox}>
        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              ...styles.message,
              alignSelf:
                msg.sender === "user"
                  ? "flex-end"
                  : "flex-start",
              background:
                msg.sender === "user"
                  ? "#2563eb"
                  : msg.sender === "system"
                  ? "#fde68a"
                  : "#e5e7eb",
              color:
                msg.sender === "user"
                  ? "#fff"
                  : msg.sender === "system"
                  ? "#92400e"
                  : "#111",
            }}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div style={styles.inputBox}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder={
            connected
              ? "Type your message..."
              : "Connecting to BEWELL..."
          }
          disabled={!connected}
          style={styles.input}
        />
        <button
          onClick={sendMessage}
          style={{
            ...styles.button,
            opacity: connected ? 1 : 0.5,
          }}
          disabled={!connected}
        >
          Send
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 420,
    height: "75vh",
    margin: "40px auto",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #ddd",
    borderRadius: 12,
    fontFamily: "Arial",
  },
  header: {
    padding: 14,
    background: "#2563eb",
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-between",
  },
  status: {
    fontSize: 12,
  },
  chatBox: {
    flex: 1,
    padding: 12,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    overflowY: "auto",
    background: "#f9fafb",
  },
  message: {
    maxWidth: "75%",
    padding: "10px 14px",
    borderRadius: 14,
    fontSize: 14,
  },
  inputBox: {
    display: "flex",
    padding: 10,
    borderTop: "1px solid #ddd",
    gap: 8,
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    border: "1px solid #ccc",
  },
  button: {
    padding: "0 16px",
    borderRadius: 8,
    border: "none",
    background: "#2563eb",
    color: "#fff",
    cursor: "pointer",
  },
};

export default ChatBot;
