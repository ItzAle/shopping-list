import React from 'react'
import style from "./form.module.css"

export const Form = ({input, Changehandler, AddItem}) => {
  return (
    <section className={style.inputs}>
    <input 
      className={style.input}
      type="text"
      value={input}
      onChange={(e) => Changehandler(e.target.value)}
    />
    <button  onClick={AddItem}>Add</button>
  </section>
  )
};