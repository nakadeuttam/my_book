import './Home.css'; // Import your CSS file for styling
import Note from './Note';
const Home = () => {


  return (
    <>
    <div className="container my-4">
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Add Title for your Note</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Title will help you to search Note</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Add Description to your Note</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check to verify note</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
<div>
<Note></Note>
</div>
</>
    
  
    
  )
};

export default Home;
