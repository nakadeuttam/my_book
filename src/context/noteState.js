
import { useState } from 'react';
import NoteContext from './noteContext';
const NoteState =(props)=> {
const host ="http://localhost:5000";

//Get Notes

const get_Notes= async()=>{
  const response = await fetch(`${host}/notes/Your_notes`,{method:"GET",headers:{
    'Content-Type':'application/json',
    "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjZjBmYjQ2YmZlMTczNzU5ODA1YmVjIn0sImlhdCI6MTcwODA5Nzg1NX0.iufGs7Drwakl-1MFRGsJ0ilufRuLc1brJFFwoSjwaeU"
  
  }});      //we used this function in note.js with useeffect that will run for 1st time
  
    const res_json= await response.json();
    console.log(res_json);
    setNote(res_json);
}

//Add Note
const addNote = async(title,description)=>{
 const response= await fetch(`${host}/notes/createNote`,{method: 'POST', headers:{
  'Content-Type':'application/json',
    "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjZjBmYjQ2YmZlMTczNzU5ODA1YmVjIn0sImlhdCI6MTcwODA5Nzg1NX0.iufGs7Drwakl-1MFRGsJ0ilufRuLc1brJFFwoSjwaeU"
 },body:JSON.stringify({title , description})});

 const res_json=await response.json();
 
 console.log(res_json);

setNote(notes.concat(res_json));

}

//Delete Note
const deleteNote = async (id)=>{
console.log("This note will be delete " + id); 
const response = await fetch(`${host}/notes/deleteNote/${id}`,{method:"DELETE",headers:{
  'Content-Type':'application/json',
  'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjZjBmYjQ2YmZlMTczNzU5ODA1YmVjIn0sImlhdCI6MTcwODA5Nzg1NX0.iufGs7Drwakl-1MFRGsJ0ilufRuLc1brJFFwoSjwaeU'
}});
get_Notes();
}

//Edit Note
const edit_Note =async (title,description)=>{
const response = await fetch(`${host}/notes/Your_notes`,{method:"GET",headers:{
  "Content-type":"application/json",
  "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjZjBmYjQ2YmZlMTczNzU5ODA1YmVjIn0sImlhdCI6MTcwODA5Nzg1NX0.iufGs7Drwakl-1MFRGsJ0ilufRuLc1brJFFwoSjwaeU",

}});

  const res_json= await response.json();
  console.log(res_json);
}

  
    const myNote = []
    const [notes,setNote,] = useState(myNote);

    
    return(
        /*   It specify that all children can access this state */
        <NoteContext.Provider value={{notes,setNote,addNote,deleteNote,edit_Note,get_Notes}}>
            {props.children}     
        </NoteContext.Provider>
    )
}
export default NoteState;