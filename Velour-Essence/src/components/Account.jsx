import { useEffect, useState } from "react";

export default function Account({ user }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      if (!user) return;
      const res = await fetch(`/orders/${user.user_id}`);
      const data = await res.json();
      setOrders(data);
    }
    fetchOrders();
  }, [user]);

  return (
    <div>
      <h2>Account Info</h2>
      <p>Username: {user?.username}</p>
      <h3>Past Orders</h3>
      <ul>
        {orders.map(order => (
          <li key={order.order_id}>Order ID: {order.order_id}</li>
        ))}
      </ul>
    </div>
  );
}
