// import React from "react";

// import { positions } from "../data/data";

// const Positions = () => {
//   const [positions,setPositions] = useState([]);
//   useEffect(()=>{

//   const token = localStorage.getItem("token");

//   axios.get(
//   "http://localhost:3002/positions",
//   {
//   headers:{
//   Authorization:`Bearer ${token}`
//   }
//   }
//   )
//   .then(res=>{
//   setPositions(res.data);
//   })
//   .catch(console.log);

//   },[]);
//   return (
//     <>
//       <h3 className="title">Positions ({positions.length})</h3>

//       <div className="order-table">
//         <table>
//           <tr>
//             <th>Product</th>
//             <th>Instrument</th>
//             <th>Qty.</th>
//             <th>Avg.</th>
//             <th>LTP</th>
//             <th>P&L</th>
//             <th>Chg.</th>
//           </tr>

//           {positions.map((stock, index) => {
//             const curValue = stock.price * stock.qty;
//             const isProfit = curValue - stock.avg * stock.qty >= 0.0;
//             const profClass = isProfit ? "profit" : "loss";
//             const dayClass = stock.isLoss ? "loss" : "profit";

//             return (
//               <tr key={index}>
//                 <td>{stock.product}</td>
//                 <td>{stock.name}</td>
//                 <td>{stock.qty}</td>
//                 <td>{stock.avg.toFixed(2)}</td>
//                 <td>{stock.price.toFixed(2)}</td>
//                 <td className={profClass}>
//                   {(curValue - stock.avg * stock.qty).toFixed(2)}
//                 </td>
//                 <td className={dayClass}>{stock.day}</td>
//               </tr>
//             );
//           })}
//         </table>
//       </div>
//     </>
//   );
// };

// export default Positions;


import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          alert("Please login first.");
          return;
        }

        const res = await axios.get(
          "http://localhost:3002/positions",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setPositions(res.data);
      } catch (err) {
        console.log(err);

        alert(
          err.response?.data?.message ||
          "Failed to fetch positions."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPositions();
  }, []);

  if (loading) {
    return <h3>Loading Positions...</h3>;
  }

  return (
    <>
      <h3 className="title">
        Positions ({positions.length})
      </h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&amp;L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {positions.map((stock, index) => {
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
                  <td>{stock.product}</td>

                  <td>{stock.name}</td>

                  <td>{stock.qty}</td>

                  <td>{stock.avg.toFixed(2)}</td>

                  <td>{stock.price.toFixed(2)}</td>

                  <td className={profitClass}>
                    {pnl.toFixed(2)}
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
    </>
  );
};

export default Positions;