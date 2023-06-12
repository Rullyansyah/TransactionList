import React, { useContext, useEffect, useState } from "react";
import "./TransactionList.css";
import { TransactionListContext } from "../Context/TransactionListContainer";
import TransactionDetail from "./TransactionLDetail";
import { Link } from "react-router-dom";

const TransactionList = () => {
  const TransactionContext = useContext(TransactionListContext);
  //console.log('check - TransactionContext : ', TransactionContext)

  const [dataCustomer, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setData(TransactionContext.data);
  }, []);

  //console.log("check - query : ", query);
  console.log("check - dataCustomer : ", dataCustomer);

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
              value={query}
              onChange={(e) => setQuery(e.target.value)}
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

          <div className="data">
            <div>
              {Object.values(dataCustomer)
                .filter(
                  (a) =>
                    a.beneficiary_name.includes(query) ||
                    a.beneficiary_bank.includes(query) ||
                    query === ""
                )
                .map((x) => (
                  <div className="data-customer">
                    <div className="data-transaksi">
                      <p>
                        {" "}
                        {x.sender_bank} » {x.beneficiary_bank}{" "}
                      </p>
                      <p> {x.beneficiary_name} </p>
                      <p>
                        {" "}
                        {TransactionContext.rupiah(x.amount)} • {x.completed_at}{" "}
                      </p>
                    </div>

                    <div className="status">
                      <Link
                        to={`/detail/${x.id}`}
                        className={
                          x.status === "SUCCESS"
                            ? "button berhasil"
                            : "button gagal"
                        }
                      >
                        {x.status}
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
