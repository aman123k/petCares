import React, { createContext, useState } from "react";
import { Characteristics, KeyFacts } from "../interface/interface";

interface ListingContextType {
  pet: string;
  setPet: React.Dispatch<React.SetStateAction<string>>;
  reason: string;
  setReason: React.Dispatch<React.SetStateAction<string>>;
  time: string;
  setTime: React.Dispatch<React.SetStateAction<string>>;
  handleChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  petImage: string[];
  setPetImage: React.Dispatch<React.SetStateAction<string[]>>;
  petStory: string;
  setPetStory: React.Dispatch<React.SetStateAction<string>>;
  characteristics: Characteristics;
  setCharacteristics: React.Dispatch<React.SetStateAction<Characteristics>>;
  keyFact: KeyFacts;
  setKeyFact: React.Dispatch<React.SetStateAction<KeyFacts>>;
}

const ListingContext = createContext<ListingContextType>({
  pet: "",
  setPet: () => {},
  reason: "",
  setReason: () => {},
  time: "",
  setTime: () => {},
  handleChange: () => {},
  petImage: [],
  setPetImage: () => {},
  petStory: "",
  setPetStory: () => {},
  characteristics: {
    petName: "",
    petAge: 0,
    petSize: "",
    petColor: "",
    petSex: "",
    petBreed: "",
  },
  setCharacteristics: () => {},
  keyFact: {
    Microchipped: "",
    HouseTrained: "",
    GoodWithCat: "",
    GoodWithDog: "",
    GoodWithChild: "",
    SpeciallNeed: "",
    BehaviourIssues: "",
    purebred: "",
  },
  setKeyFact: () => {},
});

const ListingContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
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
  const [keyFact, setKeyFact] = useState<KeyFacts>({
    Microchipped: "",
    HouseTrained: "",
    GoodWithCat: "",
    GoodWithDog: "",
    GoodWithChild: "",
    SpeciallNeed: "",
    BehaviourIssues: "",
    purebred: "",
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
        keyFact,
        setKeyFact,
      }}
    >
      {props.children}
    </ListingContext.Provider>
  );
};

export { ListingContext, ListingContextProvider };
