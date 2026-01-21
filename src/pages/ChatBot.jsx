import { useEffect, useRef, useState } from "react";
import { 
  Send, 
  Wifi, 
  WifiOff, 
  Bot, 
  User, 
  AlertCircle,
  X,
  Minimize2,
  Maximize2
} from "lucide-react";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [connected, setConnected] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const socketRef = useRef(null);
  const chatEndRef = useRef(null);
  const hasConnectedOnce = useRef(false);
  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    const connectWebSocket = () => {
      socketRef.current = new WebSocket(
        "wss://testing.esnep.com/wsock/api/chat/connect"
      );

      socketRef.current.onopen = () => {
        setConnected(true);
        hasConnectedOnce.current = true;

        addMessage(
          "bot",
          "👋 Welcome to BEWELL! I'm your health assistant. How can I help you today?"
        );
      };

      socketRef.current.onmessage = (event) => {
        if (typingTimeoutRef.current) {
          clearTimeout(typingTimeoutRef.current);
        }
        
        setIsTyping(false);
        addMessage("bot", event.data);
      };

      socketRef.current.onerror = () => {
        if (!hasConnectedOnce.current) return;
        addMessage("system", "⚠️ Connection error. Please try again.");
      };

      socketRef.current.onclose = () => {
        setConnected(false);
        if (!hasConnectedOnce.current) return;
        addMessage("system", "🔌 Disconnected. Click the reconnect button to restore connection.");
      };
    };

    connectWebSocket();

    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      socketRef.current?.close();
    };
  }, []);

  const addMessage = (sender, text) => {
    setMessages((prev) => [...prev, { 
      sender, 
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
  };

  const simulateTyping = () => {
    setIsTyping(true);
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
    }, 3000);
  };

  const sendMessage = () => {
    if (!input.trim() || !connected) return;

    socketRef.current.send(input);
    addMessage("user", input);
    setInput("");
    simulateTyping();
  };

  const reconnect = () => {
    if (socketRef.current?.readyState === WebSocket.OPEN) return;
    
    addMessage("system", "🔄 Attempting to reconnect...");
    setConnected(false);
    
    try {
      socketRef.current = new WebSocket(
        "wss://testing.esnep.com/wsock/api/chat/connect"
      );
      
      socketRef.current.onopen = () => {
        setConnected(true);
        addMessage("system", "✅ Successfully reconnected!");
      };
    } catch (error) {
      addMessage("system", "❌ Failed to reconnect. Please try again.");
    }
  };

  const clearChat = () => {
    if (window.confirm("Are you sure you want to clear the chat?")) {
      setMessages([]);
      addMessage("bot", "👋 Welcome back! How can I assist you today?");
    }
  };

  const getMessageIcon = (sender) => {
    switch (sender) {
      case "bot": return <Bot size={16} />;
      case "user": return <User size={16} />;
      case "system": return <AlertCircle size={16} />;
      default: return null;
    }
  };

  if (isMinimized) {
    return (
      <div style={styles.minimizedContainer}>
        <div style={styles.minimizedHeader}>
          <div style={styles.minimizedTitle}>
            <Bot size={20} />
            <span>BEWELL Assistant</span>
          </div>
          <div style={styles.minimizedControls}>
            <button 
              onClick={() => setIsMinimized(false)}
              style={styles.iconButton}
            >
              <Maximize2 size={18} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <div style={styles.botAvatar}>
            <Bot size={24} />
          </div>
          <div>
            <div style={styles.title}>BEWELL Health Assistant</div>
            <div style={styles.subtitle}>AI-powered healthcare support</div>
          </div>
        </div>
        <div style={styles.headerRight}>
          <div style={styles.connectionStatus}>
            <div style={{
              ...styles.statusDot,
              background: connected ? "#10b981" : "#ef4444"
            }} />
            <span>{connected ? "Connected" : "Disconnected"}</span>
          </div>
          <div style={styles.headerControls}>
            <button 
              onClick={() => setIsMinimized(true)}
              style={styles.iconButton}
              title="Minimize"
            >
              <Minimize2 size={20} />
            </button>
            <button 
              onClick={clearChat}
              style={styles.iconButton}
              title="Clear chat"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Connection Banner */}
      {!connected && (
        <div style={styles.connectionBanner}>
          <WifiOff size={16} />
          <span>Connection lost</span>
          <button onClick={reconnect} style={styles.reconnectButton}>
            Reconnect
          </button>
        </div>
      )}

      {/* Chat Messages */}
      <div style={styles.chatBox}>
        {messages.length === 0 ? (
          <div style={styles.welcomeContainer}>
            <div style={styles.welcomeIcon}>
              <Bot size={48} />
            </div>
            <h3 style={styles.welcomeTitle}>Welcome to BEWELL</h3>
            <p style={styles.welcomeText}>
              I'm your AI health assistant. I can help with medical information, 
              appointment scheduling, and general health queries.
            </p>
            <div style={styles.suggestions}>
              <button 
                style={styles.suggestionButton}
                onClick={() => {
                  setInput("What are the symptoms of flu?");
                  sendMessage();
                }}
              >
                🤒 Flu symptoms
              </button>
              <button 
                style={styles.suggestionButton}
                onClick={() => {
                  setInput("How to book an appointment?");
                  sendMessage();
                }}
              >
                📅 Book appointment
              </button>
              <button 
                style={styles.suggestionButton}
                onClick={() => {
                  setInput("Tips for better sleep");
                  sendMessage();
                }}
              >
                😴 Sleep tips
              </button>
            </div>
          </div>
        ) : (
          <>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  ...styles.messageContainer,
                  flexDirection: msg.sender === "user" ? "row-reverse" : "row",
                }}
              >
                <div style={{
                  ...styles.avatar,
                  background: msg.sender === "user" 
                    ? "#2563eb" 
                    : msg.sender === "system"
                    ? "#f59e0b"
                    : "#6b7280"
                }}>
                  {getMessageIcon(msg.sender)}
                </div>
                <div style={{
                  ...styles.messageWrapper,
                  alignItems: msg.sender === "user" ? "flex-end" : "flex-start"
                }}>
                  <div style={styles.messageMeta}>
                    <span style={styles.sender}>
                      {msg.sender === "bot" ? "BEWELL Assistant" : 
                       msg.sender === "system" ? "System" : "You"}
                    </span>
                    <span style={styles.timestamp}>{msg.timestamp}</span>
                  </div>
                  <div
                    style={{
                      ...styles.message,
                      background: msg.sender === "user"
                        ? "linear-gradient(135deg, #2563eb, #3b82f6)"
                        : msg.sender === "system"
                        ? "#fef3c7"
                        : "#f3f4f6",
                      color: msg.sender === "user"
                        ? "#fff"
                        : msg.sender === "system"
                        ? "#92400e"
                        : "#374151",
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div style={styles.typingIndicator}>
                <div style={styles.typingAvatar}>
                  <Bot size={16} />
                </div>
                <div style={styles.typingBubble}>
                  <div style={styles.typingDots}>
                    <div style={styles.typingDot} />
                    <div style={styles.typingDot} />
                    <div style={styles.typingDot} />
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </>
        )}
      </div>

      {/* Input Area */}
      <div style={styles.inputContainer}>
        <div style={styles.inputWrapper}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
            placeholder={
              connected
                ? "Type your health question here..."
                : "Connecting to BEWELL server..."
            }
            disabled={!connected}
            style={styles.input}
            rows="1"
          />
          <button
            onClick={sendMessage}
            style={{
              ...styles.sendButton,
              opacity: connected && input.trim() ? 1 : 0.5,
              cursor: connected && input.trim() ? "pointer" : "not-allowed",
            }}
            disabled={!connected || !input.trim()}
            title="Send message"
          >
            <Send size={20} />
          </button>
        </div>
        <div style={styles.inputFooter}>
          <div style={styles.connectionInfo}>
            {connected ? (
              <>
                <Wifi size={12} />
                <span style={styles.onlineText}>Live connection</span>
              </>
            ) : (
              <>
                <WifiOff size={12} />
                <span style={styles.offlineText}>Offline</span>
              </>
            )}
          </div>
          <div style={styles.inputHint}>
            Press Enter to send • Shift+Enter for new line
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "480px",
    height: "700px",
    margin: "40px auto",
    display: "flex",
    flexDirection: "column",
    background: "#ffffff",
    borderRadius: "20px",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
    overflow: "hidden",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    border: "1px solid #e5e7eb",
  },
  minimizedContainer: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "300px",
    background: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
    border: "1px solid #e5e7eb",
    overflow: "hidden",
  },
  minimizedHeader: {
    padding: "12px 16px",
    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
    color: "#ffffff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  minimizedTitle: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: "600",
  },
  minimizedControls: {
    display: "flex",
    gap: "4px",
  },
  header: {
    padding: "20px 24px",
    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
    color: "#ffffff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  botAvatar: {
    width: "44px",
    height: "44px",
    borderRadius: "12px",
    background: "rgba(255, 255, 255, 0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(10px)",
  },
  title: {
    fontSize: "18px",
    fontWeight: "700",
  },
  subtitle: {
    fontSize: "12px",
    opacity: 0.9,
    marginTop: "2px",
  },
  headerRight: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  connectionStatus: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "12px",
    background: "rgba(255, 255, 255, 0.1)",
    padding: "6px 12px",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
  },
  statusDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
  },
  headerControls: {
    display: "flex",
    gap: "8px",
  },
  iconButton: {
    background: "none",
    border: "none",
    color: "#ffffff",
    cursor: "pointer",
    padding: "6px",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.2s",
  },
  connectionBanner: {
    background: "#fef3c7",
    color: "#92400e",
    padding: "12px 24px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "14px",
    fontWeight: "500",
  },
  reconnectButton: {
    marginLeft: "auto",
    background: "#f59e0b",
    color: "#ffffff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    fontSize: "12px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background 0.2s",
  },
  chatBox: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
    background: "#f9fafb",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  welcomeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    textAlign: "center",
    padding: "20px",
  },
  welcomeIcon: {
    width: "80px",
    height: "80px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    marginBottom: "20px",
  },
  welcomeTitle: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "8px",
  },
  welcomeText: {
    fontSize: "14px",
    color: "#6b7280",
    lineHeight: "1.5",
    maxWidth: "320px",
    marginBottom: "24px",
  },
  suggestions: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
    maxWidth: "280px",
  },
  suggestionButton: {
    padding: "12px 16px",
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    fontSize: "14px",
    color: "#374151",
    cursor: "pointer",
    transition: "all 0.2s",
    textAlign: "left",
  },
  messageContainer: {
    display: "flex",
    gap: "12px",
    alignItems: "flex-start",
  },
  avatar: {
    width: "32px",
    height: "32px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    flexShrink: 0,
  },
  messageWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    maxWidth: "calc(100% - 44px)",
  },
  messageMeta: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "2px",
  },
  sender: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#4b5563",
  },
  timestamp: {
    fontSize: "11px",
    color: "#9ca3af",
  },
  message: {
    padding: "12px 16px",
    borderRadius: "18px",
    fontSize: "14px",
    lineHeight: "1.5",
    wordBreak: "break-word",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
  },
  typingIndicator: {
    display: "flex",
    gap: "12px",
    alignItems: "flex-start",
  },
  typingAvatar: {
    width: "32px",
    height: "32px",
    borderRadius: "10px",
    background: "#6b7280",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
  },
  typingBubble: {
    background: "#f3f4f6",
    padding: "12px 20px",
    borderRadius: "18px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
  },
  typingDots: {
    display: "flex",
    gap: "4px",
  },
  typingDot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#9ca3af",
    animation: "typingAnimation 1.4s infinite ease-in-out",
  },
  inputContainer: {
    padding: "20px 24px",
    borderTop: "1px solid #e5e7eb",
    background: "#ffffff",
  },
  inputWrapper: {
    display: "flex",
    gap: "12px",
    marginBottom: "12px",
  },
  input: {
    flex: 1,
    padding: "14px 18px",
    borderRadius: "14px",
    border: "2px solid #e5e7eb",
    fontSize: "14px",
    fontFamily: "inherit",
    outline: "none",
    transition: "all 0.2s",
    background: "#f9fafb",
    resize: "none",
    minHeight: "52px",
    maxHeight: "120px",
  },
  sendButton: {
    width: "52px",
    height: "52px",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(135deg, #2563eb, #3b82f6)",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.2s",
    flexShrink: 0,
  },
  inputFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "12px",
    color: "#6b7280",
  },
  connectionInfo: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  onlineText: {
    color: "#10b981",
  },
  offlineText: {
    color: "#ef4444",
  },
  inputHint: {
    opacity: 0.7,
  },
};

export default ChatBot;