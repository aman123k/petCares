import React, { createContext, useCallback, useState } from "react";
import { User } from "../interface/interface";

const ThemeContext = createContext<object>({});

function ThemeContextProvider(props: { children: React.ReactNode }) {
  const [userDetails, setUserDetails] = useState<User | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  const getUser = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8080/getUser", {
        credentials: "include",
      });
      const result = await response.json();
      if (result?.success) {
        setLoading(true);
        setUserDetails(result.response);
      } else {
        setUserDetails(undefined);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setUserDetails(undefined);
      console.log("Error fetching user data:", error);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{ getUser, userDetails, loading, setUserDetails }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
