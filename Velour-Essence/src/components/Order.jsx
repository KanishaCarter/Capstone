export default function Order({ order }) {
  return (
    <div>
      <h3>Order #{order.order_id}</h3>
      <p>Date: {order.order_date}</p>
      <p>Total: ${order.total}</p>
    </div>
  );
}
