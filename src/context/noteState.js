
import { useState } from 'react';
import NoteContext from './noteContext';
const NoteState =(props)=> {


//Add Note
const addNote = (title,description)=>{
  console.log(description)
const noteis={
  "_id": title,
  "user": "65cf0fb46bfe173759655805bec",
  "title": title,
  "description": description,
  "date": "2024-02-17T13:48:54.706Z",
  "__v": 0
}
setNote(notes.concat(noteis));
}

//Delete Note
const deleteNote = (id)=>{
console.log("This note will be delete " + id); 
const newNote = notes.filter((note)=>{
  return note._id!== id;
  
})
setNote(newNote);
}

//Edit Note
const editNote = (note)=>{

}

  //Dummy Notes instead of Actual Api
    const myNote = [
        {
          "_id": "65d0b946ceca70480gfhj8a699f6",
          "user": "65cf0fb46bfe173759805bec",
          "title": "Note no. 01",
          "description": "It is my first updated note i am storing in my account",
          "date": "2024-02-17T13:48:54.706Z",
          "__v": 0
        },
        {
            "_id": "65d0b946ce",
            "user": "65cf0fb46bfe173759805bec",
            "title": "Note no. 02 bjyvyjgyugyug",
            "description": "It is my first updated note i am storing in my account",
            "date": "2024-02-17T13:48:54.706Z",
            "__v": 0
          },  {
            "_id": "65d0b946ceca7jh04808a699f6",
            "user": "65cf0fb46bfe173759805bec",
            "title": "Note no. 01",
            "description": "It is my first updated note i am storing in my account",
            "date": "2024-02-17T13:48:54.706Z",
            "__v": 0
          },
          {
              "_id": "65d0b94sd6ce",
              "user": "65cfdsd0fb46bfe173759805bec",
              "title": "Note no. 02",
              "description": "It is my first updated note i am storing in my account",
              "date": "2024-02-17T13:48:54.706Z",
              "__v": 0
            },  {
                "_id": "65d0hjb946ceca704808a699f6",
                "user": "65cf0fb46bfe173759805bec",
                "title": "Note no. 01",
                "description": "It is my first updated note i am storing in my account",
                "date": "2024-02-17T13:48:54.706Z",
                "__v": 0
              },
              {
                  "_id": "65d0ertb946ce",
                  "user": "65cf0fb46bfe173759805bec",
                  "title": "Note no. 02",
                  "description": "It is my first updated note i am storing in my account",
                  "date": "2024-02-17T13:48:54.706Z",
                  "__v": 0
                }
    ]
    const [notes,setNote,] = useState(myNote);

    
    return(
        /*   It specify that all children can access this state */
        <NoteContext.Provider value={{notes,setNote,addNote,deleteNote}}>
            {props.children}     
        </NoteContext.Provider>
    )
}
export default NoteState;