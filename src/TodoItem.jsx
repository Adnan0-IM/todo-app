import { useState } from "react";

const TodoItem = ({ inputText, index, deleteItem, id }) => {
  return (
    <div onClick={() => deleteItem(id)}>
      <li key={index}>
        {inputText}
      </li>
    </div>
  );
};

export default TodoItem;
