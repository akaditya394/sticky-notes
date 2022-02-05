import React, { useState } from "react";
import styles from "./AddNote.module.css";

const AddNote = (props) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");

  const titleChangeHandler = (event) => {
    setNoteTitle(event.target.value);
  };

  const textChangeHandler = (event) => {
    setNoteText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const noteData = {
      title: noteTitle,
      text: noteText,
      id: Math.random().toString,
    };

    props.onAddNote(noteData);

    console.log(noteTitle, noteText);
    setNoteTitle("");
    setNoteText("");
  };

  return (
    <div>
      <div className={styles.addNote}>
        <form>
          <input
            type="text"
            name="note-title"
            placeholder="note title"
            onChange={titleChangeHandler}
            value={noteTitle}
          />
          <br />
          <textarea
            rows="5"
            cols="30"
            type="text"
            name="note"
            placeholder="what's on your mind?"
            onChange={textChangeHandler}
            value={noteText}
          />
          <br />
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
