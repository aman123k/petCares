import { loadStripe } from "@stripe/stripe-js";
import { useRef } from "react";
import toast from "react-hot-toast";
const STRIPE_PUBLIC_API_KEY =
  "pk_test_51OqvnjSGTzTAboR8TMmifMME7V6oCf3j8ulYiAom1NdjBOpfxbab9XqCIqTSajVylXfXwR9DY9rNZzFWJcNv5Ysk00qA1QA9PU";
const url = process.env.REACT_APP_URL as string;
const useStripe = ({
  id,
  fee,
}: {
  id: string | null | undefined;
  fee: number;
}) => {
  const toastId = useRef("");
  const checkOut = async () => {
    try {
      const stripe = await loadStripe(STRIPE_PUBLIC_API_KEY);
      toastId.current = toast.loading("Please wait...");
      console.log("ji");
      const response = await fetch(`${url}/create-check-out`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, fee }),
        credentials: "include",
      });
      const json = await response.json();

      toast.success("stripe loaded", { id: toastId.current });
      stripe?.redirectToCheckout({
        sessionId: json.sessionId,
      });
      console.log(json.sessionId);
    } catch (err) {
      console.log(STRIPE_PUBLIC_API_KEY);
      console.log("froentEnd", err);
      toast.error("server error");
    }
  };
  return { checkOut };
};
export default useStripe;
