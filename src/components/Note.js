import React from 'react'
import noteContext from '../context/noteContext';
import { useContext } from 'react';
import Noteitem from './Noteitem';
const Note = () => {
    const Context = useContext(noteContext)
    const {notes,setNote} = Context;
  return (
    <div className="container">
    <div className='row'>{notes.map((note)=>{
      return <Noteitem title={note.title} description={note.description} key={note._id}></Noteitem>
    })}</div></div>
  )
}

export default Note
