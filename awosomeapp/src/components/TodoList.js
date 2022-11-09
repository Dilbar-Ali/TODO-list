import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [inputList, setinputList] = useState("");
  const[items,setitems]=useState([]);
  const itemEvent = (event) => {
    setinputList(event.target.value);
  };

  const ListofItems = () => {
    setitems((olditems)=>{
        return[...olditems,inputList]
    })

  };
  return (
    <>
      <div className="main">
        <div className="center">
          <h1>TODO List</h1>
          <br />
          <input type="text" placeholder="Add Items" onChange={itemEvent} />
          <button onClick={ListofItems}>+ </button>

          <ol>
          {items.map((itemsval)=>{
            return(<li>{itemsval}</li>)
          })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default TodoList;
