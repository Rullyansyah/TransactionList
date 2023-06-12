import React, { useContext, useEffect, useState } from "react";
import "./TransactionList.css";
import { TransactionListContext } from "../Context/TransactionListContainer";
import { Link, useNavigate, useParams } from "react-router-dom";

const TransactionDetail = () => {
  const navigate = useNavigate();
  const TransactionContext = useContext(TransactionListContext);
  const { id } = useParams();

  //console.log("check - id di TransactionDetail: ", id);
  //console.log("check - dataDetail di TransactionDetail: ", dataDetail);

  return (
    <div className="container">
      <div>
        <div className="content">
          <div className="title">
            <p>Detail Transaksi</p>
          </div>

          <div className="data-detail-customer">
            <div>
              {Object.values(TransactionContext.data)
                .filter((a) => a.id === id)
                .map((x, i) => (
                  <div key={i}>
                    <div className="id-transaksi">
                      <p>IDTRANSAKSI : {`#${x.id}`}</p>
                    </div>

                    <div className="data-customer">
                      <div className="logo">Hay</div>
                      <div className="data-detail">
                        <p className="subtitle">PENGIRIM</p>
                        <p>{x.sender_bank}</p>

                        <br />

                        <p className="subtitle">PENERIMA</p>
                        <p>{x.beneficiary_bank}</p>
                        <p>{x.account_number}</p>
                        <p>{x.beneficiary_name}</p>

                        <br />

                        <p className="subtitle">NOMINAL</p>
                        <p>{TransactionContext.rupiah(x.amount)}</p>
                        <p>Kode Unik : {x.unique_code}</p>

                        <br />

                        <p className="subtitle">CATATAN</p>
                        <p>{x.remark}</p>

                        <br />

                        <p className="subtitle">WAKTU DIBUAT</p>
                        <p>{x.created_at}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <button onClick={()=> navigate('/')} className="button is-warning">
              Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;
