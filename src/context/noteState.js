
import { useState } from 'react';
import NoteContext from './noteContext';
const NoteState =(props)=> {
  //Dummy Notes instead of Actual Api
    const myNote = [
        {
          "_id": "65d0b946ceca704808a699f6",
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
            "_id": "65d0b946ceca704808a699f6",
            "user": "65cf0fb46bfe173759805bec",
            "title": "Note no. 01",
            "description": "It is my first updated note i am storing in my account",
            "date": "2024-02-17T13:48:54.706Z",
            "__v": 0
          },
          {
              "_id": "65d0b946ce",
              "user": "65cf0fb46bfe173759805bec",
              "title": "Note no. 02",
              "description": "It is my first updated note i am storing in my account",
              "date": "2024-02-17T13:48:54.706Z",
              "__v": 0
            },  {
                "_id": "65d0b946ceca704808a699f6",
                "user": "65cf0fb46bfe173759805bec",
                "title": "Note no. 01",
                "description": "It is my first updated note i am storing in my account",
                "date": "2024-02-17T13:48:54.706Z",
                "__v": 0
              },
              {
                  "_id": "65d0b946ce",
                  "user": "65cf0fb46bfe173759805bec",
                  "title": "Note no. 02",
                  "description": "It is my first updated note i am storing in my account",
                  "date": "2024-02-17T13:48:54.706Z",
                  "__v": 0
                }
    ]
    const [notes,setNote] = useState(myNote);

    
    return(
        /*   It specify that all children can access this state */
        <NoteContext.Provider value={{notes,setNote}}>
            {props.children}     
        </NoteContext.Provider>
    )
}
export default NoteState;