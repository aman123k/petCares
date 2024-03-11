import { loadStripe } from "@stripe/stripe-js";
import { useRef } from "react";
import toast from "react-hot-toast";
const STRIPE_PUBLIC_API_KEY = process.env
  .REACT_APP_STRIPE_PUBLIC_API_KEY as string;
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
      console.log("froentEnd", err);
      toast.error("server error");
    }
  };
  return { checkOut };
};
export default useStripe;
