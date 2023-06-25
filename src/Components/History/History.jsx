import React, { useEffect, useState } from "react";
import "./History.css";
import { useParams } from "react-router-dom";

function History() {
  const [History, SetHistory] = useState([]);
  const [Date, SetDate] = useState();
  let Params = useParams();
  useEffect(() => {
    fetch(`http://localhost:9000/Users/${Params.UserId}`)
      .then((response) => response.json())
      .then((data) => {
        SetHistory(data.History);
        SetDate(data.Date);
      });
  }, []);

  console.log(Params.UserId);
  function Maphistory() {
    return History.map((ele) => (
      <tr key={ele.id}>
        <td>
          <img className="HistoryImage" src={ele.image} alt={ele.name} />
        </td>
        <td>{ele.name}</td>
        <td>{ele.quantity}</td>
        <td>{ele.price}</td>

        <td>{Date}</td>
      </tr>
    ));
  }
  return (
    <div>
      <div className="container">
        <h1 className="mb-4">Order History</h1>
        <table className="table HistoryTable">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Product Image</th>
              <th scope="col">ProductName</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>{Maphistory()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default History;
