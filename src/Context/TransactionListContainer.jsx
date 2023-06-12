import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const TransactionListContext = createContext();

const TransactionListContainer = ({ children }) => {
  let navigate = useNavigate()
  const [data, setData] = useState();
  const [view, setView] = useState(false)
  const [id, setID] = useState()
  const [sort, setSort] = useState({sort:"id" , reverse: false})

  useEffect(() => {
    getDataApi();
  }, []);

  
  const getDataApi = () => {
    const response = axios({
      method: "GET",
      url: `https://cors-anywhere.herokuapp.com/https://recruitment-test.flip.id/frontend-test`,
      withCredentials: false,
      headers: {
        "Content-Type": "Application/json",
        "Access-Control-Allow-Origin" : "*"
      },
    }).then((data) => {
      //console.log("check - data : ", data);
      setData(data.data);
    }).catch(error => {
      console.log(error)
    });
  };

  
  const getView = (id) => {
    setView(!view)
    setID(id)
    //navigate(`/detail/${id}`)
    // setId('')
  }

  const rupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

  const kembali = () => {
    setView(!view)
  }



  console.log("check - data di context: ", data);
  //console.log("check - id di context: ", id);


  
  return (
    <TransactionListContext.Provider
      value={{
        data,
        getView,
        view,
        id,
        rupiah,
        kembali
      }}
    >
      {children}
    </TransactionListContext.Provider>
  );
};

export default TransactionListContainer;
