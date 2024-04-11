import React from 'react'
import './Noteitem.css';
const Noteitem = (props) => {
  return (
    <div className="col-md-6 my-4">
<div class="card border-warning" >
  <div class="card-header d-flex justify-content-between">
    <div>{props.title}</div>
  <div>
  <i class="fa-solid fa-trash-can mx-2"></i>
  <i class="fa-regular fa-pen-to-square mx-2 "></i>
  </div>
  </div>
  <div class="card-body">
    <h5 class="card-title">Warning card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
  )
}

export default Noteitem
