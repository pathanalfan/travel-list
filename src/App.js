import { useState } from "react";
import Logo from"./Componets/Logo";
import Form from "./Componets/Form"
import PackingList from "./Componets/PackingList";
import Stats  from "./Componets/Stats";


export default function App() {
  const [items,setItems]=useState([]);
  function handleAdditeams(item){
    setItems((items)=>[...items,item]);
  }
  function handleDeleteItem(id){
    setItems((items)=>items.filter(item=>item.id!==id))
  }
  function handleToggleItem(id){
    setItems(items=>items.map(item=>item.id===id?{...item,packed:!item.packed}:item))
  }
  function handleClear(){
    const confirmed=window.confirm('Are you sure you want to delete all items?');
    if(confirmed)
    setItems([]);
  }
  

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAdditeams} />
      <PackingList onToggleItem={handleToggleItem} items={items} onDeleteItem={handleDeleteItem} onClear={handleClear} />
      <Stats items={items} />
    </div>
  );
}





