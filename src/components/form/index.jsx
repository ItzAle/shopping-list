import React from 'react'

export const Form = ({style, input, Changehandler, AddItem}) => {
  return (
    <section className={style.inputs}>
    <input 
      type="text"
      value={input}
      onChange={(e) => Changehandler(e.target.value)}
    />
    <button  onClick={AddItem}>Add</button>
  </section>
  )
};