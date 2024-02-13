import { useRef } from "react";
import toast from "react-hot-toast";
import { UserLoginProps } from "../interface/interface";
import { useNavigate } from "react-router-dom";

const useLogin = ({ url, userInfo }: UserLoginProps) => {
  const navigator = useNavigate();
  const toastId = useRef("");

  const login = async () => {
    toastId.current = toast.loading("Please wait...");
    try {
      const res = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
        credentials: "include",
      });
      const json = await res.json();
      if (json.success) {
        toast.success(json.response, {
          id: toastId.current,
        });
        setTimeout(() => {
          navigator("/");
        }, 2000);
      } else {
        toast.error(json.response, { id: toastId.current });
      }
    } catch (err) {
      toast.error("Server error", { id: toastId.current });
    }
  };

  return { login };
};
export default useLogin;
