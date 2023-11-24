import { useState } from "react";
import Logo from "./Logo.js";
import Form from "./Form.js";
import PackingList from "./PackingList.js";
import Stats from "./Stats.js";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 7, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    console.log(`New Item: ${item}`);
    setItems((currentItems) => [...currentItems, item]);
    console.log(`Items array so far: ${items}`);
  }

  function handleDeleteItems(id) {
    setItems((currentItems) =>
      currentItems.filter((item) => {
        if (item.id !== id) console.log(`Removing item: ${item}`);
        return item.id !== id;
      })
    );
  }

  function handleToggledItem(id) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearItems() {
    const userConfirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (userConfirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleToggledItem}
        onClearItems={clearItems}
      />
      {/* <PackingList items={items} /> */}
      <Stats items={items} />
    </div>
  );
}

export default App;
