import React, { useState } from "react";
import {v4} from 'uuid';
import style from "./taskList.module.css"

const dataBase = [
  {
    id: "1",
    title: "Manzanas",
    isDone: false,
  },
  {
    id: "2",
    title: "Arroz",
    isDone: false,
  },
  {
    id: "3",
    title: "Peras",
    isDone: true,
  },
];

export const TaskList = () => {
  //States
  const [data, setData] = useState(dataBase);
  const [input, setInput] = useState("");

  // Functions
  const deleteById = (id) => {
    const newData = data.filter((item) => item.id != id);
    setData(newData);
  };
  const AddItem = () => {
    const newItem = {
        title : input,
        id:v4() ,
        isDone: false
    };
    let newData = data;
    newData.push(newItem)
    setData(newData)
    setInput("");
  };
  const Changehandler = (value) => {
    setInput(value);
  };

  //"HTML"
  return (
    <div >
      <section>
        <input 
          type="text"
          value={input}
          onChange={(e) => Changehandler(e.target.value)}
        />
        <button  onClick={AddItem}>Add</button>
      </section>
      {data.map((item) => (
        <article key={item.id}>
          {item.title} -{" "}
          <button onClick={() => deleteById(item.id)}>Delete</button>
        </article>
      ))}
    </div>
  );
};
