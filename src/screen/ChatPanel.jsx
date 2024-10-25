import React, { useState } from "react";
import "./../styles/chatpanel.css";

export default function ChatPanel() {
  const [chats] = useState([
    { id: 1, name: "Alice", lastMessage: "Hey, how are you?", status: "R" },
    { id: 2, name: "Bob", lastMessage: "I'll call you later", status: "✓✓" },
    {
      id: 3,
      name: "Charlie",
      lastMessage: "Let's meet up tomorrow",
      status: "✓",
    },
  ]);

  const [messages, setMessages] = useState([
    { id: 1, content: "Hello!", sentByMe: true, status: "R" },
    { id: 2, content: "Hi! How are you?", sentByMe: false },
    { id: 3, content: "I'm good, thanks!", sentByMe: true, status: "✓✓" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        content: newMessage,
        sentByMe: true,
        status: "✓",
      },
    ]);
    setNewMessage("");
  };

  return (
    <div className="chat-panel-container">
      {/* Chat List */}
      <div className="chat-list">
        {chats.map((chat) => (
          <div key={chat.id} className="chat-item">
            <div className="profile-picture"></div>
            <div className="chat-info">
              <div className="chat-name">{chat.name}</div>
              <div className="chat-preview">
                {chat.lastMessage}{" "}
                <span className="message-status">{chat.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Window */}
      <div className="chat-window">
        <div className="messages">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`message ${msg.sentByMe ? "sent" : ""}`}
            >
              <div className={`message-content ${msg.sentByMe ? "sent" : ""}`}>
                {msg.content}
              </div>
              {msg.sentByMe && (
                <span className="message-status">{msg.status}</span>
              )}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="input-area">
          <input
            type="text"
            className="message-input"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button className="send-button" onClick={handleSendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
