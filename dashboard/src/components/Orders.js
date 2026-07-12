
import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          alert("Please login first.");
          return;
        }

        const res = await axios.get(
          // "http://localhost:3002/orders",
          // "https://zerodha-ky1a.onrender.com/orders",
          `${process.env.REACT_APP_BACKEND_URL}/orders`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setOrders(res.data);
      } catch (err) {
        console.log(err);

        alert(
          err.response?.data?.message ||
            "Unable to fetch orders."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <h3>Loading Orders...</h3>;
  }

  return (
    <div className="orders">

      <h3 className="title">
        Orders ({orders.length})
      </h3>

      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders yet.</p>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Stock</th>
                <th>Type</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.name}</td>

                  <td
                    className={
                      order.mode === "BUY"
                        ? "profit"
                        : "loss"
                    }
                  >
                    {order.mode}
                  </td>

                  <td>{order.qty}</td>

                  <td>₹{order.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};

export default Orders;