import React, { useState } from "react";
import styles from "./App.module.css";
import AddNote from "../src/components/AddNote/AddNote";
import Note from "../src/components/Note/Note";
import Header from "../src/components/Header/Header";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (enteredNote) => {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        {
          title: enteredNote.title,
          text: enteredNote.text,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div className={styles.app}>
    <Header />
      <div className={styles.flexbox}>
        <AddNote onAddNote={addNote} />
        {(notes.length > 0) &&
          notes.map((note) => (
            <Note key={note.id} title={note.title} text={note.text} />
          ))}
      </div>
    </div>
  );
};

export default App;
