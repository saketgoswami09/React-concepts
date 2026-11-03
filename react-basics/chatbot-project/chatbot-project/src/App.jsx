import { useState } from "react";

import ChatInput from "./components/ChatInput";

import "./App.css";
import ChatMessages from "./components/ChatMessages";

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "hello chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: "hey how can i help you!",
      sender: "robot",
      id: "id2",
    },
    {
      message: "todays date?",
      sender: "user",
      id: "id3",
    },
    {
      message: "Today is 2 nov",
      sender: "robot",
      id: "id4",
    },
  ]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
