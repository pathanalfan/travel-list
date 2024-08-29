export default function Stats({ items }) {
  const numItems = items.length;
  const numPackItems = items.filter((items) => items.packed).length;
  const numPercent = Math.round((numPackItems / numItems) * 100);
  return (
    <footer className="stats">
      {numItems !== 0 ? numPercent !== 100 ?
        <em>You have {numItems} items on your List, and you already packed {numPackItems} ({numItems === 0 ? 0 : numPercent}%)</em> : <em>You've Got Everything!!!Ready to go✈️</em> : <em>Start adding some items to you packing list.</em>}
    </footer>
  );
}
