import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";

import "./ChatMessage.css";
export function ChatMessage({ sender, message }) {
  // const { message, sender } = props;

  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img
          src={RobotProfileImage}
          alt="user"
          className="chat-message-profile"
        />
      )}
      <div className="chat-box">{message}</div>
      {sender === "user" && (
        <img
          src={UserProfileImage}
          alt="user"
          className="chat-message-profile"
        />
      )}
    </div>
  );
}
