import { useState, useEffect } from "react";
import InputArea from "./InputArea";
import TodoItem from "./TodoItem";
import "./App.css";

function App() {
  const [item, setItem] = useState(() => {
    const savedItem = localStorage.getItem("item");
    return savedItem ? JSON.parse(savedItem) : [];
  });

  // Save item to localStorage whenever item change
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(item));
  }, [item]);

  const handlebutton = (inputText) => {
    inputText !== "" && setItem([...item, inputText]);
  };

  const deleteItem = (id) => {
    setItem((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea handlebutton={handlebutton} />
      <div>
        <ul>
          {item.map((inputText, index) => (
            <TodoItem
              inputText={inputText}
              key={index}
              id={index}
              deleteItem={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
