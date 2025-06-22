import React, { createContext, useCallback, useState, useEffect } from "react";
import { User } from "../interface/interface";

const ThemeContext = createContext<{
  getUser: () => Promise<void>;
  userDetails: User | undefined;
  loading: boolean;
  setUserDetails: React.Dispatch<React.SetStateAction<User | undefined>>;
}>({
  getUser: async () => {},
  userDetails: undefined,
  loading: true,
  setUserDetails: () => {},
});

const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [userDetails, setUserDetails] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  const getUser = useCallback(async () => {
    const url = process.env.REACT_APP_URL as string;
    try {
      const response = await fetch(`${url}/getUser`, {
        credentials: "include",
      });
      const result = await response.json();
      if (result?.success) {
        setUserDetails(result.response);
        setLoading(false); // Adjusted the setLoading call position
      } else {
        setUserDetails(undefined);
        setLoading(false);
      }
    } catch (error) {
      console.log("Error fetching user data:", error);
      setLoading(false);
      setUserDetails(undefined);
    }
  }, []);

  // Fetch user data on component mount
  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <ThemeContext.Provider
      value={{ getUser, userDetails, loading, setUserDetails }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context

export { ThemeContextProvider, ThemeContext };
