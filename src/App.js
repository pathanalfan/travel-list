import { useState } from "react";


export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 👜</h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [initialItem,setInitialItem] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: true },
  ]);
  function handleSubmit(e) {
    if(!description) return;
    e.preventDefault();
    console.log(e);
    const newItem={id:Date.now(),description,quantity,packed:false};
    console.log(newItem);

    setDescription('');
    setQuantity('');
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 😍</h3>
      <select value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((s) => (
          <option value={s} key={s}>
            {s}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>


  );
}
function PackingList() {
  return (
    <div className="list">
      {/* <ul>
        {initialItem.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul> */}
    </div>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your List, and you already packed X (X%)</em>
    </footer>
  );
}
function Item({ item }) {
  return (
    <div>
      <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button>❌</button>
      </li>
    </div>
  );
}
