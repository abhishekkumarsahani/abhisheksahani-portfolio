import { useEffect, useRef, useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const socketRef = useRef(null);
  const chatEndRef = useRef(null);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initialize WebSocket connection
  useEffect(() => {
    // IMPORTANT: use wss because backend is https
    socketRef.current = new WebSocket(
      "wss://localhost:7230/api/chat/connect"
    );

    socketRef.current.onopen = () => {
      console.log("WebSocket connected");
      setIsConnected(true);
      // Send welcome message
      setTimeout(() => {
        addMessage("bot", "👋 Hello! I'm your ShopAI assistant from TechStyle Store. How can I help you today? You can ask me about products, shipping, returns, or anything else!");
      }, 500);
    };

    socketRef.current.onmessage = (event) => {
      setIsTyping(false);
      addMessage("bot", event.data);
    };

    socketRef.current.onerror = (err) => {
      console.error("WebSocket error", err);
      addMessage("system", "⚠️ Connection error. Please refresh the page.");
    };

    socketRef.current.onclose = () => {
      console.log("WebSocket disconnected");
      setIsConnected(false);
      addMessage("system", "🔌 Disconnected from server.");
    };

    // Cleanup on unmount
    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  const addMessage = (sender, text) => {
    setMessages((prev) => [
      ...prev,
      { 
        sender, 
        text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      },
    ]);
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    // Send to WebSocket
    socketRef.current.send(input);

    // Add user message to UI
    addMessage("user", input);
    
    // Show typing indicator
    setIsTyping(true);
    
    // Clear input
    setInput("");

    // Auto-suggestions based on message
    if (input.toLowerCase().includes("product") || input.toLowerCase().includes("buy")) {
      setTimeout(() => {
        showProductSuggestions();
      }, 1000);
    }
  };

  const showProductSuggestions = () => {
    const suggestions = [
      "Looking for headphones? 🎧",
      "Need fitness gear? 🏃‍♂️",
      "Interested in smart home devices? 💡"
    ];
    
    // Add suggestion after a delay
    setTimeout(() => {
      addMessage("bot", "💡 *Quick suggestions*: " + suggestions[Math.floor(Math.random() * suggestions.length)]);
    }, 1500);
  };

  const quickSuggestions = [
    { text: "What products do you have?", emoji: "🛍️" },
    { text: "Tell me about shipping", emoji: "🚚" },
    { text: "What's your return policy?", emoji: "↩️" },
    { text: "Show me electronics", emoji: "📱" },
  ];

  const handleQuickSuggestion = (suggestion) => {
    setInput(suggestion);
    setTimeout(() => {
      sendMessage();
    }, 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.storeInfo}>
          <div style={styles.storeLogo}>🛒</div>
          <div>
            <h2 style={styles.storeName}>TechStyle Store AI Assistant</h2>
            <div style={styles.status}>
              <div style={{
                ...styles.statusDot,
                backgroundColor: isConnected ? "#10b981" : "#ef4444"
              }} />
              <span>{isConnected ? "Online" : "Offline"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div style={styles.chatBox}>
        {messages.length === 0 ? (
          <div style={styles.welcomeScreen}>
            <div style={styles.welcomeIcon}>🤖</div>
            <h3>Welcome to TechStyle Store!</h3>
            <p>Ask me about products, pricing, shipping, or returns.</p>
            <div style={styles.quickSuggestions}>
              {quickSuggestions.map((suggestion, index) => (
                <button
                  key={index}
                  style={styles.quickButton}
                  onClick={() => handleQuickSuggestion(suggestion.text)}
                >
                  {suggestion.emoji} {suggestion.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  ...styles.messageContainer,
                  justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    ...styles.message,
                    backgroundColor: msg.sender === "user" ? "#4f46e5" : 
                                    msg.sender === "system" ? "#fef3c7" : "#f3f4f6",
                    color: msg.sender === "user" ? "#fff" : 
                          msg.sender === "system" ? "#92400e" : "#1f2937",
                    borderRadius: msg.sender === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                  }}
                >
                  {msg.sender === "bot" && (
                    <div style={styles.botIndicator}>🤖 AI</div>
                  )}
                  <div style={styles.messageText}>{msg.text}</div>
                  <div style={styles.timestamp}>{msg.timestamp}</div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div style={styles.typingIndicator}>
                <div style={styles.typingDots}>
                  <div style={styles.dot}></div>
                  <div style={styles.dot}></div>
                  <div style={styles.dot}></div>
                </div>
                <span>AI is typing...</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </>
        )}
      </div>

      {/* Input Area */}
      <div style={styles.inputArea}>
        <div style={styles.quickTips}>
          <span style={styles.tipsLabel}>Try asking:</span>
          <button 
            style={styles.tipButton}
            onClick={() => handleQuickSuggestion("Show me wireless headphones")}
          >
            "Wireless headphones"
          </button>
          <button 
            style={styles.tipButton}
            onClick={() => handleQuickSuggestion("What's your shipping policy?")}
          >
            "Shipping policy"
          </button>
        </div>
        <div style={styles.inputRow}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message here... (Press Enter to send)"
            style={styles.input}
            disabled={!isConnected}
          />
          <button 
            onClick={sendMessage} 
            style={styles.button}
            disabled={!isConnected || !input.trim()}
          >
            {isConnected ? "Send" : "Connecting..."}
          </button>
        </div>
        <div style={styles.footer}>
          <span style={styles.footerText}>
            💡 Powered by ShopAI • Secure connection • 24/7 support
          </span>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    maxWidth: 600,
    height: "80vh",
    margin: "20px auto",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    display: "flex",
    flexDirection: "column",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  header: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    padding: "16px 20px",
  },
  storeInfo: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  storeLogo: {
    fontSize: "32px",
  },
  storeName: {
    margin: 0,
    fontSize: "18px",
    fontWeight: "600",
  },
  status: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "12px",
    opacity: 0.9,
  },
  statusDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
  },
  chatBox: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
    backgroundColor: "#f9fafb",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  welcomeScreen: {
    textAlign: "center",
    padding: "40px 20px",
    color: "#6b7280",
  },
  welcomeIcon: {
    fontSize: "48px",
    marginBottom: "16px",
  },
  quickSuggestions: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "30px",
    maxWidth: "400px",
    margin: "30px auto 0",
  },
  quickButton: {
    padding: "12px 16px",
    backgroundColor: "white",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    cursor: "pointer",
    fontSize: "14px",
    textAlign: "left",
    transition: "all 0.2s",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  quickButtonHover: {
    backgroundColor: "#f8fafc",
    borderColor: "#4f46e5",
    transform: "translateY(-1px)",
  },
  messageContainer: {
    display: "flex",
    marginBottom: "8px",
  },
  message: {
    maxWidth: "80%",
    padding: "12px 16px",
    position: "relative",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
  },
  botIndicator: {
    fontSize: "11px",
    fontWeight: "600",
    color: "#6b7280",
    marginBottom: "4px",
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  messageText: {
    fontSize: "14px",
    lineHeight: "1.5",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
  },
  timestamp: {
    fontSize: "11px",
    opacity: 0.6,
    marginTop: "4px",
    textAlign: "right",
  },
  typingIndicator: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 16px",
    backgroundColor: "#f3f4f6",
    borderRadius: "18px",
    alignSelf: "flex-start",
    maxWidth: "150px",
  },
  typingDots: {
    display: "flex",
    gap: "4px",
  },
  dot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: "#9ca3af",
    animation: "pulse 1.5s infinite ease-in-out",
  },
  "@keyframes pulse": {
    "0%, 100%": { opacity: 0.4 },
    "50%": { opacity: 1 },
  },
  inputArea: {
    borderTop: "1px solid #e5e7eb",
    padding: "16px 20px",
    backgroundColor: "white",
  },
  quickTips: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "12px",
    flexWrap: "wrap",
  },
  tipsLabel: {
    fontSize: "12px",
    color: "#6b7280",
    fontWeight: "500",
  },
  tipButton: {
    fontSize: "12px",
    padding: "4px 10px",
    backgroundColor: "#f3f4f6",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    color: "#4b5563",
    transition: "background-color 0.2s",
  },
  inputRow: {
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "12px 16px",
    border: "1px solid #d1d5db",
    borderRadius: "12px",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
  },
  inputFocus: {
    borderColor: "#4f46e5",
    boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.1)",
  },
  button: {
    padding: "0 20px",
    backgroundColor: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  buttonDisabled: {
    backgroundColor: "#9ca3af",
    cursor: "not-allowed",
  },
  buttonHover: {
    backgroundColor: "#4338ca",
  },
  footer: {
    marginTop: "12px",
    textAlign: "center",
  },
  footerText: {
    fontSize: "11px",
    color: "#9ca3af",
  },
};

// Add CSS animation for typing dots
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; }
  }
`, styleSheet.cssRules.length);

export default ChatBot;