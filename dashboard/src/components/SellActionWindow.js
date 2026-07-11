
// import React, { useState, useContext } from "react";
// import axios from "axios";

// import GeneralContext from "./GeneralContext";

// import "./BuyActionWindow.css";

// const BuyActionWindow = ({ uid }) => {
//   const generalContext = useContext(GeneralContext);

//   const [stockQuantity, setStockQuantity] = useState(1);
//   const [stockPrice, setStockPrice] = useState(0.0);

//   // const handleBuyClick = async () => {
//   //   try {
//   //     await axios.post("http://localhost:3002/orders", {
//   //       name: uid,
//   //       qty: stockQuantity,
//   //       price: stockPrice,
//   //       mode: "BUY",
//   //     });

//   //     generalContext.closeBuyWindow();
//   //   } catch (err) {
//   //     console.error("Error placing order:", err);
//   //   }
//   // };

//   const handleCancelClick = () => {
//     generalContext.closeBuyWindow();
//   };

//   const handleBuyClick = async () => {
//   try {
//     // const token = localStorage.getItem("token");

//     // const token = localStorage.getItem("token");

//     // console.log("Token:", token);

//     const token = localStorage.getItem("token");
    

//     if (!token) {
//         alert("Please login first");
//         return;
//     }
//     console.log("Token from localStorage:", token);

//     await axios.post(
//       "http://localhost:3002/orders",
//       {
//         name: uid,
//         qty: Number(stockQuantity),
//         price: Number(stockPrice),
//         mode: "BUY",
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     await axios.post(
//     "http://localhost:3002/orders",
//     {
//         name: uid,
//         qty: Number(stockQuantity),
//         price: Number(stockPrice),
//         mode: "BUY",
//     },
//     {
//         headers:{
//             Authorization:`Bearer ${token}`
//         }
//     }
// );



//     alert("Order placed successfully!");

//     generalContext.closeBuyWindow();
//   } catch (err) {
//     console.error("Error placing order:", err);

//     console.log(err.response?.data);

//     alert(err.response?.data?.message || "Order failed");
//   }
// };

//   return (
//     <div className="container" id="buy-window" draggable="true">
//       <div className="regular-order">
//         <div className="inputs">
//           <fieldset>
//             <legend>Qty.</legend>
//             <input
//               type="number"
//               name="qty"
//               id="qty"
//               value={stockQuantity}
//               onChange={(e) => setStockQuantity(e.target.value)}
//             />
//           </fieldset>

//           <fieldset>
//             <legend>Price</legend>
//             <input
//               type="number"
//               name="price"
//               id="price"
//               step="0.05"
//               value={stockPrice}
//               onChange={(e) => setStockPrice(e.target.value)}
//             />
//           </fieldset>
//         </div>
//       </div>

//       <div className="buttons">
//         <span>Margin required ₹140.65</span>

//         <div>
//           <button className="btn btn-blue" onClick={handleBuyClick}>
//             Buy
//           </button>

//           <button className="btn btn-grey" onClick={handleCancelClick}>
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyActionWindow;


import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const handleSellClick = async () => {
    try {
      const token = localStorage.getItem("token");

      // User not logged in
      if (!token) {
        alert("Please login first.");
        return;
      }

      if (Number(stockQuantity) > Number(token.qty)) {
          alert("You don't have enough shares to sell.");
          return;
      }

      const response = await axios.post(
        "http://localhost:3002/orders",
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: "SELL",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(response.data.message);

      generalContext.closeSellWindow();
    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message ||
          "Something went wrong while selling the order."
      );
    }
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };


  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>

            <input
              type="number"
              value={stockQuantity}
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>

            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>
          Margin required ₹
          {(stockQuantity * stockPrice).toFixed(2)}
        </span>

        <div>
          <button
            className="btn btn-blue"
            onClick={handleSellClick}
          >
            Sell
          </button>

          <button
            className="btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;