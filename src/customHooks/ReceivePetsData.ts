import { useState, useEffect, useRef } from "react";
import { Characteristics, KeyFacts } from "../interface/interface";
import toast from "react-hot-toast";

export interface PetsDataType {
  _id: string;
  Auth: { email: string; name: string };
  Favorites: string[];
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

const fetchPetData = async (
  page: number,
  petType: string,
  petBreed: string
) => {
  try {
    const response = await fetch(
      `${url}/getPet?page=${page}&type=${petType}&breed=${petBreed}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const useReceivePets = (petType: string, petBreed: string) => {
  const [allPetsData, setAllPetsdata] = useState<PetsDataType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalDoc, setTotalDoc] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const currentPage =
    window.location.href.split("/")?.[
      window.location.href.split("/").length - 1
    ];

  const toastId = useRef("");
  useEffect(() => {
    const fetch = async () => {
      try {
        if (currentPage !== "adopt-a-pet") {
          toastId.current = toast.loading("Please wait...");
        }
        setLoading(true);
        const data = await fetchPetData(page, petType, petBreed);
        if (page === 1) {
          setAllPetsdata(data.response);
        } else {
          setAllPetsdata((pre) => [...pre, ...data.response]);
        }
        setTotalDoc(data.totalDoc);
        if (currentPage !== "adopt-a-pet") {
          toast.success("Pets details loaded", { id: toastId.current });
        }
        setLoading(false);
      } catch {
        toast.error("server error", { id: toastId.current });
        setLoading(false);
      }
    };

    fetch();
  }, [page, petBreed, petType, currentPage]);

  return { allPetsData, totalDoc, setPage, loading };
};

export default useReceivePets;
