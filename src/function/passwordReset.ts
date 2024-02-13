import toast from "react-hot-toast";

const sendMail = async ({
  email,
  setSendEmail,
}: {
  email: string;
  setSendEmail: Function;
}) => {
  try {
    const response = await fetch("http://localhost:8080/sendMail", {
      method: "post",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const json = await response.json();
    if (json.success) {
      toast.success(json.response);
      setSendEmail(json.success);
    } else {
      toast.error(json.response);
    }
  } catch {
    toast.error("Server Error");
  }
};

export default sendMail;
