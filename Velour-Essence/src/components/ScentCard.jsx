export default function ScentCard({ scent }) {
  return (
    <div>
      <h3>{scent.scent_name}</h3>
      <p>{scent.scent_description}</p>
      <button>Add to Cart</button>
    </div>
  );
}
