import toast from "react-hot-toast";

const sendMail = async ({
  email,
  setSendEmail,
}: {
  email: string;
  setSendEmail: Function;
}) => {
  try {
    const url = process.env.REACT_APP_URL as string;
    const response = await fetch(`${url}/sendMail`, {
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
