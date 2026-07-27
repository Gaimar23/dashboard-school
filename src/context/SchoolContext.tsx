import React, { createContext, ReactNode, useState } from "react";

interface MyContextType {
  url: string;
  isCorrect: boolean;
  setIsCorrect: React.Dispatch<React.SetStateAction<boolean>>;
  handleFetch: () => void;
}

export const SchoolContext = createContext<MyContextType | undefined>(
  undefined
);

const SchoolProvider = ({ children }: { children: ReactNode }) => {
  const url = "http://localhost:5000";
  const [isCorrect, setIsCorrect] = useState(false);

  const handleFetch = () => {
    console.log("working");
  };

  const contextValues: MyContextType = {
    url,
    isCorrect,
    setIsCorrect,
    handleFetch,
  };

  return (
    <SchoolContext.Provider value={contextValues}>
      {children}
    </SchoolContext.Provider>
  );
};

export default SchoolProvider;
