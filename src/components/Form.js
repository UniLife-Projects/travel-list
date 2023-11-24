import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(e);

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    // console.log(`New Item: ${newItem}`);

    onAddItems(newItem);
    // console.log(`Items array so far: ${items}`) // First pass it in as prop

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>😴 What do we need for our trip? 🧐👜</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
        {/* <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option> */}
      </select>
      <label></label>
      <input
        type="text"
        placeholder="Item...😵‍💫"
        value={description}
        onChange={(e) => {
          // console.log(e);
          setDescription(e.target.value);
        }}
      />
      <button>🟢 Include ✅</button>
    </form>
  );
}
