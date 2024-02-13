import { useRef } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogOut = (url: string) => {
  const navigator = useNavigate();
  const toastId = useRef("");
  const logOut = async () => {
    try {
      toastId.current = toast.loading("Please wait...");
      const res = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const json = await res.json();
      if (json.success) {
        toast.success(json.response, { id: toastId.current });
        navigator("/login");
      } else {
        toast.error(json.response, { id: toastId.current });
      }
    } catch (err) {
      toast.error("Server error", { id: toastId.current });
    }
  };

  return { logOut };
};

export default useLogOut;
