import { useRef } from "react";
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

const useCreateChat = ({
  url,
  email,
}: {
  url: string;
  email: string | undefined;
}) => {
  const navigator = useNavigate();
  const toastId = useRef("");
  const chat = async () => {
    toastId.current = toast.loading("Please wait...");
    try {
      const res = await fetch(`${url}/createConnection`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
        credentials: "include",
      });
      const json = await res.json();
      console.log(json);
      if (json.success) {
        toast.success(json.response, {
          id: toastId.current,
        });
        setTimeout(() => {
          navigator("/messages");
        }, 2000);
      } else {
        toast.error(json.response, { id: toastId.current });
      }
    } catch (err) {
      toast.error("Server error", { id: toastId.current });
    }
  };

  return { chat };
};
export default useCreateChat;
