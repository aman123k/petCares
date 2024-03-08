import { useRef } from "react";
import toast from "react-hot-toast";

const useContactPetCares = ({
  url,
  email,
  name,
  phone,
  enquriyAbout,
  enquriyIs,
}: {
  url: string;
  email: string;
  name: string;
  phone: string | number;
  enquriyAbout: string;
  enquriyIs: string;
}) => {
  const toastId = useRef("");
  const contactPetCares = async () => {
    toastId.current = toast.loading("Please wait...");
    try {
      const res = await fetch(`${url}/contactPetCares`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, phone, enquriyAbout, enquriyIs }),
        credentials: "include",
      });
      const json = await res.json();
      console.log(json);
      if (json.success) {
        toast.success(json.response, {
          id: toastId.current,
        });
      } else {
        toast.error(json.response, { id: toastId.current });
      }
    } catch (err) {
      toast.error("Server error", { id: toastId.current });
    }
  };

  return { contactPetCares };
};

export default useContactPetCares;
