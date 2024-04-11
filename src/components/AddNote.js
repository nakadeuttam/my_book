import React, {useContext,useState} from 'react'
import noteContext from '../context/noteContext'

const AddNote = () => {

    const [note,setNote] = useState( {title:"" , description:""});
    const {addNote} = useContext(noteContext);
    const handleclick = (ele) => {
        ele.preventDefault();
    
    addNote(note.title,note.description);
    }

    const onChange = (ele) => {
        setNote({...note,[ele.target.name]:ele.target.value})
    }



  return (
    <div className="container my-4">
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Add Title for your Note
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          aria-describedby="title"
          onChange={onChange}
        />
        <div id="emailHelp" className="form-text">
          Title will help you to search Note
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Add Description to your Note
        </label>
        <input
          type="text"
          className="form-control"
          id="description"
          name='description'
          onChange={onChange}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
         
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check to verify note
        </label>
      </div>
      <button type="submit" onClick={handleclick} className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
  )
}

export default AddNote
