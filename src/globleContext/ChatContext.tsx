import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ChatConnection, User } from "../interface/interface";
import { io, Socket } from "socket.io-client";
import { ThemeContext } from "./context";
import { messageType } from "../pages/Messages_chat/components/MessageList";

interface ContextProps {
  connections: Array<ChatConnection> | undefined;
  allConnections: () => Promise<void>;
  socket: React.MutableRefObject<Socket | null>;
  notification: messageType | undefined;
  setNotification: React.Dispatch<
    React.SetStateAction<messageType | undefined>
  >;
}

// Create the context with initial empty object
const ChatContext = createContext<ContextProps>({
  connections: undefined,
  allConnections: async () => {},
  socket: { current: null },
  notification: undefined,
  setNotification: () => {},
});

const url = process.env.REACT_APP_URL as string;
export type MySocketType = Socket;
function ChatContextProvider(props: { children: React.ReactNode }) {
  const socket: React.MutableRefObject<Socket | null> = useRef<Socket | null>(
    null
  );
  const { userDetails }: { userDetails?: User } = useContext(ThemeContext);
  const [notification, setNotification] = useState<messageType | undefined>();

  useEffect(() => {
    socket.current = io(url);
  }, []);
  useEffect(() => {
    if (userDetails && userDetails.email) {
      socket.current?.emit("userConnected", userDetails);
    }
  }, [socket, userDetails]);

  const [connections, setConnections] = useState<
    Array<ChatConnection> | undefined
  >();

  const allConnections = useCallback(async () => {
    try {
      const response = await fetch(`${url}/allConnections`, {
        credentials: "include",
      });
      const json = await response.json();
      if (json.success) {
        setConnections(json.response);
      } else {
        setConnections(undefined);
      }
    } catch (error) {
      console.error("Error fetching connections:", error);
      setConnections(undefined);
    }
  }, []);

  // Provide the context value to children components
  return (
    <ChatContext.Provider
      value={{
        connections,
        allConnections,
        socket,
        notification,
        setNotification,
      }}
    >
      {props.children}
    </ChatContext.Provider>
  );
}

export { ChatContext, ChatContextProvider };
