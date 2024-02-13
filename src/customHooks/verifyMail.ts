import { useRef } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useVerifyMail = ({
  email,
  newPass,
  otp,
}: {
  email: string;
  newPass: string;
  otp: string;
}) => {
  const toastId = useRef("");
  const navigator = useNavigate();
  const url = process.env.REACT_APP_URL as string;
  const verifyMail = async (): Promise<void> => {
    toastId.current = toast.loading("Please wait...");
    try {
      const response = await fetch(`${url}/verifyOtp`, {
        method: "post",
        body: JSON.stringify({ email, newPass, otp }),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const json = await response.json();
      if (json.success) {
        toast.success(json.response, { id: toastId.current });
        setTimeout(() => {
          navigator("/login");
        }, 200);
      } else {
        toast.error(json.response, { id: toastId.current });
      }
    } catch {
      toast.error("Server Error", { id: toastId.current });
    }
  };
  return { verifyMail };
};

export default useVerifyMail;
