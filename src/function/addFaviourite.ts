import toast from "react-hot-toast";
const url = process.env.REACT_APP_URL as string;
const addFavourite = async ({ id }: { id: string }) => {
  try {
    const response = await fetch(`${url}/addFavourite`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
      credentials: "include",
    });
    const json = await response.json();
    if (json.success) {
      toast.success(json.response);
    } else {
      toast.error(json.response);
    }
  } catch {
    toast.error("Sever error");
  }
};

export default addFavourite;
