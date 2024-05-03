
import { useState } from 'react';
import NoteContext from './noteContext';
const NoteState =(props)=> {
const host ="http://localhost:5000";

//login state
const[loginToggle,setLoginToggle]=useState('hidden');


//Get Notes

const get_Notes= async()=>{
  const response = await fetch(`${host}/notes/Your_notes`,{method:"GET",headers:{
    'Content-Type':'application/json',
    "auth-token":localStorage.getItem('token')
  
  }});      //we used this function in note.js with useeffect that will run for 1st time
  
    const res_json= await response.json();
    console.log(res_json);
    setNote(res_json);
}

//Add Note
const addNote = async(title,description)=>{
 const response= await fetch(`${host}/notes/createNote`,{method: 'POST', headers:{
  'Content-Type':'application/json',
    "auth-token":localStorage.getItem('token')
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
  'auth-token':localStorage.getItem('token')
}});
get_Notes();      //once call get_Notes to fetch updated note from db
}

//Edit Note
const edit_Note =async (id,title,description)=>{
const response = await fetch(`${host}/notes/updateNote/${id}`,{method:"PUT",headers:{
  "Content-type":"application/json",
  "auth-token":localStorage.getItem('token')},
  body:JSON.stringify({title , description})
});

  const res_json= await response.json();
  console.log(res_json);
  get_Notes();      //once call get_Notes to fetch updated note from db
}

  
    const myNote = []
    const [notes,setNote,] = useState(myNote);

    
    return(
        /*   It specify that all children can access this state */
        <NoteContext.Provider value={{notes,setNote,addNote,deleteNote,edit_Note,get_Notes,loginToggle,setLoginToggle}}>
            {props.children}     
        </NoteContext.Provider>
    )
}
export default NoteState;