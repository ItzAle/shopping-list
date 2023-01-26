import React, { useState } from "react";
import {v4} from 'uuid';
import style from "./taskList.module.css"
import {AiTwotoneDelete} from "react-icons/ai";
import { Form } from "../Form";
import { Task } from "../Task/task";



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
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };
  const AddItem = () => {
    const newItem = {
        title : input,
        id:v4() ,
        isDone: false
    };
    // let newData = data;
    // newData.push(newItem)
    setData([...data, newItem])
    setInput("");
  };
  const Changehandler = (value) => {
    setInput(value);
  };


  const updateItem = (itemToUpdate) =>{
    const newData = data.map(item => item.id == itemToUpdate.id ? itemToUpdate: item);
    setData(newData)
  }

  
  //"HTML"
  return (
    <div className={style.listContainer}>
      <Form style={style} input={input} Changehandler={Changehandler} AddItem={AddItem} />
      {data.map((item) => (
        <Task item={item} deleteById={deleteById} updateItem={updateItem} />
      ))}
    </div>
  );
};
