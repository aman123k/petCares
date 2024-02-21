import toast from "react-hot-toast";
import { PetsdataType } from "../globleContext/FindPetContext";

const getFavourites = async ({
  setItems,
}: {
  setItems: React.Dispatch<React.SetStateAction<Array<PetsdataType> | null>>;
}) => {
  const url = process.env.REACT_APP_URL as string;
  try {
    const response = await fetch(`${url}/getFavourites`, {
      credentials: "include",
    });
    const result = await response.json();
    if (result?.success) {
      setItems(result.response);
    } else {
      toast.error(result.response);
    }
  } catch (error) {
    console.log("Error fetching user data:", error);
  }
};
export default getFavourites;
