import React, { createContext, useState } from "react";
import { Characteristics } from "../interface/interface";

const ListingContext = createContext<object>({});

function ListingContextProvider(props: { children: React.ReactNode }) {
  const [pet, setPet] = useState<string>("");
  const [reason, setReason] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [petImage, setPetImage] = useState<string[]>([]);
  const [petStory, setPetStory] = useState<string>("");
  const [characteristics, setCharacteristics] = useState<Characteristics>({
    petName: "",
    petAge: 0,
    petSize: "",
    petColor: "",
    petSex: "",
    petBreed: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setCharacteristics({
      ...characteristics,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ListingContext.Provider
      value={{
        pet,
        setPet,
        reason,
        setReason,
        time,
        setTime,
        handleChange,
        petImage,
        setPetImage,
        petStory,
        setPetStory,
        characteristics,
        setCharacteristics,
      }}
    >
      {props.children}
    </ListingContext.Provider>
  );
}

export { ListingContext, ListingContextProvider };
