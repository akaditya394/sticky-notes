import React from "react";
import styles from "./App.module.css";
import AddNote from "../src/components/AddNote/AddNote";
import Note from "../src/components/Note/Note"

const App = () => {
  return (
    <div className={styles.flexbox}>
      <AddNote />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
};

export default App;
