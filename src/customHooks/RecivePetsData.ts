import { useState, useEffect, useRef } from "react";
import { Characteristics, KeyFacts } from "../interface/interface";
import toast from "react-hot-toast";

export interface PetsdataType {
  _id: string;
  Auth: { email: string; name: string };
  Favourites: string[];
  characteristics: Characteristics;
  keyFact: KeyFacts;
  petImage: string[];
  petStory: string;
  petType: string;
  reason: string;
  time: string;
  postAddTime: string;
}

const url = process.env.REACT_APP_URL as string;

const fetchPetData = async (page: number) => {
  try {
    const response = await fetch(`${url}/getPet?page=${page}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const useRecivePets = () => {
  const [allPetsdata, setAllPetsdata] = useState<PetsdataType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalDoc, setTotalDoc] = useState<number>(0);

  const toastId = useRef("");
  useEffect(() => {
    const fetch = async () => {
      try {
        toastId.current = toast.loading("Please wait...");
        const data = await fetchPetData(page);
        setAllPetsdata((pre) => [...pre, ...data.response]);
        setTotalDoc(data.totalDoc);
        toast.success("Pets details loaded", { id: toastId.current });
      } catch {
        toast.error("server error");
      }
    };

    fetch();
  }, [page]);

  return { allPetsdata, totalDoc, setPage };
};

export default useRecivePets;
