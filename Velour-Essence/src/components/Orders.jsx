import { useEffect, useState } from "react";
import Order from "./Order";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const response = await fetch("/api/orders/1", { method: "GET" });
      const data = await response.json();
      setOrders(data);
    }
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Past Orders</h2>
      {orders.map((order) => (
        <Order key={order.order_id} order={order} />
      ))}
    </div>
  );
}
