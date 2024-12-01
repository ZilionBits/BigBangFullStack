/* eslint-disable react/prop-types */
import { useState } from "react";
import GlobalDataContext from "./GlobalDataContext";

const GlobalDataProvider = ({ children }) => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [visitor, setVisitor] = useState("");

  const handleShowWelcome = () => {
    setShowWelcome(false);
  };
 
  const handleVisitor = (getVisitor) => {
    setVisitor(getVisitor);
  };

  return (
    <GlobalDataContext.Provider
      value={{ showWelcome, handleShowWelcome, visitor, handleVisitor }}
    >
      {children}
    </GlobalDataContext.Provider>
  );
};

export default GlobalDataProvider;
