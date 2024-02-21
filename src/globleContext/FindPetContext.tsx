import React, { createContext, useCallback, useEffect, useState } from "react";
import { Characteristics, KeyFacts } from "../interface/interface";

const FindingPetContext = createContext<object>({});

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
}

function FindingContextProvider(props: { children: React.ReactNode }) {
  const url = process.env.REACT_APP_URL as string;
  const [allPetsdata, setAllPetsdata] = useState<Array<PetsdataType>>([]);
  const [page, setPage] = useState(1);
  const [totalDoc, setTotalDoc] = useState<number>();

  const fetchPetData = useCallback(async () => {
    try {
      const response = await fetch(`${url}/getPet?page=${page}`);
      const allPetList = await response.json();
      setAllPetsdata([...allPetsdata, ...allPetList.response]);
      setPage(page + 1);
      setTotalDoc(allPetList.totalDoc);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [url, page, allPetsdata]);
  useEffect(() => {
    if (allPetsdata.length === 0) {
      fetchPetData();
    }
  }, [allPetsdata.length, fetchPetData]);

  return (
    <FindingPetContext.Provider
      value={{ fetchPetData, allPetsdata, totalDoc, setAllPetsdata }}
    >
      {props.children}
    </FindingPetContext.Provider>
  );
}

export { FindingPetContext, FindingContextProvider };
