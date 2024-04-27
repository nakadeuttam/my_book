import React, { useEffect,useRef ,useState} from 'react'
import noteContext from '../context/noteContext';
import { useContext} from 'react';
import Noteitem from './Noteitem';
const Note = () => {

  const {addNote} = useContext(noteContext);
    const Context = useContext(noteContext)
    const {notes,get_Notes,edit_Note} = Context;
    const [note,setNote] = useState( { id:"" , etitle:"" , edescription:""});
    useEffect(()=>{
      get_Notes();      //it will call ger_Notes once
    },[]);

    const ref=useRef(null);
    const updateNote =(note)=>{
      setNote({id:note._id,etitle:note.title, edescription:note.description});
      ref.current.click();
    }
    const handleclick = (ele) => {
      edit_Note(note.id,note.etitle,note.edescription);
      ele.preventDefault();
  
  
  }
    const onChange = (ele) => {
      setNote({...note,[ele.target.name]:ele.target.value})
  }
  return (
    <>
  
  {/* model button  referencing through edit icon*/}
<button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  
</button>

{/* modal for edit_Note UI to edit note*/}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="etitle"
          aria-describedby="title"
          onChange={onChange}
          value={note.etitle}
        />
        <div id="emailHelp" className="form-text">
          Title will help you to search Note
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          name='edescription'
          onChange={onChange}
          value={note.edescription}
        />
      </div>
      
      {/* <button type="submit" onClick={handleclick} className="btn btn-primary">
        Update
      </button> */}
    </form>
      </div>
      <div className="modal-footer">
      
        <button type="submit" onClick={handleclick} className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>
    <div className="container">
    <div className='row'>{notes.map((note)=>{
      return <Noteitem title={note.title} description={note.description} key={note._id}  note={note} updateNote={updateNote}></Noteitem>
    })}</div></div>
    </>
  )
}

export default Note
