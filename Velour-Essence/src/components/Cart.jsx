import { useEffect, useState } from "react";

export default function Cart({ user }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchCart() {
      if (!user) return;
      const res = await fetch(`/cart/${user.user_id}`);
      const data = await res.json();
      setCartItems(data);
    }
    fetchCart();
  }, [user]);

  async function removeItem(scent_id) {
    await fetch("/cart/remove", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: user.user_id, scent_id }),
    });
    setCartItems(cartItems.filter(item => item.scent_id !== scent_id));
  }

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.scent_id}>
            {item.scent_name} - Quantity: {item.quantity}{" "}
            <button onClick={() => removeItem(item.scent_id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
