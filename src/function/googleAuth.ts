import { useGoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const useGoogleAuth = (url: string) => {
  let registerType: string[] = [""];
  const navigator = useNavigate();
  if (
    window.location.href.split("/")[3] === "login" ||
    window.location.href.split("/")[3] === "register_adopt"
  ) {
    registerType = ["adopter"];
  } else {
    registerType = ["rehouses"];
  }

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const response = await fetch(url, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tokenResponse: tokenResponse.access_token,
            registerType,
          }),
          credentials: "include",
        });
        const json = await response.json();
        if (json.success) {
          toast.success(json.response);
          setTimeout(() => {
            navigator("/");
          }, 2000);
        } else {
          toast.error(json.response);
        }
      } catch {
        toast.error("server error");
      }
    },
  });
  return googleLogin;
};

export default useGoogleAuth;
