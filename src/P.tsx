import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Header from "./components/Header";

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
