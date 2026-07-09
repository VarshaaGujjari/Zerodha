
// import React, { useState, useEffect } from "react";
// import axios, { all } from "axios";
// import { VerticalGraph } from "./VerticalGraph";
// import { holdings } from "../data/data";
// const Holdings = () => {
//   const [allHoldings, setAllHoldings] = useState([]);

//   useEffect(() => {

//     const token = localStorage.getItem("token");

//     axios.get(
//         "http://localhost:3002/holdings",
//         {
//             headers:{
//                 Authorization:`Bearer ${token}`
//             }
//         }
//     )
//     .then((res)=>{
//         setAllHoldings(res.data);
//     })
//     .catch(err=>{
//         console.log(err);
//     });

// },[]);

//   // const token = localStorage.getItem("token");

//   //   axios.get("http://localhost:3002/holdings", {
//   //       headers: {
//   //           Authorization: `Bearer ${token}`,
//   //       },
//   //   })
//   //   .then((res)=>{
//   //       setAllHoldings(res.data);
//   //   });

//   // useEffect(() => {
//   //   axios.get("http://localhost:3002/holdings").then((res) => {
//   //     // console.log(res.data);
//   //     setAllHoldings(res.data);
//   //   });
//   // }, []);

//   // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//   const labels = allHoldings.map((subArray) => subArray["name"]);

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Stock Price",
//         data: allHoldings.map((stock) => stock.price),
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//       },
//     ],
//   };

//   // export const data = {
//   //   labels,
//   //   datasets: [
//   // {
//   //   label: 'Dataset 1',
//   //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//   //   backgroundColor: 'rgba(255, 99, 132, 0.5)',
//   // },
//   //     {
//   //       label: 'Dataset 2',
//   //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//   //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//   //     },
//   //   ],
//   // };

//   return (
//     <>
//       <h3 className="title">Holdings ({allHoldings.length})</h3>

//       <div className="order-table">
//         <table>
//           <tr>
//             <th>Instrument</th>
//             <th>Qty.</th>
//             <th>Avg. cost</th>
//             <th>LTP</th>
//             <th>Cur. val</th>
//             <th>P&L</th>
//             <th>Net chg.</th>
//             <th>Day chg.</th>
//           </tr>

//           {allHoldings.map((stock, index) => {
//             const curValue = stock.price * stock.qty;
//             const isProfit = curValue - stock.avg * stock.qty >= 0.0;
//             const profClass = isProfit ? "profit" : "loss";
//             const dayClass = stock.isLoss ? "loss" : "profit";

//             return (
//               <tr key={index}>
//                 <td>{stock.name}</td>
//                 <td>{stock.qty}</td>
//                 <td>{stock.avg.toFixed(2)}</td>
//                 <td>{stock.price.toFixed(2)}</td>
//                 <td>{curValue.toFixed(2)}</td>
//                 <td className={profClass}>
//                   {(curValue - stock.avg * stock.qty).toFixed(2)}
//                 </td>
//                 <td className={profClass}>{stock.net}</td>
//                 <td className={dayClass}>{stock.day}</td>
//               </tr>
//             );
//           })}
//         </table>
//       </div>

//       <div className="row">
//         <div className="col">
//           <h5>
//             29,875.<span>55</span>{" "}
//           </h5>
//           <p>Total investment</p>
//         </div>
//         <div className="col">
//           <h5>
//             31,428.<span>95</span>{" "}
//           </h5>
//           <p>Current value</p>
//         </div>
//         <div className="col">
//           <h5>1,553.40 (+5.20%)</h5>
//           <p>P&L</p>
//         </div>
//       </div>
//       <VerticalGraph data={data} />
//     </>
//   );
// };
// export default Holdings;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          alert("Please login first.");
          return;
        }

        const res = await axios.get(
          "http://localhost:3002/holdings",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setAllHoldings(res.data);
      } catch (err) {
        console.log(err);
        alert(
          err.response?.data?.message ||
            "Failed to fetch holdings."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchHoldings();
  }, []);

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  };

  if (loading) {
    return <h3>Loading Holdings...</h3>;
  }

  return (
    <>
      <h3 className="title">
        Holdings ({allHoldings.length})
      </h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. Cost</th>
              <th>LTP</th>
              <th>Current Value</th>
              <th>P&amp;L</th>
              <th>Net Chg.</th>
              <th>Day Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const currentValue = stock.price * stock.qty;
              const investment = stock.avg * stock.qty;
              const pnl = currentValue - investment;

              const profitClass =
                pnl >= 0 ? "profit" : "loss";

              const dayClass =
                stock.day?.includes("-")
                  ? "loss"
                  : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>

                  <td>{stock.qty}</td>

                  <td>{stock.avg.toFixed(2)}</td>

                  <td>{stock.price.toFixed(2)}</td>

                  <td>{currentValue.toFixed(2)}</td>

                  <td className={profitClass}>
                    {pnl.toFixed(2)}
                  </td>

                  <td className={profitClass}>
                    {stock.net}
                  </td>

                  <td className={dayClass}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {allHoldings
              .reduce(
                (sum, stock) =>
                  sum + stock.avg * stock.qty,
                0
              )
              .toFixed(2)}
          </h5>

          <p>Total Investment</p>
        </div>

        <div className="col">
          <h5>
            {allHoldings
              .reduce(
                (sum, stock) =>
                  sum + stock.price * stock.qty,
                0
              )
              .toFixed(2)}
          </h5>

          <p>Current Value</p>
        </div>

        <div className="col">
          <h5>
            {(
              allHoldings.reduce(
                (sum, stock) =>
                  sum + stock.price * stock.qty,
                0
              ) -
              allHoldings.reduce(
                (sum, stock) =>
                  sum + stock.avg * stock.qty,
                0
              )
            ).toFixed(2)}
          </h5>

          <p>Total P&amp;L</p>
        </div>
      </div>

      {allHoldings.length > 0 && (
        <VerticalGraph data={data} />
      )}
    </>
  );
};

export default Holdings;

