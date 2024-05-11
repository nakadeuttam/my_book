import "./Home.css"; // Import your CSS file for styling
import Note from "./Note";
import AddNote from "./AddNote";

const Home = () => {

  return (
    <>
      
      <AddNote></AddNote>
      <div>
        <Note></Note>
      </div>
    </>
  );
};

export default Home;
