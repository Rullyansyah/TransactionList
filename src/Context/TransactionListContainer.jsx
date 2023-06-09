import axios from "axios";
import React, { createContext } from "react";

export const TransactionListContext = createContext();

const TransactionListContainer = ({ children }) => {
  const getDataApi = async () => {
    const response = await axios.get(
      `https://recruitment-test.flip.id/frontend-test`
    );
    console.log("check - response : ", response);
  };

  return (
    <TransactionListContext.Provider
      value={{
        getDataApi,
      }}
    >
      {children}
    </TransactionListContext.Provider>
  );
};

export default TransactionListContainer;
