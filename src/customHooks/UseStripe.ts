import { loadStripe } from "@stripe/stripe-js";
import { PetsdataType } from "./RecivePetsData";
import toast from "react-hot-toast";
const STRIPE_PUBLIC_API_KEY = process.env
  .REACT_APP_STRIPE_PUBLIC_API_KEY as string;
const url = process.env.REACT_APP_URL;
const useStripe = ({
  Petdetails,
  fee,
}: {
  Petdetails: PetsdataType | null | undefined;
  fee: number;
}) => {
  const checkOut = async () => {
    try {
      const stripe = await loadStripe(STRIPE_PUBLIC_API_KEY);
      const response = await fetch(`${url}/create-check-out`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Petdetails, fee }),
        credentials: "include",
      });
      const json = await response.json();
      if (json.success) {
        stripe?.redirectToCheckout({
          sessionId: json.sessionId,
        });
      }
    } catch {
      toast.error("server error");
    }
  };
  return { checkOut };
};
export default useStripe;
