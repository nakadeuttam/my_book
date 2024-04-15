import React, { useEffect } from 'react'
import noteContext from '../context/noteContext';
import { useContext} from 'react';
import Noteitem from './Noteitem';
const Note = () => {
    const Context = useContext(noteContext)
    const {notes,setNote,get_Notes} = Context;
    useEffect(()=>{
      get_Notes();      //it will call ger_Notes once
    },[])
  return (
    <div className="container">
    <div className='row'>{notes.map((note)=>{
      return <Noteitem title={note.title} description={note.description} key={note._id}  note={note}></Noteitem>
    })}</div></div>
  )
}

export default Note
