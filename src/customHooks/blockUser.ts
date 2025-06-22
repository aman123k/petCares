import { useContext, useRef } from "react";
import toast from "react-hot-toast";
import { ChatContext } from "../globalContext/ChatContext";

const useBlock = ({
  id,

  url,
}: {
  id: string | undefined;

  url: string;
}) => {
  const toastId = useRef("");
  const { allConnections } = useContext(ChatContext) as {
    allConnections: () => Promise<void>;
  };
  const blockUser = async ({
    email,
    name,
  }: {
    email: string;
    name: string;
  }) => {
    try {
      toastId.current = toast.loading("Please wait...");
      const res = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, email, name }),
        credentials: "include",
      });
      const json = await res.json();
      if (json.success) {
        toast.success(json.response, { id: toastId.current });
        allConnections();
      } else {
        toast.error(json.response, { id: toastId.current });
      }
    } catch (err) {
      toast.error("Server error", { id: toastId.current });
    }
  };

  return { blockUser };
};

export default useBlock;
