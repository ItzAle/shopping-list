import React, { useState } from "react";
import style from "./task.module.css";
import { AiTwotoneDelete } from "react-icons/ai";
import { GoX, GoCheck } from "react-icons/go";

export const Task = ({ item, deleteById, updateItem }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [input, setInput] = useState(item.title);

  function changeItem(e) {
    setInput(e.target.value);
  }
  const editConfirm = () => {
    const itemToUpdate = {
      id: item.id,
      title: input,
      isDone: item.isDone,
    };
    updateItem(itemToUpdate);
    setIsEditMode(false);
  };

const confirmShop = () =>{
  
}

  return (
    <section className={style.section}>
      
    <div className={style.list}>

    <article key={item.id} className={item.isDone ? "isDone" : "isNotDone"}>
    <input type="checkbox" className={style.checkbox} value="Paneer" />
      {!isEditMode ? (
        <div onClick={() => setIsEditMode(true)}>{item.title}</div>
      ) : (
        <div className={style.div} >
          <input type="text" value={input} onChange={changeItem} />
          <GoX
            onClick={() => {
              setInput(item.title);
              setIsEditMode(false);
            }}
          />
          <GoCheck onClick={editConfirm} />
        </div>
      )}
          <AiTwotoneDelete className={style.icon} onClick={() => deleteById(item.id)} />

    </article>
    </div>
    </section>
  );
};
