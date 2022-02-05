import React, {useState} from "react";
import styles from "./App.module.css";
import AddNote from "../src/components/AddNote/AddNote";
import Note from "../src/components/Note/Note"

const App = () => {


  const [notes, setNotes] = useState([]);

  return (
    <div className={styles.flexbox}>
      <AddNote />
      <Note  />
    </div>
  );
};

export default App;
