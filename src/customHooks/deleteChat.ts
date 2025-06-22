import { useContext, useRef } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ChatContext } from "../globalContext/ChatContext";

const useDeleteChat = ({
  id,
  url,
}: {
  id: string | undefined;
  url: string;
}) => {
  const navigator = useNavigate();
  const toastId = useRef("");
  const { allConnections } = useContext(ChatContext) as {
    allConnections: () => Promise<void>;
  };
  const deleteChat = async () => {
    try {
      toastId.current = toast.loading("Please wait...");
      const res = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
        credentials: "include",
      });
      const json = await res.json();
      if (json.success) {
        toast.success(json.response, { id: toastId.current });
        allConnections();
        navigator("/messages");
      } else {
        toast.error(json.response, { id: toastId.current });
      }
    } catch (err) {
      toast.error("Server error", { id: toastId.current });
    }
  };

  return { deleteChat };
};

export default useDeleteChat;
