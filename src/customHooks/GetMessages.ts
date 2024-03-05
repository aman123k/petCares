import { useEffect, useState } from "react";
import { messageType } from "../pages/Messages_chat/helper/MessageList";
interface fetchMessage {
  day: string;
  messages: messages[];
}
interface messages {
  message: string;
  sender: string;
  time: string;
  chatId: string;
}
const url = process.env.REACT_APP_URL as string;
const fetchMessages = async (id: string) => {
  try {
    const response = await fetch(`${url}/reciveMessage`, {
      method: "post",
      body: JSON.stringify({ id }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const jsonMessages = await response.json();
    return jsonMessages;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const useGetMessages = ({ id }: { id: string | undefined }) => {
  const [allMessages, setAllMessages] = useState<Array<fetchMessage>>([]);
  const [messages, setMessages] = useState<Array<messageType>>([]);
  const [intialmessage, setIntialmessage] = useState<string>("");

  useEffect(() => {
    if (id) {
      setAllMessages([]);
      const fetch = async () => {
        const data = await fetchMessages(id);
        setAllMessages(data.response);
        setIntialmessage(data.intialmessage);
        setMessages([]);
      };

      fetch();
    }
  }, [id]);

  return { fetchMessages, allMessages, messages, setMessages, intialmessage };
};

export default useGetMessages;
