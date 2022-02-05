import React, {useState} from "react";
import styles from "./App.module.css";
import AddNote from "../src/components/AddNote/AddNote";
import Note from "../src/components/Note/Note"

const App = () => {

  return (
    <div className={styles.flexbox}>
      <AddNote/>
      <Note title="hey there" text="wassup"/>
    </div>
  );
};

export default App;
