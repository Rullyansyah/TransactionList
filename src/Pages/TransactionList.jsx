import React, { useContext, useEffect } from "react";
import "./TransactionList.css";
import { TransactionListContext } from "../Context/TransactionListContainer";

const TransactionList = () => {
  const TransactionContext = useContext(TransactionListContext);
  //console.log('check - TransactionContext : ', TransactionContext)

  useEffect(()=>{
    TransactionContext.getDataApi()
  },[])
  

  return (
    
      <div className="container">
        <div>
          <div className="content">
            <div className="title">
              <p>Daftar Transaksi</p>
            </div>

            <div className="info">
              <h3>Halo Kak!</h3>
              <p>
                Kamu telah melakukan transaksi sebesar <span>Rp5.000.000</span>{" "}
                sejak menggunakan Flip
              </p>
            </div>

            <div className="search">
              <input
                type="text"
                className="input"
                //value={name}
                //onChange={(e) => setName(e.target.value)}
                placeholder="Cari nama atau bank"
              />

              <select name="urutan" id="urutan">
                <option defaultValue={""}>Urutkan</option>
                <option value="namaa">Nama A-Z</option>
                <option value="nama">Nama Z-A</option>
                <option value="terbaru">Tanggal Terbaru</option>
                <option value="terlama">Tanggal Terlama</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default TransactionList;
