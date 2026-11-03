import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  function chatInput(event) {
    setInputText(event.target.value);
  }
  function sendMessages() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];
    setChatMessages(newChatMessages);
    const response = Chatbot.getResponse(inputText);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
    setInputText("");
  }
  return (
    <div className="chat-container">
      <input
        className="chat-input"
        size="30"
        placeholder="send a message to chatbot"
        type="text"
        onChange={chatInput}
        value={inputText}
      />
      <button className="send-button" onClick={sendMessages}>
        Send
      </button>
    </div>
  );
}

export default ChatInput;
