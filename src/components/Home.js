import "./Home.css"; // Import your CSS file for styling
import Note from "./Note";
import AddNote from "./AddNote";

const Home = () => {

  return (
    <div>
      
      <AddNote></AddNote>
      <div>
        <Note></Note>
      </div>
      
      </div>
  );
};

export default Home;
