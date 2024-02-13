import { useCallback, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function GithubAuth() {
  const navigator = useNavigate();
  const githubAuth = useCallback(
    async (code: string | null): Promise<void> => {
      try {
        const response = await fetch(`http://localhost:8080/githubAuth`, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tokenResponse: code,
          }),
          credentials: "include",
        });
        const json = await response.json();
        if (json.success) {
          toast.success(json.response);
          setTimeout(() => {
            navigator("/");
          }, 200);
        } else {
          toast.error(json.response);
          setTimeout(() => {
            navigator("/");
          }, 200);
        }
      } catch {
        toast.error("server error");
        setTimeout(() => {
          navigator("/");
        }, 2000);
      }
    },

    [navigator]
  );
  useEffect(() => {
    const url = window.location.search;
    const urlPrams = new URLSearchParams(url);
    const codePrams = urlPrams.get("code");
    githubAuth(codePrams);
  }, [githubAuth]);
  return (
    <>
      <Toaster />
    </>
  );
}

export default GithubAuth;
