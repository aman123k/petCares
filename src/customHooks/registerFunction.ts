import { useRef } from "react";
import { UseRegisterProps } from "../interface/interface";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useRegister = ({ url, data }: UseRegisterProps) => {
  const navigator = useNavigate();
  const toastId = useRef("");

  const register = async () => {
    try {
      toastId.current = toast.loading("Please wait...");
      const res = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });
      const json = await res.json();
      if (json.success) {
        toast.success(json.response, {
          id: toastId.current,
        });
        setTimeout(() => {
          navigator("/login");
        }, 2000);
      } else {
        toast.error(json.response, {
          id: toastId.current,
        });
      }
    } catch (err) {
      toast.error("Server error", {
        id: toastId.current,
      });
    }
  };

  return { register };
};

export default useRegister;
