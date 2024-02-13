import { useRef } from "react";
import { userUpdateProp } from "../interface/interface";
import toast from "react-hot-toast";

const useUpdate = ({ url, data }: userUpdateProp) => {
  const toastId = useRef("");
  const updateUser = async () => {
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

  return { updateUser };
};

export default useUpdate;
