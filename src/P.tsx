import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Header from "./components/Header";

const socket = io("http://localhost:8080");

socket.on("connection", () => {
  console.log("Connected to server");

  socket.emit("chat message", "Hello from client!");
});

socket.on("chat message", (msg: string) => {
  console.log("Received message from server:", msg);
});

const P: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const handel = () => {};
  return (
    <div>
      <Header />
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
      />
      <button onClick={handel}>submit</button>
    </div>
  );
};

export default P;
