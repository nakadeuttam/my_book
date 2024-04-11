import React from 'react'
import './Noteitem.css';
const Noteitem = (props) => {
  return (
    <div className="col-md-6 my-4">
<div className="card border-warning" >
  <div className="card-header d-flex justify-content-between">
    <div>{props.title}</div>
  <div>
  <i className="fa-solid fa-trash-can mx-2"></i>
  <i className="fa-regular fa-pen-to-square mx-2 "></i>
  </div>
  </div>
  <div className="card-body">
    <h5 className="card-title">Warning card title</h5>
    <p className="card-text">{props.description}</p>
  </div>
</div>
</div>
  )
}

export default Noteitem
