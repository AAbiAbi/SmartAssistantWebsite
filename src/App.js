import logo from "./logo.svg";
import "./App.css";

import  { useState } from "react";

function App() {
  

  // useState('default content of divContent')

  const [data, setData] = useState([{ id: 1, name: "apple" },
  { id: 2, name: "banana" },
  { id: 3, name: "cherry" },
])
  const list = data.map(item=>(
     <li key={item.id}>{item.name}</li>
  ))
  let divContent = "hihi";
  function handleClick(e) {
    setData(data.filter(item=>item.id !==2))
  }
  return (
    <div>
      <ul>{}</ul>
      <button onClick={handleClick}>{list}</button>
      {/* {divContent} */}
    </div>
  );
}

export default App;
