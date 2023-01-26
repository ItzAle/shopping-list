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
    setInput(item.title);
    setIsEditMode(false);

  };

  return (
    <article key={item.id} className={item.isDone ? "isDone" : "isNotDone"}>
      {!isEditMode ? (
        <div onClick={() => setIsEditMode(true)}>{item.title}</div>
      ) : (
        <div>
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
      <button onClick={() => deleteById(item.id)}>
        <AiTwotoneDelete />
      </button>
    </article>
  );
};
