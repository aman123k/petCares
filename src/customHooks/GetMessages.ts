import { useEffect, useState } from "react";
import { messageType } from "../pages/Messages_chat/components/MessageList";

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
  const [loading, setLoading] = useState<boolean>(false);
  const [allMessages, setAllMessages] = useState<Array<fetchMessage>>([]);
  const [messages, setMessages] = useState<Array<messageType>>([]);
  const [intialmessage, setIntialmessage] = useState<string>("");

  useEffect(() => {
    try {
      if (id) {
        setAllMessages([]);
        setLoading(true);
        const fetch = async () => {
          const data = await fetchMessages(id);
          setAllMessages(data?.response);
          setIntialmessage(data.intialmessage);
          setMessages([]);
          setLoading(false);
        };

        fetch();
      }
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  return {
    fetchMessages,
    allMessages,
    messages,
    setMessages,
    intialmessage,
    loading,
  };
};

export default useGetMessages;
